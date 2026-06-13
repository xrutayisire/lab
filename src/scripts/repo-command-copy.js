const copyResetDelay = 1500;

if (!window.repoCommandCopyReady) {
  window.repoCommandCopyReady = true;
  document.addEventListener("click", copyCommandFromButton);
}

async function copyCommand(command) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(command);
      return true;
    } catch {
      // Fall back for browsers that block clipboard writes in local previews.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = command;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  textarea.style.top = "0";

  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, command.length);

  try {
    document.execCommand("copy");
    return true;
  } finally {
    textarea.remove();
  }
}

async function copyCommandFromButton(event) {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("[data-copy-command]");

  if (!button) return;

  const command = button.getAttribute("data-copy-command");
  const status = button.closest("[data-repo-card]")?.querySelector("[data-copy-status]");
  const idle = button.querySelector("[data-copy-idle]");
  const done = button.querySelector("[data-copy-done]");

  function setCopied(isCopied) {
    if (idle) idle.hidden = isCopied;
    if (done) done.hidden = !isCopied;
    button.setAttribute("aria-label", isCopied ? "Command copied" : `Copy command: ${command}`);
  }

  if (!command) return;

  if (await copyCommand(command)) {
    setCopied(true);
    if (status) status.textContent = "Command copied";
  } else {
    setCopied(false);
    if (status) status.textContent = "Copy failed";
    return;
  }

  window.setTimeout(() => {
    setCopied(false);
    if (status) status.textContent = "";
  }, copyResetDelay);
}

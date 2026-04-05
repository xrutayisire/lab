import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('renders name and tagline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: 'Xavier Rutayisire' })).toBeVisible();
    await expect(page.getByText("A staff engineer's notes on AI in production")).toBeVisible();
  });

  test('shows section headings', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Field Notes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lab' })).toBeVisible();
  });

  test('shows lab card for react-js-cron', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('react-js-cron')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('field notes link navigates correctly', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'field notes' }).click();
    await expect(page).toHaveURL(/field-notes/);
    await expect(page.getByRole('heading', { level: 1, name: 'Field Notes' })).toBeVisible();
  });

  test('about link navigates correctly', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'about', exact: true }).click();
    await expect(page).toHaveURL(/about/);
    await expect(page.getByRole('heading', { level: 1, name: 'About' })).toBeVisible();
  });

  test('lab link navigates correctly', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'lab' }).click();
    await expect(page).toHaveURL(/\/lab/);
    await expect(page.getByRole('heading', { level: 1, name: 'Lab' })).toBeVisible();
  });

  test('home link navigates correctly', async ({ page }) => {
    await page.goto('/lab/');
    await page.getByRole('link', { name: 'home' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Xavier Rutayisire' })).toBeVisible();
  });
});

test.describe('About', () => {
  test('renders about content with Prismic link', async ({ page }) => {
    await page.goto('/about/');
    await expect(page.getByText('Prismic')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Prismic' })).toHaveAttribute('href', 'https://prismic.io');
  });
});

test.describe('Lab', () => {
  test('listing shows react-js-cron', async ({ page }) => {
    await page.goto('/lab/');
    await expect(page.getByText('react-js-cron')).toBeVisible();
  });

  test('detail page renders content and github link', async ({ page }) => {
    await page.goto('/lab/react-js-cron/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('react-js-cron');
    await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toBeVisible();
  });
});

test.describe('Field Notes', () => {
  test('listing shows first field note', async ({ page }) => {
    await page.goto('/field-notes/');
    await expect(page.getByText('From Code Editor to Agent Orchestrator')).toBeVisible();
  });

  test('detail page renders content and external links', async ({ page }) => {
    await page.goto('/field-notes/from-code-editor-to-agent-orchestrator/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('From Code Editor to Agent Orchestrator');
    await expect(page.getByRole('link', { name: 'Superset' }).first()).toHaveAttribute('target', '_blank');
  });
});

test.describe('Footer', () => {
  test('has linkedin, github, source, and rss links', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await expect(footer.getByText('linkedin')).toBeVisible();
    await expect(footer.getByText('github')).toBeVisible();
    await expect(footer.getByText('source')).toBeVisible();
    await expect(footer.getByText('rss')).toBeVisible();
  });
});

test.describe('404', () => {
  test('shows terminal-style error', async ({ page }) => {
    await page.goto('/this-page-does-not-exist/');
    await expect(page.getByText('No such file or directory')).toBeVisible();
    await expect(page.getByRole('link', { name: '~/home' })).toBeVisible();
    await expect(page.getByRole('link', { name: '~/lab' })).toBeVisible();
  });
});

test.describe('Responsive', () => {
  test('mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1, name: 'Xavier Rutayisire' })).toBeVisible();
    await expect(page.getByText('react-js-cron')).toBeVisible();
  });
});

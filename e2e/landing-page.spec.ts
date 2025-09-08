import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Okul Panel/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate using anchor links', async ({ page }) => {
    // Test navigation to features section
    await page.click('a[href="#ozellikler"]');
    await expect(page.locator('#ozellikler')).toBeInViewport();
    
    // Test navigation to pricing section
    await page.click('a[href="#fiyat"]');
    await expect(page.locator('#fiyat')).toBeInViewport();
  });

  test('should submit contact form', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#iletisim"]');
    
    // Fill out the form
    await page.fill('input[name="name"]', 'Test Kullanıcı');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="institution"]', 'Test Okulu');
    await page.fill('textarea[name="message"]', 'Bu bir test mesajıdır.');
    
    // Check KVKK consent
    await page.check('input[name="kvkkConsent"]');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify success message
    await expect(page.locator('.toast-success')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check mobile menu toggle
    await page.click('.mobile-menu-toggle');
    await expect(page.locator('.mobile-menu')).toBeVisible();
  });

  test('should have proper SEO meta tags', async ({ page }) => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
  });
});

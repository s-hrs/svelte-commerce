import { test } from '@playwright/test';

test('header contents', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Categories').click();
});

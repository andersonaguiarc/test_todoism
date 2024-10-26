import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://127.0.0.1:5000/#intro');
    await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();
    await page.getByText('Get a test account').click();
    await page.locator('#login-btn').click();
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('Hacer tarea');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByText('check_box_outline_blank Hacer tarea clear mode_edit')).toBeVisible();
});
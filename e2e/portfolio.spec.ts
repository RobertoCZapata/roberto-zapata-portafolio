import { test, expect } from '@playwright/test'

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct title and meta information', async ({ page }) => {
    await expect(page).toHaveTitle(/Roberto Carlos Zapata - Senior Frontend Developer/)

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /Senior Frontend Developer especializado en React/)
  })

  test('displays hero section correctly', async ({ page }) => {
    // Check main heading
    await expect(page.locator('h1')).toContainText('Roberto Carlos Zapata')

    // Check profile initials
    await expect(page.locator('text=RZ')).toBeVisible()

    // Check CTA buttons
    await expect(page.locator('text=Contactar')).toBeVisible()
    await expect(page.locator('text=Ver Proyectos')).toBeVisible()

    // Check key stats
    await expect(page.locator('text=6+ años de experiencia')).toBeVisible()
    await expect(page.locator('text=Bucaramanga, Colombia')).toBeVisible()
    await expect(page.locator('text=Disponible para proyectos')).toBeVisible()
  })

  test('navigation works correctly', async ({ page }) => {
    // Test header navigation
    const experienceLink = page.locator('nav a[href="#experience"]')
    await expect(experienceLink).toBeVisible()

    await experienceLink.click()
    await page.waitForTimeout(1000) // Wait for smooth scroll

    // Check if we're in the experience section
    await expect(page.locator('h2:has-text("Experiencia Profesional")')).toBeVisible()
  })

  test('displays experience section', async ({ page }) => {
    await page.locator('a[href="#experience"]').click()
    await page.waitForTimeout(1000)

    // Check section title
    await expect(page.locator('h2:has-text("Experiencia Profesional")')).toBeVisible()

    // Check for Globant experience
    await expect(page.locator('text=Globant')).toBeVisible()
    await expect(page.locator('text=TicketMaster')).toBeVisible()
    await expect(page.locator('text=Senior Frontend Developer')).toBeVisible()

    // Check for technologies
    await expect(page.locator('text=React.js')).toBeVisible()
    await expect(page.locator('text=Jest')).toBeVisible()
    await expect(page.locator('text=Playwright')).toBeVisible()
  })

  test('displays projects section', async ({ page }) => {
    await page.locator('a[href="#projects"]').click()
    await page.waitForTimeout(1000)

    // Check section title
    await expect(page.locator('h2:has-text("Proyectos Destacados")')).toBeVisible()

    // Check for filter buttons
    await expect(page.locator('button:has-text("Todos")')).toBeVisible()
    await expect(page.locator('button:has-text("Web Apps")')).toBeVisible()

    // Check for project cards
    await expect(page.locator('text=TicketMaster Testing Migration')).toBeVisible()
    await expect(page.locator('text=Google Analytics 4 Integration')).toBeVisible()
  })

  test('displays skills section', async ({ page }) => {
    await page.locator('a[href="#skills"]').click()
    await page.waitForTimeout(1000)

    // Check section title
    await expect(page.locator('h2:has-text("Habilidades Técnicas")')).toBeVisible()

    // Check category filters
    await expect(page.locator('button:has-text("Frontend")')).toBeVisible()
    await expect(page.locator('button:has-text("Testing")')).toBeVisible()

    // Check for specific skills
    await expect(page.locator('text=React.js')).toBeVisible()
    await expect(page.locator('text=TypeScript')).toBeVisible()
    await expect(page.locator('text=Jest')).toBeVisible()
  })

  test('displays contact section', async ({ page }) => {
    await page.locator('a[href="#contact"]').click()
    await page.waitForTimeout(1000)

    // Check section title
    await expect(page.locator('h2:has-text("Contacta Conmigo")')).toBeVisible()

    // Check contact form
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('select[name="subject"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()

    // Check contact information
    await expect(page.locator('text=roberto.zapata@email.com')).toBeVisible()
    await expect(page.locator('text=+57 300 123 4567')).toBeVisible()
  })

  test('contact form submission works', async ({ page }) => {
    await page.locator('a[href="#contact"]').click()
    await page.waitForTimeout(1000)

    // Fill out the form
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.selectOption('select[name="subject"]', 'Desarrollo Frontend')
    await page.fill('textarea[name="message"]', 'This is a test message.')

    // Submit the form
    await page.click('button[type="submit"]')

    // Check for success message
    await expect(page.locator('text=¡Mensaje enviado exitosamente!')).toBeVisible()
  })

  test('social media links are present and functional', async ({ page }) => {
    // Check LinkedIn link
    const linkedinLink = page.locator('a[aria-label="LinkedIn Profile"]').first()
    await expect(linkedinLink).toBeVisible()
    await expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/robertoczapata')

    // Check GitHub link
    const githubLink = page.locator('a[aria-label="GitHub Profile"]').first()
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/robertozapata')

    // Check email link
    const emailLink = page.locator('a[aria-label="Email Contact"]').first()
    await expect(emailLink).toBeVisible()
    await expect(emailLink).toHaveAttribute('href', 'mailto:roberto.zapata@email.com')
  })

  test('responsive design works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Check that mobile menu button is visible
    await expect(page.locator('button[aria-expanded="false"]')).toBeVisible()

    // Open mobile menu
    await page.click('button[aria-expanded="false"]')
    await page.waitForTimeout(500)

    // Check that navigation items are visible in mobile menu
    await expect(page.locator('text=Experiencia')).toBeVisible()
    await expect(page.locator('text=Proyectos')).toBeVisible()
  })

  test('print functionality works', async ({ page }) => {
    // Mock the print function
    await page.evaluate(() => {
      (window as any).printCalled = false;
      window.print = () => {
        (window as any).printCalled = true;
      };
    })

    // Click CV download button
    await page.click('button:has-text("CV PDF")')

    // Check that print was called
    const printCalled = await page.evaluate(() => (window as any).printCalled)
    expect(printCalled).toBe(true)
  })

  test('page has good SEO structure', async ({ page }) => {
    // Check for proper heading structure
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // Check for meta tags
    await expect(page.locator('meta[name="description"]')).toHaveCount(1)
    await expect(page.locator('meta[name="keywords"]')).toHaveCount(1)

    // Check for proper alt texts on important images/icons
    // Since we're using icon components, we check for aria-labels instead
    const socialLinks = page.locator('a[aria-label*="Profile"], a[aria-label*="Contact"]')
    const socialLinksCount = await socialLinks.count()
    expect(socialLinksCount).toBeGreaterThan(0)
  })

  test('accessibility features work correctly', async ({ page }) => {
    // Check for proper ARIA labels
    await expect(page.locator('a[aria-label="LinkedIn Profile"]')).toHaveCount(1)
    await expect(page.locator('a[aria-label="GitHub Profile"]')).toHaveCount(1)
    await expect(page.locator('a[aria-label="Email Contact"]')).toHaveCount(1)

    // Check for keyboard navigation
    await page.keyboard.press('Tab')
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON'].includes(focusedElement || '')).toBe(true)
  })

  test('smooth scrolling works', async ({ page }) => {
    // Test scroll to experience
    await page.click('a[href="#experience"]')
    await page.waitForTimeout(1000)

    // Check that the experience section is in view
    const experienceSection = page.locator('#experience')
    await expect(experienceSection).toBeInViewport()
  })
})
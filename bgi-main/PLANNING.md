# Project Planning: SEO and Lead Generation Website build

## Project Overview
We're building a website to focus on our lead generation and seo capabilities. We will also blog on the site as well so that we can increase our seo net. The siter needs to be seo friendly in the code as well following all of googles seo standards.

## Architecture

### Core Components:
1. **Website UI**
   - Show capabilities of our company
   - login section for us to blog
   - Article section to pull articles from database
   - Store blogs in Supabase
   - Needs to be searchable by Google bots and others (no react which hides seo)

2. **Supabase Database**
   - Store blogs and users in database
   - Users will be associated with their companies
   - The users that are admins can add companies and edit database
   - The users with article permissions will be able to write articles
   - articles will be taggable so users can filter tags to read certain topics
   - Store contact us form fills in database
   - Tables will be created and managed via Supabase MCP server


### Technology Stack:
- **Language**: NodeJS
- **Database**: Supabase

## Development Process

The development will follow a task-based approach where each component will be implemented sequentially. We should:

1. Start by reviewing the current project structure
2. Build upon project structure as needed
2. Create database tables using Supabase MCP server
3. Implement simple document ingestion pipeline
5. Develop UI
6. Connect all components and ensure they work together
7. Test the complete system

## Design Principles

1. **Modularity**: Keep components decoupled for easier maintenance
2. **Simplicity**: Focus on making the system easy to understand and modify
3. **Performance**: Optimize for response time in knowledge retrieval
4. **User Experience**: Make the UI relatable to a streamlined website

## Environment Configuration


## Expected Output

A functional Website where users can:
- View the services Blue Glass Insights provides
- Complete a form in footer to subscribe to our newsletter
- Contact us by submitting a user form if necessary from teh contact page
- See latest 3 blogs snippet on homepage and can read the rest from the /articles page

## Notes

When implementing this project, make sure to:
- Mark tasks complete in the task.md file as you finish them
- Use the Supabase MCP server to create and manage database tables
- Create a clean, intuitive User interface

## Progress & Completed Steps (as of June 2025)

1. **Project Structure & Planning**
   - Reviewed and documented project requirements and architecture.
   - Outlined main UI wireframes and user flows.

2. **Database Setup (Supabase)**
   - Created tables: `users` (with roles array and enabled flag), `articles` (with enabled flag), `tags`, and `article_tags`.
   - Set up storage bucket `article-images` for blog/article images.

3. **UI Scaffolding**
   - Home, login, dashboard, article add/edit, and article list pages scaffolded.
   - Integrated a WYSIWYG editor (react-quill) for blog content with image upload to Supabase Storage.

4. **Authentication & User Management**
   - Integrated Supabase Auth for login.
   - Admin dashboard for user management: view users, assign roles (`ADMIN`, `AUTHOR`, `CLIENT`), enable/disable users.

5. **Article Management**
   - Article editor supports create, edit, delete, enable/disable, and image cleanup.
   - Articles are linked to authors; only authors/admins can edit/delete/enable/disable.
   - Admin dashboard lists all articles (authors see only their own), with enable/disable and edit actions.

6. **Permissions & Security**
   - Role-based access for admin/user features.
   - Only enabled users and articles are active in the UI.

7. **Article Slugs & Routing**
   - Added unique slug field to articles, auto-generated from title and editable in the editor.
   - Ensured slug uniqueness and handled collisions.
   - Updated all article links and detail pages to use /article/:slug routes for SEO-friendly URLs.
   - Migrated demo articles to use slugs.
   - Homepage and article detail pages now use slug-based navigation.

## SEO Best Practices for Blue Glass Insights

### 1. Use SSR/SSG Frameworks
- **Next.js (React)** is the most popular choice for SSR/SSG.
- Allows pre-rendering of pages with all content and meta tags.
- Google and all bots see your content instantly, improving SEO and social sharing.
- **Action:** Consider migrating the project to Next.js for optimal SEO.

### 2. Meta Tags and Structured Data
- Use libraries like `react-helmet` (for CSR) or Next.js's `<Head>` for dynamic meta tags per page.
- SSR ensures meta tags and structured data are present in the initial HTML.
- **Action:** Implement dynamic meta tags and structured data for all key pages (services, articles, home, etc.).

### 3. Sitemap and robots.txt
- Generate and serve a `sitemap.xml` and `robots.txt` for better crawling and indexing by search engines.
- **Action:** Automate sitemap generation and ensure robots.txt is present and correct.

### 4. Accessible URLs
- Use clean, descriptive URLs for each service, article, and key page.
- Improves both SEO and user experience.
- **Action:** Review and update routing to ensure URLs are SEO-friendly (e.g., `/service/local-seo-google-maps-optimization`).

## Navigation & Menu Layout

### Main Menu Structure
- **Home**
- **About**
- **Service** (dropdown by category, each category expands to list services)
  - Each service links to its detail page (e.g., /service/[slug])
- **Pages** (dropdown)
  - About
  - Service
  - Service Details
  - Team Member
  - Pricing
  - Portfolio
  - Portfolio Details
  - Contact
- **Portfolio** (dropdown)
  - Portfolio
  - Portfolio Details

### Service Dropdown
- Dynamically generated from service categories and serviceData.js
- Each category is a submenu, listing all services in that category

### Responsive/Mobile Menu
- Collapsible menu for mobile
- Dropdowns and submenus supported
- Off-canvas sidebar for mobile navigation

### Special Elements
- Header call-to-action button (header-btn)
- Logo always links to Home

### Notes
- Multiple Navbar variants exist, but structure is consistent
- All menu items and dropdowns must be preserved in migration

## Recent Progress & Formatting Conventions (June 2025)

### Centralized Service Data Structure
- Created/updated `serviceData.js` to hold all service info: `title`, `slug`, `shortDesc`, `longDesc`, `category`, `image` (home page), `banner`, `detailImage` (service detail), and `faqs`.
- Home page uses original `image` for thumbnails; service detail pages use new `banner` and `detailImage` fields for relevant, modern images (from Pexels/Unsplash).
- All service descriptions and FAQs enhanced with advanced capabilities (local listing management, review monitoring, AI-powered content, competitor analysis, bulk location management, advanced reporting) using SEO-friendly, user-focused language.
- Integrated content and features from provided PDFs and semrush.txt, without referencing external brands.

### UI/UX & SEO Enhancements
- Home and service detail pages refactored to use centralized data, ensuring non-destructive updates to visuals.
- Menu updated to use categorized dropdown for services, dynamically generated from serviceData.js.
- Breadcrumbs and detail page layouts improved for accessibility, SEO (proper heading structure, no duplicate titles), and visual clarity (consistent text color, text wrapping around images, etc.).
- Fixed issues with background images, gradients, and menu visibility.
- Ensured all content is original, SEO-optimized, and user-focused.

### Sticky Menu & Logo Handling
- Implemented logic to swap the logo from white to dark when the sticky menu appears, using state/effect to detect sticky state and update the logo image source accordingly.
- Ensured logo swap is robust and does not affect other menu visuals.

### Troubleshooting & Guidance
- Diagnosed and resolved blank page issues caused by unescaped single quotes or syntax errors in serviceData.js.
- Provided guidance for handling large/binary PDFs and future content integration (OCR/text extraction).

### General Conventions
- All changes are non-destructive to home page visuals and maintain clean, accessible, and SEO-friendly code.
- Provided clear next steps and troubleshooting guidance throughout development.
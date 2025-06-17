Chunked Migration Plan for Next.js (SEO-First)
Chunk 1: Project Setup & Global Layout
Verify Next.js project is working (npm run dev in bgi-main-nextjs).
Set up global styles (copy index.css or set up Tailwind if needed).
Create a global layout:
Add your Navbar and Footer components.
Ensure the menu structure matches your Planning.MD.
Use <Head> from next/head for global meta tags.
Chunk 2: Home Page & Static Pages
Move and refactor the Home page to /pages/index.js.
Move About, Contact, and other static pages to /pages/about.js, /pages/contact.js, etc.
Update all navigation to use next/link.
Chunk 3: Services & Dynamic Routing
Move service data and components.
Set up dynamic routes for services (e.g., /pages/service/[slug].js).
Use getStaticProps/getStaticPaths for SEO-friendly pre-rendering.
Chunk 4: Blog/Articles
Move blog/article components and data.
Set up dynamic routes for articles (e.g., /pages/articles/[slug].js).
Fetch articles from Supabase using SSR/SSG.
Chunk 5: Authentication & User Dashboard
Set up Supabase Auth helpers.
Implement login, signup, and protected routes.
Create user dashboard/profile pages.
Chunk 6: Final SEO & Testing
Add dynamic meta tags and Open Graph tags per page.
Generate sitemap.xml and robots.txt.
Test with Lighthouse and Google Search Console.
Ready to Start?
Let’s begin with Chunk 1: Project Setup & Global Layout.
Would you like to:
Start by copying your global styles and setting up the Navbar/Footer?
See example code for a Next.js layout with SEO meta tags?
Get a checklist for this first chunk?
Let me know how you want to proceed, and I’ll guide you step by step!
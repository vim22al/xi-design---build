# Sanity Studio Guide: XI Design & Build

Welcome to your content management system (CMS). This guide explains how to log in and update your blog and projects.

## 1. How to Access the Studio

You can access the Sanity Studio by visiting:
**[https://xi-design-build-vimal.netlify.app/admin](https://xi-design-build-vimal.netlify.app/admin)**

Alternatively, use the **"Admin"** link in the navigation menu or **"Admin Studio"** in the footer.

## 2. Logging In

1.  Click the **"Log in with Sanity"** button (or Google/GitHub if you used those to sign up).
2.  If you don't have access yet, you need to be added as a collaborator to the project at [sanity.io/manage](https://www.sanity.io/manage).

## 3. Updating the Blog

Once logged in, you will see a list of document types on the left:

-   **Posts**: This is where you manage your blog entries.
    -   Click "Create new Post" to start a new article.
    -   Fill in the **Title**, **Slug** (generate it from the title), **Author**, **Featured Image**, and **Content**.
    -   **Excerpt**: A short summary that appears on the blog grid.
    -   **SEO**: Fill in the SEO title and description for better search engine ranking.
-   **Authors**: Manage the people writing the articles.
-   **Categories**: Manage blog categories (e.g., "Architecture", "Innovation").

## 4. Updating Projects

-   **Projects**: Manage your portfolio items.
    -   **Main Image**: The primary image shown in the gallery.
    -   **Gallery**: Add multiple images for the project detail page.
    -   **Details**: Add key-value pairs like "Location", "Surface Area", etc.

## 5. Publishing Changes

When you finish editing a document:
1.  Click the green **"Publish"** button at the bottom right.
2.  Your changes will be live on the website immediately (if using the live API) or after a short delay depending on CDN settings.

---

**Note**: If you see "Mock Data Fallback" in the console or the site isn't showing your real posts, ensure your `NEXT_PUBLIC_SANITY_PROJECT_ID` is correctly set in your environment variables.

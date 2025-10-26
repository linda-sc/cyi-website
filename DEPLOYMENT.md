# GitHub Pages Deployment Guide

## Setup for GitHub Pages

Your Next.js site is configured for static export. Follow these steps to deploy to GitHub Pages:

## Option 1: Using GitHub Actions (Recommended)

### 1. Create the workflow file

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./out"

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

### 2. Enable GitHub Pages in your repository

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 3. Push your code

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

GitHub Actions will automatically build and deploy your site!

## Option 2: Manual Deployment using gh-pages

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Update package.json

Add these to your scripts:

```json
"deploy": "npm run export && gh-pages -d out"
```

### 3. Deploy

```bash
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **gh-pages** branch and **/ (root)** folder

## Important Notes

⚠️ **Image Optimization**: Images are set to unoptimized mode for static export
⚠️ **API Routes**: Not available with static export
⚠️ **Client Components**: Ensure any dynamic features work client-side only

## Building Locally

To test the static build locally:

```bash
npm run export
```

The static files will be in the `out/` directory. You can test it with:

```bash
cd out
python -m http.server 8000
```

Or use `npx serve out`

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a file called `out/.nojekyll` (already created by deploy script)
2. In your repository settings, go to Pages and add your custom domain

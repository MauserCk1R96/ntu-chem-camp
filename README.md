# NTU Chemistry Camp

This is a [Next.js](https://nextjs.org) project for the NTU Chemistry Camp website.

## Getting Started

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the homepage by modifying `app/page.tsx`. The page auto-updates as you edit the file.

On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution policy blocks `npm.ps1`.

## Checks

```powershell
npm.cmd run lint
npm.cmd run build
```

## Gallery Photos

Activity photos are managed from `app/gallery/gallery-data.ts`.

To add photos:

1. Put image files into the matching folder under `public/gallery/`, for example:

```text
public/gallery/main-experiment/photo-1.jpg
public/gallery/main-experiment/photo-2.jpg
public/gallery/main-experiment/photo-3.jpg
```

2. Add those filenames to the matching category in `app/gallery/gallery-data.ts`:

```ts
images: ["photo-1.jpg", "photo-2.jpg", "photo-3.jpg"]
```

3. Optional: set `coverImage` to one filename if you want a specific category cover.

To add a new activity category, add one object to `galleryCategories` and create the matching folder under `public/gallery/`.

## Notes About This Machine

This Windows environment has shown certificate verification problems with npm and Git. Prefer fixing the local CA certificate setup. For a one-time dependency install only, this command can work around npm registry certificate failures:

```powershell
npm.cmd --strict-ssl=false install
```

Avoid saving `strict-ssl=false` as a global npm setting unless you understand the security tradeoff.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)

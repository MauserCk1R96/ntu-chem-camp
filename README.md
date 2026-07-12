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

## Vercel Deployment Workflow

Vercel has three default environments: Local Development, Preview, and Production. See the official Vercel documentation on [deployment environments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production).

### Local Development

Use this while editing the site on your computer.

```powershell
npm.cmd install
npm.cmd run dev
```

If the project uses Vercel environment variables later, link the local folder and pull them into `.env.local`:

```powershell
npx vercel link
npx vercel env pull
```

### Preview Environment

Use Preview for pre-production review. Vercel creates a preview deployment when you push to a branch that is not the production branch, open a pull request, or deploy with the CLI without `--prod`.

Recommended flow:

```powershell
git checkout -b preview/update-content
git add .
git commit -m "Update site content"
git push origin preview/update-content
```

Then open a pull request and use the Preview URL from GitHub or the Vercel Dashboard to check the site before merging.

Preview URLs usually come in two forms:

- Branch URL: always points to the newest deployment from that branch.
- Commit URL: points to the exact deployment for one commit.

### Production Environment

Production is the public website. Merge only reviewed changes into the production branch, usually `main`.

```powershell
git checkout main
git merge preview/update-content
git push origin main
```

You can also deploy production explicitly with:

```powershell
npx vercel --prod
```

## Notes About This Machine

This Windows environment has shown certificate verification problems with npm and Git. Prefer fixing the local CA certificate setup. For a one-time dependency install only, this command can work around npm registry certificate failures:

```powershell
npm.cmd --strict-ssl=false install
```

Avoid saving `strict-ssl=false` as a global npm setting unless you understand the security tradeoff.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Environments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production)

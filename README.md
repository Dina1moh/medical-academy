# Medical Academy

Version 1 MVP for a professional educational website for an Anatomy & Embryology instructor.

The project is intentionally simple: no paid services, no Node backend, no database, and no custom admin dashboard.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn-style reusable UI components
- Framer Motion for subtle animations
- Lucide Icons
- React Hook Form
- Zod
- Google Apps Script + Google Sheets for registration storage
- Vercel deployment

## Folder Structure

```text
app/
  contact/
  courses/
  learning-method/
  resources/
  globals.css
  icon.svg
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  ui/
  contact-form.tsx
  footer.tsx
  icon-card.tsx
  motion-section.tsx
  navbar.tsx
  section-heading.tsx
  youtube-embed.tsx
docs/
  google-sheet-example.csv
google-apps-script/
  Code.gs
lib/
  courses.ts
  registration.ts
  site-data.ts
  utils.ts
public/
  images/
courses.json
```

## Content Management

All course content is stored in `courses.json`.

The instructor currently has one course. Future courses can be added by adding another object to the array.

Each course contains:

- `title`
- `description`
- `modules`
- `referenceBooks`
- `previewVideoLink`
- `price`
- `status`
- `image`

Videos are never uploaded to the project. Use YouTube embed links only, for example:

```json
"previewVideoLink": "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
```

Images are placeholders now and can be replaced later in `public/images`.

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

On Vercel, set:

```bash
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Registration Flow

The registration form posts directly from the browser to a Google Apps Script web app using a hidden form submission. This avoids browser CORS issues without adding a Node backend or database.

Required fields:

- Full Name
- Phone Number
- University
- Academic Year

Optional fields:

- Email
- Message

After a successful submission, the user sees:

```text
Registration completed successfully.
```

Then they can click `Continue on WhatsApp`, which opens:

```text
https://wa.me/201096592805?text=Hello%20Doctor,%20I%20would%20like%20to%20register%20for%20the%20Anatomy%20%26%20Embryology%20Course.
```

The site does not send WhatsApp messages automatically.

## Google Sheet Columns

Use a sheet tab named:

```text
Registrations
```

Columns:

| Date | Name | Phone | University | Academic Year | Email | Message |
| --- | --- | --- | --- | --- | --- | --- |

An example CSV is available at `docs/google-sheet-example.csv`.

## Google Apps Script Deployment

1. Create a new Google Sheet.
2. Rename the first sheet tab to `Registrations`.
3. Add this header row:

```text
Date, Name, Phone, University, Academic Year, Email, Message
```

4. Open Extensions > Apps Script.
5. Replace the default code with `google-apps-script/Code.gs`.
6. Click Save.
7. Click Deploy > New deployment.
8. Select type: Web app.
9. Set Execute as: Me.
10. Set Who has access: Anyone.
11. Click Deploy.
12. Copy the Web app URL.
13. Add it as `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`.

## Vercel Deployment

1. Push the project to GitHub.
2. Open Vercel and import the repository.
3. Framework preset should be Next.js.
4. Add the environment variables listed above.
5. Click Deploy.

No backend deployment is required.

## SEO

Implemented:

- Global metadata
- Page titles and descriptions
- OpenGraph metadata
- Twitter metadata
- Robots metadata
- `robots.txt` route
- `sitemap.xml` route
- Favicon placeholder

Set `NEXT_PUBLIC_SITE_URL` in Vercel so sitemap and robots use the live domain.

## Performance

- Static App Router pages
- `next/image` for placeholders and preview images
- Lazy YouTube iframe loading
- Minimal client components
- Responsive Tailwind layouts

## Contact Info

- Phone: `01096592805`
- Email: `M.mohamed0073@nub.edu.eg`
- Location: `Beni Suef Egypt`

Social links remain placeholders:

- LinkedIn
- Facebook
- Instagram
- Telegram

## Maintenance Notes

- Edit course content in `courses.json`.
- Replace placeholder images in `public/images`.
- Replace social links in `lib/site-data.ts`.
- Replace the Google Apps Script URL in `.env.local` and Vercel when redeployed.

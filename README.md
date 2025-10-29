# my-portfolio-next

Personal portfolio built with Next.js and TypeScript showcasing my work in both software development and media. It features development projects with live/status badges, tech stack tags, and a dark mode indicator, plus curated media galleries for concerts, pets, and travel photography.

## Features

- Next.js App Router with TypeScript
- Tailwind CSS styling + shadcn/ui components
- Dark mode support with theme toggle
- Projects section with:
  - Status badge (Live, In Development, Planned, Archived)
  - Conditional link: live site if deployed, else GitHub repo
  - Tech stack tags (e.g., Next.js, React, Supabase)
  - Dark mode indicator per project
- Media galleries grouped by category (Concert, Pets, Travel)

## Tech Stack

- Next.js, React, TypeScript
- Tailwind CSS
- shadcn/ui (Radix-based components)

## Project Structure```

src/
app/
page.tsx # Home
about/page.tsx # About
contact/page.tsx # Contact
media/page.tsx # Media gallery
layout.tsx # Root layout + ThemeProvider
globals.css # Tailwind styles
components/
devProjects.tsx # Projects grid with badges/tags
ui/ # shadcn/ui components (Badge, Tabs, etc.)
lib/
data.ts # Media categories + Dev projects data
utils.ts
public/
images/ # Project/media assets

```

## Data-driven Projects

Edit `src/lib/data.ts` to manage your projects:

- `status`: "deployed" | "development" | "planned" | "archived"
- `siteUrl` and `repoUrl` for conditional linking
- `tech`: string[] to render stack tags
- `darkMode`: boolean to show the "Dark mode" indicator

## License

MIT
```

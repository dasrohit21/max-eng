# Max Engineering

Official website for **Max Engineering** — an industrial Electrical & Instrumentation company based in Jamshedpur, India. Established in 2005, specializing in process automation, instrumentation, and electrical services for major industrial plants.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Neon)
- **Authentication:** NextAuth.js (Google OAuth)
- **AI Chat:** Google Gemini API
- **Deployment:** Vercel

## Features

- Responsive company website (Home, About, Services, Projects, Gallery, Blog, Contact)
- AI-powered chat widget for visitor inquiries
- Admin dashboard for managing projects, blog posts, gallery images, and contact submissions
- Contact form with database storage
- Image upload support
- SEO-optimized pages

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (or [Neon](https://neon.tech/) account)
- Google OAuth credentials
- Google Gemini API key

### Installation

```bash
git clone https://github.com/dasrohit21/max-eng.git
cd max-eng
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL=your_postgresql_connection_string

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

ADMIN_EMAILS=admin@example.com

GEMINI_API_KEY=your_gemini_api_key
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  page.tsx              # Home page
  about/                # About page
  services/             # Services page
  projects/             # Projects listing & detail pages
  gallery/              # Photo gallery
  blog/                 # Blog listing & detail pages
  contact/              # Contact page with form
  admin/                # Admin dashboard
  api/                  # API routes (chat, contact, admin, auth)
components/
  Navbar.tsx            # Navigation bar with mobile menu
  Footer.tsx            # Site footer
  ChatWidget.tsx        # AI chat widget
  FloatingContact.tsx   # Floating WhatsApp & call buttons
lib/
  db.ts                 # Database connection
  data.ts               # Static data
```

## License

All rights reserved. Max Engineering.

# DanceBuddy Landing Page

A modern, responsive landing page for DanceBuddy - the ultimate app for dancers to organize and store their moves, choreographies, and battles.

## 🚀 Tech Stack

- **React** - UI library for building component-based interfaces
- **Vite** - Next-generation frontend build tool for fast development
- **Vanilla CSS** - Custom styling with animations and responsive design

## 📁 Project Structure

```
dancebuddy-landing-page/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx             # Hero section with main CTA
│   │   ├── Problem.jsx          # Problem statement section
│   │   ├── Features.jsx         # Feature cards grid
│   │   ├── HowItWorks.jsx       # Step-by-step process
│   │   ├── Screenshots.jsx      # App screenshots showcase
│   │   ├── Testimonials.jsx     # Customer testimonials
│   │   ├── CTASection.jsx       # Final call-to-action
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Engaging fade-in animations for better UX
- **Component-Based** - Modular React components for easy maintenance
- **Fast Development** - Vite's HMR for instant feedback
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🎨 Design Highlights

- Premium gradient backgrounds
- Smooth hover effects and transitions
- Modern card-based layouts
- Sticky navigation header
- Mobile-responsive navigation

## 📝 Migration Notes

This project was migrated from a static HTML page to a React + Vite application. The original HTML file is preserved as `index-old.html` for reference.

### Key Changes:
- Converted single HTML file into modular React components
- Extracted inline styles to a separate CSS file
- Implemented component-based architecture
- Added Vite for modern build tooling and fast development

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

© 2026 DanceBuddy. All rights reserved.

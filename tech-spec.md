# Detroit Paris - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Routing | React Router DOM |
| Icons | Lucide React |
| Fonts | Google Fonts (Bebas Neue, Inter) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['120px', { lineHeight: '0.9', letterSpacing: '-2px' }],
        'section': ['80px', { lineHeight: '0.95', letterSpacing: '-1px' }],
        'project': ['64px', { lineHeight: '1', letterSpacing: '-1px' }],
      },
      colors: {
        'muted': '#999999',
        'border-light': '#E5E5E5',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    }
  }
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button
- Sheet (for mobile menu)
- Separator

### Custom Components

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | `activePage: string` | Fixed navigation with dot indicators |
| `PageTransition` | `children, isActive` | White overlay transition |
| `Layout` | `children` | Main layout wrapper |

#### Page Components
| Component | Description |
|-----------|-------------|
| `HomePage` | Hero + horizontal gallery |
| `ProjectsPage` | Project list with hover previews |
| `ProjectDetailPage` | LV Asnieres project detail |
| `ContactPage` | Join/careers page |
| `ServicesPage` | Services + team diagram |

#### Section Components
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | - | Large headline + tagline |
| `HorizontalGallery` | `images: Image[]` | Draggable image row |
| `ProjectList` | `projects: Project[]` | Hoverable project list |
| `ProjectPreview` | `image: string, isVisible` | Floating image preview |
| `TeamDiagram` | `members: TeamMember[]` | Circular network SVG |
| `FloatingImages` | `images: Image[]` | Animated floating images |
| `BookPopup` | - | "Our recent book" popup |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `initial={{ opacity: 0, y: 30 }}` `animate={{ opacity: 1, y: 0 }}` staggerChildren |
| Page Transition | Framer Motion | AnimatePresence + white overlay div |
| Nav Hover Dot | CSS/Tailwind | `::before` pseudo-element, scale transition |
| Project Hover | Framer Motion | Text color transition + image fade |
| Gallery Scroll | Native + CSS | `overflow-x-auto`, `scroll-snap-type` |
| Floating Images | Framer Motion | `animate={{ y: [0, -10, 0] }}` infinite loop |
| Team Diagram | SVG + CSS | Static SVG with optional hover states |
| Scroll Reveal | Framer Motion | `whileInView` with fade + translateY |

### Animation Timing Reference
```css
--duration-fast: 200ms;
--duration-medium: 300ms;
--duration-slow: 600ms;
--easing-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── homepage/           # Gallery images
│       ├── projects/           # Project preview images
│       ├── project-detail/     # LV Asnieres images
│       ├── services/           # Floating images
│       └── team/               # Team avatars
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn components
│   │   ├── Navbar.tsx
│   │   ├── PageTransition.tsx
│   │   ├── HorizontalGallery.tsx
│   │   ├── ProjectList.tsx
│   │   ├── TeamDiagram.tsx
│   │   ├── FloatingImages.tsx
│   │   └── BookPopup.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── ServicesPage.tsx
│   ├── hooks/
│   │   └── usePageTransition.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   ├── projects.ts
│   │   ├── images.ts
│   │   └── team.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Animation library
npm install framer-motion

# Router
npm install react-router-dom

# Fonts (via Google Fonts in HTML)
# Bebas Neue, Inter
```

## 7. Data Structures

```typescript
// types/index.ts

interface Project {
  id: string;
  name: string;
  slug: string;
  label?: string;
  previewImage: string;
}

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  angle: number; // Position in circle (0-360)
}

interface FloatingImage {
  id: string;
  src: string;
  position: { x: string; y: string };
  size: { width: number; height: number };
  delay: number;
}
```

## 8. Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Homepage with gallery |
| `/projects` | ProjectsPage | Project list |
| `/projects/:slug` | ProjectDetailPage | Individual project |
| `/contact` | ContactPage | Careers/contact |
| `/services` | ServicesPage | Services + team |

## 9. Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Stack layouts, smaller typography, hamburger menu |
| Tablet | 640-1024px | Adjusted spacing, 2-column grids |
| Desktop | > 1024px | Full layout as designed |

## 10. Performance Considerations

- Use `will-change: transform` on animated elements
- Lazy load images below fold
- Use `loading="lazy"` on images
- Optimize images to WebP format
- Minimize re-renders with React.memo where appropriate
- Use CSS transforms instead of layout properties

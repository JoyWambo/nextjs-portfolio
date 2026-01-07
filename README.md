# My Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, projects, and experience as a software engineer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Dark/Light Theme**: Toggle between dark and light modes with persistence
- **Server-Side Rendering**: Built with Next.js for optimal performance
- **Modern UI**: Clean black-and-white design with glassmorphism effects
- **Accessibility**: Keyboard navigation and screen reader support
- **Fast Loading**: Optimized images and fonts

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Heroicons
- **Theme**: next-themes

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with Header and Footer
├── page.tsx            # Home page
├── about/
│   └── page.tsx        # About page
├── projects/
│   └── page.tsx        # Projects page
├── contact/
│   └── page.tsx        # Contact page
└── components/
    ├── Header.tsx      # Navigation header
    ├── Hero.tsx        # Home hero section
    └── Footer.tsx      # Site footer

public/                 # Static assets
```

## 🏃 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home**: Introduction and call-to-action
- **About**: Personal information and skills
- **Projects**: Showcase of work and projects
- **Contact**: Contact form and information

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom design system featuring:

- Black and white color scheme
- Glassmorphism effects
- Responsive grid layouts
- Smooth transitions and animations

## 🚀 Deployment

This app can be deployed to any platform supporting Next.js:

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

- Netlify
- Railway
- AWS Amplify

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

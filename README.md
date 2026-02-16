# Youth Becoming Engaged - Next.js + Bootstrap 5 App

A modern web application built with Next.js 14 and Bootstrap 5, designed for youth engagement with responsive design and interactive components.

## 🚀 Features

- **Next.js 14** with App Router
- **Bootstrap 5.3** for responsive UI components
- **Bootstrap Icons** for modern iconography
- **TypeScript** for type safety
- **ESLint** for code quality
- **Mobile-first responsive design**

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or later)
- npm (comes with Node.js)

## 🛠️ Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd youth-becoming-engaged-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see your application running.

## 📁 Project Structure

```
youth-becoming-engaged-app/
├── src/
│   └── app/
│       ├── layout.tsx         # Root layout with Bootstrap imports
│       ├── page.tsx          # Main page with Bootstrap components
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Bootstrap Integration

### CSS Imports
Bootstrap styles are imported in the root layout (`src/app/layout.tsx`):
```tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
```

### Available Components
The application demonstrates various Bootstrap 5 components:
- **Navbar**: Responsive navigation with brand and links
- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Cards**: Feature showcase with icons and descriptions
- **Grid System**: Responsive layout using Bootstrap's grid
- **Buttons**: Different button styles and sizes
- **Footer**: Clean footer with links and copyright

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Other Platforms
The app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📱 Responsive Design

The application is fully responsive and works on:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🎯 Customization

### Adding Components
Create new components in the `src/app` directory and use Bootstrap classes:
```tsx
export default function MyComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Card</h5>
              <p className="card-text">Card content here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Bootstrap Classes
Commonly used Bootstrap classes in this project:
- Layout: `container`, `row`, `col-*`
- Components: `navbar`, `card`, `btn`
- Utilities: `text-*`, `bg-*`, `p-*`, `m-*`

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Kill process using port 3000
   npx kill-port 3000
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **Bootstrap styles not loading:**
   - Ensure imports are in the correct order in `layout.tsx`
   - Clear browser cache and restart dev server

3. **TypeScript errors:**
   - Check `tsconfig.json` configuration
   - Run `npm run lint` to identify issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Bootstrap 5

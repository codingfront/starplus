# 🌟 StarPlus! - Demo Website for Coding Front Students

**Demo URL:** [starplus.codingfront.dev](https://starplus.codingfront.dev)  
**Official Website:** [codingfront.dev](https://codingfront.dev)

> ⚡ _StarPlus! is a demo web application developed exclusively for Coding Front students to enhance their front-end development skills._

StarPlus! showcases the top 250 movies from IMDb and is built using **React**, **Vite**, and **TypeScript**. This project serves as a learning platform for Coding Front students, helping them master key web development concepts while developing a modern, performance-oriented web application. Key features include user authentication, movie search, genre filtering, and movie submissions.

---

## 🚀 Project Overview

StarPlus! provides students with hands-on experience in building responsive, performant, and scalable web applications. Key concepts covered in this project include:

- API Integration
- User Authentication
- Routing with React Router
- State Management
- Responsive UI Design

Technologies used:

- **React** (with SWC for fast compilation)
- **TypeScript**
- **Vite** (for lightning-fast build and development)
- **Ant Design** (UI components)
- **Styled Components** (for styling)
- **React Context API** (for state management)
- **Vite PWA** (Progressive Web App support)

---

## 📁 Project Structure

```
env/               -> Environment configurations
public/            -> Static public assets (icons, logos, manifest)
src/               -> Main application source code
├── assets/        -> Fonts and icons
├── components/    -> Reusable React components
├── features/      -> Feature-specific modules (auth, genres, movies, search)
├── hooks/         -> Custom React hooks
├── pages/         -> Application pages (home, movie details, user account, etc.)
├── router/        -> Routing configurations
├── static-data/   -> Static data such as menu items
├── styles/        -> Global and page-specific styles
├── types/         -> TypeScript type definitions
├── utils/         -> Utility functions (API handlers, helpers)
└── main.tsx       -> Application entry point
```

---

## 🎨 Theme Integration with Styled Components and Ant Design

The project utilizes **Styled Components** for custom styling, synchronized with **Ant Design** themes. This integration allows seamless access to Ant Design's default styles and variables within styled components, ensuring consistent design throughout the application.

### Example Usage:

```tsx
import styled from "styled-components";

const SidebarContent = styled.div`
  background: ${({ theme }) => theme.antd.token.colorBgContainer};
  padding: 20px;
  border-radius: ${({ theme }) => theme.antd.token.customBorderRadius};
`;
```

---

## 💡 Features

- 🌐 **Top 250 IMDb Movies** listing
- 🔎 **Search functionality** with debounce
- 🎭 **User authentication** (register/login)
- 🎬 **Movie details** page with related movies
- 🎚️ **Genre-based filtering**
- 🚀 **Responsive and mobile-friendly design**
- 💾 **Persistent user session** management
- ⚡ **Optimized performance** with lazy loading and code splitting
- 🏃 **Smooth navigation** using React Router

---

## 🌐 Routing Structure

- `/` — Home Page
- `/movie/:movieId` — Movie Details
- `/genres/` — Genres Page
- `/genre/:genreName` — Movies by Genre Name
- `/login` — Login Page
- `/register` — Register Page
- `/user-account` — User Account Page
- `/privacy-policy` — Privacy Policy Page
- `/terms-of-use` — Terms of Use Page
- `*` — 404 Not Found

---

## 🧪 Testing

Testing suite coming soon...

---

## 📦 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation Steps

```bash
git clone https://github.com/codingfront/starplus.git
cd starplus
npm install
```

### Environment Configuration

Create an `.env` file in the `/env` directory:

```
VITE_SITE_URL=YOUR_SITE_URL
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Build the application for production:

```bash
npm run build
npm run preview
```

---

## 🔧 Vite Configuration Highlights

- **Drop console/debugger:** Removes `console` and `debugger` statements in production.
- **PWA Support:** Configured with `vite-plugin-pwa` for offline capabilities.
- **SVG Handling:** Integrated `vite-plugin-svgr` for importing SVGs as React components.
- **Bundle Analysis:** Uses `rollup-plugin-visualizer` to analyze and optimize build output.

---

## 🙌 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

---

## 📄 License

Distributed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## ✨ Acknowledgements

- [Codingfront Movies API](https://moviesapi.codingfront.dev/)
- [Ant Design](https://ant.design/)
- [Vite](https://vitejs.dev/)

---

## 💬 Contact

**Coding Front** — [codingfront.dev](https://codingfront.dev)

📬 For support, contact [info@codingfront.dev](mailto:info@codingfront.dev)

---

⭐️ If you like this project, give it a star on [GitHub](https://github.com/codingfront/starplus)! ⭐️

🎉 _Happy Coding!_ 💻✨

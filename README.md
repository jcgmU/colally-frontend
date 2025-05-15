# ColAlly – Frontend (Web Client)

Este repositorio contiene la **aplicación web** de ColAlly. Proporciona la interfaz de usuario para gestionar proyectos, tareas y reportes.

## 🖥️ Tecnologías principales

- **Next.js** (React 18)
- **TypeScript**
- **TailwindCSS** (UI)
- **Apollo Client** (GraphQL)
- **Framer Motion / GSAP** (Animaciones)
- **Socket.io‑client** (Tiempo real)
- **Docker Compose** (para entorno unificado)

## 🚀 Inicio rápido

```bash
git clone https://github.com/jcgmU/colally-frontend.git
cd colally-frontend
npm install
docker compose up -d   # (si no está levantado desde backend)
npm run dev
```

La aplicación se abre en `http://localhost:3000`.

## 📂 Estructura de carpetas clave

```
components/   # Atoms, Molecules, Organisms
pages/        # Rutas Next.js
layouts/      # Navbar, Sidebar
context/      # Global state (Context API)
services/     # Apollo Client
styles/       # Tailwind config
```

## 🔑 Convención de commits

`feat(ui): add Kanban drag and drop`

Tipos: feat, fix, docs, style, refactor, test, chore.

## 📝 Branch naming

- `feature/<nombre>`
- `bugfix/<nombre>`
- `hotfix/<nombre>`
- `chore/<nombre>`

---

## Contacto

📧 jcgm1047@gmail.com  
👨🏻‍💻 Juan Camilo Garcia Martin  
🚀 Desarrollado con ❤️ usando **Next.js y WebSocket**

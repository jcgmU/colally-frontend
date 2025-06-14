# AGENTS.md — ColAlly Frontend

## 🎯 Propósito

Este repositorio contiene el frontend del sistema ColAlly: una aplicación web SSR para gestionar equipos, tareas, proyectos y reportes, con soporte visual avanzado, animaciones, y experiencia de usuario accesible y responsiva.

---

## 🧱 Arquitectura

- **Atomic Design**: `atoms`, `molecules`, `organisms`, `templates`, `pages`
- SSR con `Next.js 15 App Router`
- Modo oscuro/claro persistente (`next-themes`)
- Uso de `React Context API` y `Zustand` para estado
- Navegación fluida, progresiva y accesible (`aria-*`, keyboard-friendly)
- Animaciones suaves (`Framer Motion`, `GSAP`)

---

## 🛠️ Stack tecnológico

- **Lenguaje:** TypeScript
- **Framework:** React + Next.js 15
- **Estilos:** TailwindCSS + shadcn/ui
- **Estado:** Zustand, React Context
- **API:** Apollo Client + GraphQL Codegen
- **Testing:** React Testing Library + Vitest
- **Graficación:** Recharts, Lightweight Charts
- **Tooling:** ESLint, Prettier, Husky, commitlint
- **Notificaciones:** `react-hot-toast` + `Firebase Cloud Messaging`

---

## ✅ Reglas obligatorias

- Toda vista nueva debe ser SSR si involucra datos del usuario
- Componentes bien tipados, con props explícitas
- Mínimo 1 test unitario por componente, idealmente más si es complejo
- Animaciones deben ser no intrusivas y accesibles
- Diseño mobile-first obligatorio
- Campos sensibles validados desde el frontend antes de llamar a la API

---

## 🧠 Instrucciones para Codex y agentes

1. Seguir siempre la estructura de carpetas base.
2. Usar hooks reutilizables (`useTaskStatus`, `useProjectFilter`, etc.).
3. No escribir lógica de negocio en componentes.
4. Mantener consistencia visual (espaciado, tipografías, interacción).
5. Si se modifica una vista existente, actualizar sus pruebas.

---

## ⚙️ Directorios clave

- `components/`: diseño atómico
- `hooks/`: estado, lógica, queries GraphQL
- `services/`: conexión con backend vía Apollo Client
- `layouts/`: layout principal, navegación
- `pages/`: rutas principales de Next.js
- `styles/`: Tailwind global y utilidades
- `context/`: manejo de sesión, usuario y configuración

---

## 🚫 No permitido

- Código inline no tipado
- Código repetido en vistas (refactorízalo a un componente)
- Llamadas directas a la API desde componentes
- Uso de librerías sin mantenimiento

---

## 📋 Entregables esperados por cada tarea

- Componentes funcionales, accesibles y probados
- Pruebas de UI con RTL
- Animaciones suaves sin sobrecarga
- PR limpio con commit message en formato Conventional Commits

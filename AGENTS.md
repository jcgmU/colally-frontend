### AGENTS.md – ColAlly Frontend

# Propósito

Aplicación web SSR con Next.js, siguiendo Atomic Design y buenas prácticas de accesibilidad.

# Arquitectura

- Next.js 15 + React 19 (App Router)
- TypeScript estricto
- TailwindCSS + shadcn/ui
- Estado global vía Zustand o Context
- Vitest + RTL para pruebas
- Husky y commitlint para garantizar calidad

# Estructura de carpetas

```
src/
├── app/             # rutas Next.js
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── ui/
├── context/
├── hooks/
├── services/
├── styles/
├── lib/
└── tests/
```

# Reglas de implementación

- Todo componente debe estar tipado y probado con React Testing Library.
- Mantener accesibilidad (`aria-*`, navegación por teclado).
- No acoplar lógica de negocio en componentes visuales.
- Documentar hooks e interfaces.
- Seguir convenciones de commits y ramas descritas en `CONTRIBUTING.md`.

# Tooling

- ESLint + Prettier integrados (import/order, hooks, a11y).
- Husky ejecuta `npm run lint` y `npm run test` en cada commit.
- commitlint valida mensajes de commit.

Cumplir con estas pautas asegura coherencia y calidad en el código.

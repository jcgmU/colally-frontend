### AGENTS.md – ColAlly Frontend

# Propósito

Este repositorio contiene la aplicación web SSR de ColAlly. Aquí se implementan las vistas, lógica de interacción, animaciones, dashboards y conectividad con GraphQL.

# Arquitectura

- Atomic Design
- SSR con App Router (Next.js 15)
- Accesibilidad y movilidad como prioridad
- Tipado estricto + tests en cada componente
- Estados desacoplados y persistentes vía Zustand o Context

# Estructura de carpetas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── login/
│       └── page.test.tsx
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── ui/           # shadcn components
├── context/
│   ├── user-context.tsx
│   └── theme-context.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useProjectFilter.ts
│   └── useTaskStatus.ts
├── services/
│   └── apollo.ts     # Apollo Client config
├── styles/
│   └── globals.css
├── lib/
│   └── utils.ts
├── tests/
│   ├── components/
│   └── e2e/
```

# Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS + shadcn/ui
- Apollo Client + GraphQL Code Generator
- Zustand + Context API
- RTL + Vitest
- Framer Motion / GSAP
- Firebase Cloud Messaging + Socket.io-client

# Reglas de implementación

- Cada componente nuevo debe estar:

  - Tipado
  - Probado con RTL
  - Accesible (`aria-*`, foco, keyboard)

- No se permite lógica directa en los componentes visuales.
- Hooks y servicios deben vivir fuera de los templates.
- Animaciones deben ser suaves y no bloquear la UI.

# Instrucciones para Codex y agentes

1. Seguir esta estructura siempre.
2. Crear componentes reutilizables si hay duplicación.
3. Si se modifica una página, también actualizar sus pruebas.
4. Hooks deben tener nombres autoexplicativos y estar documentados.
5. Preferir `server-actions` o SSR en rutas críticas.

# No permitido

- Código sin tipado
- Componentes sin prueba ni accesibilidad
- Hooks duplicados o con side-effects no controlados
- Llamadas directas a la API desde el componente

# Entregables mínimos por tarea

- Componentes funcionales, accesibles y tipados
- Hooks documentados y reutilizables
- PR estructurado, validado y con pruebas

```

```

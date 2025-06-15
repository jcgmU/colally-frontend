# ColAlly – Frontend

Aplicación web SSR de ColAlly construida con **Next.js 15** y **TypeScript**. Incluye TailwindCSS y componentes shadcn/ui para un desarrollo rápido y coherente.

## 🚀 Puesta en marcha

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

### Lint y pruebas

```bash
npm run lint
npm run test
```

### Flujo de trabajo

1. Crea ramas siguiendo las [convenciones de CONTRIBUTING](./CONTRIBUTING.md).
2. Abre Pull Requests descriptivas contra `dev`.
3. Husky ejecutará `lint` y `test` antes de cada commit.

## 📂 Carpetas principales

- **src/app** – rutas y páginas de Next.js (App Router).
- **src/components** – componentes UI siguiendo Atomic Design (`atoms`, `molecules`, `organisms`, `templates`, `ui`).
- **src/context** – contextos de React (estado global).
- **src/hooks** – hooks reutilizables.
- **src/services** – clientes o integraciones externas (p.ej. Apollo).
- **src/styles** – estilos globales y configuraciones de Tailwind.
- **src/lib** – utilidades compartidas.
- **src/tests** – pruebas de componentes y e2e.

Consulta `AGENTS.md` para más detalles sobre reglas y estructura.

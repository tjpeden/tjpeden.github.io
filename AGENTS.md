# AGENTS.md

## Build Commands
- `bun run dev` - Start dev server (localhost:3000)
- `bun run build` - Production build
- `bun run generate` - Static site generation
- `bun run preview` - Preview production build

## Linting
- `bunx eslint .` - Run ESLint (uses @nuxt/eslint flat config)

## Code Style
- **Formatting:** 2-space indent, LF line endings, trim trailing whitespace
- **Imports:** Use `import type { X }` for type-only imports; use `~/` path alias for app directory
- **Types:** Use `interface` for object shapes; explicit type annotations on functions
- **Naming:** camelCase for variables/functions, PascalCase for interfaces/components, kebab-case for directories
- **Vue:** `<template>` first, then `<script setup lang="ts">`; use Composition API (ref, computed, watch)
- **UI:** Nuxt UI v4 components (UButton, UInput, etc.); Tailwind CSS utility classes for styling
- **Error handling:** Use `error` ref from useFetch/useAPI; display errors via UAlert with retry option

## Stack
Nuxt 4 | Vue 3 | TypeScript | Pinia | Nuxt UI | Tailwind CSS | Bun

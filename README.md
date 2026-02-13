# @nex-ui/core

A modern, accessible React component library built with TypeScript.

## Installation

```bash
npm install @nex-ui/core
# or
bun add @nex-ui/core
```

**Peer dependencies:** React 18+ or 19+

```bash
npm install react react-dom
```

## Usage

```tsx
import { Button, Input } from '@nex-ui/core';
import '@nex-ui/core/css';

function App() {
  return (
    <div>
      <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
        Click me
      </Button>
      <Input label="Email" type="email" placeholder="you@example.com" />
    </div>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button`  | Interactive button with variants, sizes, and states |
| `Input`   | Accessible text input with label, helper text, and error state |

## Development

```bash
# Install dependencies
bun install

# Start Storybook dev server
bun run dev

# Run tests
bun run test

# Run linting
bun run lint

# Type check
bun run typecheck

# Build the library
bun run build
```

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start Storybook on port 6006 |
| `bun run build` | Build ESM, CJS, and type declarations |
| `bun run test` | Run Jest tests |
| `bun run test:coverage` | Run tests with coverage report |
| `bun run lint` | Lint source files with ESLint |
| `bun run format` | Format files with Prettier |
| `bun run typecheck` | Type-check with TypeScript |
| `bun run storybook:build` | Build static Storybook site |

## License

MIT

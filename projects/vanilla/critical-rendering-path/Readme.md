# Critical Rendering Path

## Overview
HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite → Screen

## Core Phases

### 1. HTML → DOM
- Browser parses HTML top-to-bottom into a tree of nodes
- **Blocking**: Synchronous `<script>` tags pause parsing

### 2. CSS → CSSOM
- Browser parses CSS and creates a style tree
- **Blocking**: Render-blocking by default; delays first paint

### 3. DOM + CSSOM → Render Tree
- Combines DOM and CSSOM
- Excludes invisible nodes (`display: none`)
- Includes `visibility: hidden` (takes space)

### 4. Layout (Reflow)
- Calculates element sizes, positions, and viewport placement
- **Expensive**: Triggered by resize, DOM changes, font loads

### 5. Paint
- Draws pixels: text, colors, borders, shadows
- Heavy effects slow rendering

### 6. Composite
- Combines layers; GPU handles transforms and opacity
- Fast; doesn't trigger layout or paint

## Optimization Strategies

| Strategy | Method | Benefit |
|----------|--------|---------|
| Defer JS | `<script defer>` | Continues HTML parsing |
| Async JS | `<script async>` | Loads independently |
| Inline CSS | `<style>` tags | Avoids network request |
| Reduce CSS | Remove unused styles | Smaller CSSOM |
| Avoid thrashing | Batch DOM reads/writes | Prevents layout thrashing |

## Debugging
- **Chrome DevTools** → Performance & Network tabs
- **Lighthouse** → CRP optimization hints

## Core Web Vitals Connection
- **FCP**: Paint phase
- **LCP**: Layout + Paint
- **CLS**: Layout
- **TBT**: JS execution

## React-Specific Considerations
- Large JS bundles delay hydration
- CSS-in-JS affects CRP timing
- Server Components and streaming optimize rendering

## Resources
- [MDN – Critical Rendering Path](https://developer.mozilla.org/docs/Web/Performance/Critical_rendering_path)
- [Web.dev – CRP Guide](https://web.dev/critical-rendering-path/)
- Chrome DevTools Performance Docs

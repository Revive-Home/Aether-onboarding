# Aether

Revive's Component Library

## Getting started

### Pre-requisites

To work with this project, you'll need to have [Node](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) installed on your system.

### Installation

1. `git clone https://github.com/Revive-Home/Aether.git && cd aether`
2. `yarn install`

Before you start contributing to Aether, be sure to read the contribution guide (TBA)

## Development

Aether uses following technologies:

- React
- TypeScript
- Tailwind
- Vite
- Storybook

Run `yarn storybook` to start Storybook for development.

### Tailwind

To style the components, Aether uses [TailwindCSS](https://tailwindcss.com/).

**_TODO: Add tailwind guideline/practice_**

### Headless UI

Aether uses [`headlessui`](https://headlessui.com/) to abstract away some of the component behavior logic.

<a name="usage"></a>

## Usage

Within a separate application that uses Aether, import the desired component as follows:

```TypeScript
import { Button, Dropdown } from "@revive/aether";
```

Within Aether itself, import the desired component by pointing to the component file. The alias (`@`) should be used for the import path:

```TypeScript
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
```

### Using Aether package locally

Aether can be installed and tested locally without publishing to NPM by using [yalc](https://github.com/wclr/yalc).

In Aether, change the name in package.json to indicate this is a test package.

Example: `@revive/aether-yalc-test`

Then, run

```
yarn build && yalc publish
```

`yarn build` will build the package and create /dist, then `yalc publish` command will copy all the files that should be published in remote NPM registry.

Then in consuming app, run

```
yalc add <package_name> && yarn
```

The `<package_name>` should match the name in package.json of Aether.

To import Aether components, refer to the [Usage](#usage) section.

## Writing components

**_TODO: Add guideline for writing components and code style_**

## Unit Testing and Visual Regression Testing

For unit testing, Aether uses [Vitest](https://vitest.dev/guide/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/api).

### Chromatic Visual Regression Testing

**_TODO: Add Chromatic description/usage_**

---

### Vite and `.cjs` extension

Since the version 3, Vite is adding `"type": "module"` to the package.json of projects it creates to [optimize ESbuild deps at build time](https://vitejs.dev/blog/announcing-vite3.html#esbuild-deps-optimization-at-build-time-experimental). So to use commonjs, it is necessary to use the .cjs extension.

# eslint-config-lxsmnsyc

## Install

```bash
npm install eslint-config-lxsmnsyc --save-dev
```

```bash
yarn add eslint-config-lxsmnsyc --dev
```

```bash
pnpm add eslint-config-lxsmnsyc
```

## Usage

`.eslintrc`
```json
{
  "extends": [
    // Use one of the following
    "lxsmnsyc",
    "lxsmnsyc/react",
    "lxsmnsyc/preact",
    "lxsmnsyc/solid",
    "lxsmnsyc/vue",
    "lxsmnsyc/typescript",
    "lxsmnsyc/typescript/react",
    "lxsmnsyc/typescript/preact",
    "lxsmnsyc/typescript/solid",
    "lxsmnsyc/typescript/vue",
  ],
}
```

### Configurations

- All
  - `eslint-plugin-import`
  - `eslint-import-resolver-node`
  - `eslint-import-resolver-typescript`
- `lxsmnsyc`
  - `airbnb-base`
- `lxsmnsyc/typescript`
  - `@typescript-eslint/eslint-plugin`

The following subpaths extends either `lxsmsnyc` and `lxsmnsyc/typescript`

- `lxsmnsyc/react` and `lxsmnsyc/typescript/react`
  - `eslint-plugin-react`
  - `eslint-config-airbnb`
- `lxsmnsyc/preact` and `lxsmnsyc/typescript/preact`
  - `eslint-config-preact`
  - `eslint-config-airbnb`
- `lxsmnsyc/solid` and `lxsmnsyc/typescript/solid`
  - `eslint-plugin-react`
  - `eslint-config-airbnb`
- `lxsmnsyc/vue` and `lxsmnsyc/typescript/vue`
  - `eslint-plugin-vue`
  - `eslint-config-airbnb`

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)

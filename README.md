# zhaoxinkunBlog

Personal blog built with Next.js in a pnpm workspace.

## Structure

- `apps/web`: Next.js application.
- `packages/*`: shared packages, when needed.

## Development

Run commands from the repository root using pnpm 12.8.1:

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Workspace configuration and dependency versions are maintained in the root
`pnpm-workspace.yaml` and `pnpm-lock.yaml`.

// Patch ESLint module resolution to allow shared configs to bring along
// their own plugins rather than imposing peer dependencies on consumers
// https://www.npmjs.com/package/@rushstack/eslint-patch

require('@rushstack/eslint-patch/modern-module-resolution')

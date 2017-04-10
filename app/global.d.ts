/**
 * Enable import syntax from TypeScript
 * using Webpack modules
 */
declare module '*.scss' {
  const content: { [key: string]: string }
  export = content
}

declare module '*.svg' {
  const content: string
  export = content
}

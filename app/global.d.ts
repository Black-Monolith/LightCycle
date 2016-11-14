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

//TODO: Move this in a dedicated repo
declare module 'react-hot-loader' {
  const AppContainer: any
  export { AppContainer }
}

//TODO: Move this line to a correct file
declare var process: { env: { NODE_ENV: string }}

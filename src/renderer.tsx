import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="dist/static/output.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
})

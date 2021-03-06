export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '600px',
        },
        type: "desktop",
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '600px',
        },
        type: "tablet",
      },
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '600px',
        },
        type: "mobile",
      },
    },
  },
}
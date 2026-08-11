export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/design-system/',
    },
    sitemap: 'https://aquaslides.com.br/sitemap.xml',
  }
}

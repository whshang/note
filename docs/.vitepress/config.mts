import { defineConfig } from 'vitepress'
import { OramaPlugin } from '@orama/plugin-vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "A personal knowledge base and digital garden",
  lang: 'zh-cn',
  vite: {
    plugins: [
      OramaPlugin({
        // Orama RAG search configuration
        // Options: https://docs.orama.com/open-source/plugins/plugin-vitepress/
      }),
    ],
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nav', link: '/nav' }
    ],
    search: {
      provider: 'orama', // Use Orama for RAG-powered search
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
})

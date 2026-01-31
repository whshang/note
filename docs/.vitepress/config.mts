import { defineConfig } from 'vitepress'
import { OramaPlugin } from '@orama/plugin-vitepress'
import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "Digital Garden",
    description: "A personal knowledge base and digital garden",
    lang: 'zh-cn',
    vite: {
      plugins: [
        // Orama RAG search - fastest search engine
        OramaPlugin({
          // Orama search configuration
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
)

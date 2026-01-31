import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// Test 1: Only sidebar plugin
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "A personal knowledge base and digital garden",
  lang: 'zh-cn',
  vite: {
    plugins: [
      AutoSidebar({
        // Minimal config to test performance
      }),
    ],
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nav', link: '/nav' }
    ],
  },
})

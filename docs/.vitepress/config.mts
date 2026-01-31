import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { getGitTimestamp } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "A personal knowledge base and digital garden",
  lang: 'zh-cn',
  lastUpdated: {
    timestamp: getGitTimestamp(),
  },
  vite: {
    plugins: [
      AutoSidebar({
        // You can also set options to adjust sidebar data
        // see option document below
      }),
      SearchPlugin({
        encode: false,
        tokenize: 'forward'
      }),
    ],
  },
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true,
    },
    // 启用 CJK 友好支持
    cjkFriendlyEmphasis: true,
    // 启用缓存
    cache: {
      resetWhenChanged: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nav', link: '/nav' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})

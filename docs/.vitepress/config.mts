import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "A personal knowledge base and digital garden",
  lang: 'zh-cn',
  // Note: lastUpdated with getGitTimestamp is VitePress 2.0+ feature
  // Using VitePress 1.5, so we'll use default behavior
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
    // Note: cjkFriendlyEmphasis and cache are VitePress 2.0+ features
    // Using VitePress 1.5, so we'll use default behavior
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

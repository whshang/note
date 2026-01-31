import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { SearchPlugin } from 'vitepress-plugin-search'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "A personal knowledge base and digital garden",
  lang: 'zh-cn',
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

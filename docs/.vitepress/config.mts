import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
// import AutoNav from "vite-plugin-vitepress-auto-nav";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/', //网站部署的路径，默认根目录
  title: "Building a Second Brain",
  description: "A VitePress Site",
  vite: {
    plugins: [
      // AutoNav({
      //   // 自定义配置
      // }),
      AutoSidebar({
        // You can also set options to adjust sidebar data
        // see option document below
      }),
    ],
  },
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

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

import { defineConfig } from 'vitepress'

// Minimal config to debug build performance
// Temporarily disabled plugins to identify the issue

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Garden",
  description: "A personal knowledge base and digital garden",
  lang: 'zh-cn',
})

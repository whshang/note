# VitePress 最佳实践

## 简介

VitePress 是一个基于 Vite 的静态站点生成器，专为构建技术文档网站而设计。

## 核心特性

- ⚡ **快速** - 基于 Vite 的极速 HMR
- 🎨 **Vue 驱动** - 在 Markdown 中使用 Vue 组件
- 🔍 **全文搜索** - 内置的客户端全文搜索
- 📱 **响应式** - 完美适配移动端

## 安装

```bash
pnpm add -D vitepress
```

## 配置

```typescript
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Site',
  description: 'A VitePress site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
})
```

## 开发

```bash
pnpm run docs:dev
```

访问 http://localhost:5173

## 构建

```bash
pnpm run docs:build
```

## 更多资源

- [VitePress 官方文档](https://vitepress.dev)
- [VitePress GitHub](https://github.com/vuejs/vitepress)

import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "Digital Garden",
    description: "A personal knowledge base and digital garden powered by AI",
    lang: 'zh-cn',

    // SEO 优化
    head: [
      ['meta', { name: 'author', content: 'whshang' }],
      ['meta', { name: 'keywords', content: 'digital garden, knowledge base, AI, learning, notes' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'zh-CN' }],
      ['meta', { property: 'og:site_name', content: 'Digital Garden' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ],

    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Tools', link: '/工具评测/' },
        { text: 'Methods', link: '/方法技巧/' },
        { text: 'Career', link: '/职业发展/' },
        { text: 'Org', link: '/组织协同/' },
        { text: 'Thinking', link: '/深度思考/' },
        { text: 'Practice', link: '/实战记录/' },
        { text: 'Nav', link: '/nav' }
      ],

      sidebar: {} // 侧边栏由 vitepress-sidebar 自动生成

      // VitePress 内置搜索配置
      search: {
        provider: 'local',
        options: {
          locales: {
            zh: {
              placeholder: '搜索文档',
              translations: {
                button: {
                  buttonText: '搜索',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  searchBox: {
                    resetButtonTitle: '清除查询',
                    resetButtonAriaLabel: '清除查询',
                    clearButtonTitle: '清除',
                    clearButtonAriaLabel: '清除',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                  },
                  noResultsText: '无法找到相关结果',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭'
                  }
                }
              }
            }
          }
        }
      },

      // 外部链接
      socialLinks: [
        { icon: 'github', link: 'https://github.com/whshang/note' }
      ],

      // 页脚
      footer: {
        message: 'Built with <3',
        copyright: 'Copyright © 2026 whshang'
      },

      // 编辑链接（在 GitHub 上编辑）
      editLink: {
        pattern: 'https://github.com/whshang/note/edit/main/docs/:path'
      },

      // 最后更新时间
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },

      // 返回顶部
      outline: {
        level: [2, 3],
        label: '页面导航'
      }
    },

    // Markdown 配置
    markdown: {
      image: {
        lazyLoading: true,
      },
      // 代码块配置
      codeTransformers: [
        {
          pre: (code) => {
            // 可以添加自定义代码处理
            return code
          }
        }
      ],
      // 行号
      lineNumbers: true
    },

    // 构建优化
    build: {
      // 代码分割
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'vitepress-vendor': ['vitepress']
          }
        }
      },
      // chunk 大小警告限制
      chunkSizeWarningLimit: 1000
    },

    // 性能优化
    vite: {
      // CSS 代码分割
      css: {
        devSourcemap: true,
        preprocessorOptions: {
          scss: {
            // Sass 全局变量
            additionalData: `@use "@theme/styles/variables.scss" as *;`
          }
        }
      },
      // 优化预构建
      optimizeDeps: {
        include: ['vue', 'vitepress', 'vitepress-sidebar']
      }
    }
  })
)

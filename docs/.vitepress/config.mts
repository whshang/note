import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "AI Knowledge Lab",
    description: "Tools · Methods · Thinking",
    lang: 'zh-cn',

    // SEO 优化
    head: [
      ['meta', { name: 'author', content: 'whshang' }],
      ['meta', { name: 'keywords', content: 'AI, knowledge base, tools, methods, career, thinking, practice' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'zh-CN' }],
      ['meta', { property: 'og:site_name', content: 'AI Knowledge Lab' }],
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
        lazyLoading: true
      }
    }
  })
)

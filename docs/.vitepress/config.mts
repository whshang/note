import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

// 使用 VitePress 内置 minisearch（最稳定、最快）
// 不需要任何第三方搜索插件
export default withSidebar(
  defineConfig({
    title: "Digital Garden",
    description: "A personal knowledge base and digital garden",
    lang: 'zh-cn',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
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
    },
    markdown: {
      image: {
        lazyLoading: true,
      },
    },
  })
)

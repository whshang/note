import { defineConfig } from 'vitepress'
import { OramaPlugin } from '@orama/plugin-vitepress'
import { withSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "Digital Garden",
    description: "A personal knowledge base and digital garden",
    lang: 'zh-cn',
    vite: {
      plugins: [
        // Orama RAG search - fastest search engine
        OramaPlugin({
          // Configure search options
          searchOptions: {
            threshold: 0.1,
            limit: 10,
          },
        }),
      ],
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Nav', link: '/nav' }
      ],
      // Use VitePress built-in local search
      search: {
        provider: 'local',
        options: {
          locales: {
            zh: {
              placeholder: '搜索文档',
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    clearButtonTitle: '清除',
                    clearButtonAriaLabel: '清除',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消',
                    searchButtonTitle: '搜索',
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

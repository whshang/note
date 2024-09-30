import DefaultTheme from 'vitepress/theme'

// @ts-ignore 忽略下一行报错提示
import MNavLinks from './components/MNavLinks.vue'

import { h } from 'vue'
import { useData } from 'vitepress'

export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    // 注册组件
    app.component('MNavLinks' , MNavLinks)
  },

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
}
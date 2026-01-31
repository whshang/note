import { defineConfig } from 'vitepress'

export const sidebar = {
  '/工具评测/': [
    {
      text: '工具评测',
      items: [
        { text: 'Claude vs Cursor', link: '/工具评测/claude-vs-cursor' },
        { text: 'Vibe Coding 经验', link: '/工具评测/vibe-coding-experience' },
        { text: 'AI 编辑器踩坑', link: '/工具评测/ai-editor-pitfalls' },
        { text: '工具选择框架', link: '/工具评测/tool-selection-framework' }
      ]
    }
  ],
  
  '/方法技巧/': [
    {
      text: '方法技巧',
      items: [
        { text: 'Prompt Engineering 实战', link: '/方法技巧/prompt-engineering-in-action' },
        { text: 'Agent 提示设计', link: '/方法技巧/agent-prompt-design' },
        { text: '技能拆解', link: '/方法技巧/skill-breakdown' },
        { text: '上下文管理技巧', link: '/方法技巧/context-management-techniques' }
      ]
    }
  ],
  
  '/职业发展/': [
    {
      text: '职业发展',
      items: [
        { text: '从 IC 到管理者', link: '/职业发展/from-ic-to-manager' },
        { text: '技术人员的出路', link: '/职业发展/career-path-for-technical-people' },
        { text: '不被淘汰', link: '/职业发展/not-being-eliminated' }
      ]
    }
  ],
  
  '/组织协同/': [
    {
      text: '组织协同',
      items: [
        { text: 'AI Native 三级进化', link: '/组织协同/ai-native-three-levels' },
        { text: '组织级知识库', link: '/组织协同/org-knowledge-base' },
        { text: 'Adoption 策略', link: '/组织协同/adoption-strategy' }
      ]
    }
  ],
  
  '/深度思考/': [
    {
      text: '深度思考',
      items: [
        { text: 'AI Native 的本质', link: '/深度思考/ai-native-essence' },
        { text: 'Luck Surface Area', link: '/深度思考/luck-surface-area' },
        { text: '从成功到失败', link: '/深度思考/from-success-to-failure' }
      ]
    }
  ],
  
  '/实战记录/': [
    {
      text: '实战记录',
      items: [
        { text: 'Scaling Agents 实践', link: '/实战记录/scaling-agents-practice' },
        { text: 'AI Agent 失败教训', link: '/实战记录/ai-agent-failure-lessons' }
      ]
    }
  ]
}
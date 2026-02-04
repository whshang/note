# Claude Code 设计师上手指南（翻译 + 文章版）

> 来源：Felix Lee 推文《Claude Code Guide for Designers》
> 
> 原文链接：https://x.com/felixleezd/status/2018728056249254377

## 一句话总结

Claude Code 是今年设计师最值得学的“高杠杆技能”：你用自然语言描述要做什么，它帮你写代码、改代码、部署上线。你不需要先变成工程师，你只需要更清楚“你要构建什么”。

---

## 中文翻译（要点版）

### Claude Code 是什么？

- Claude Code 是一个 **coding agent（编码代理）**。
- 你用**自然语言**下指令：
  - “做一个 landing page：hero + 3 个 feature card + footer”
  - “给我的作品集加一个 AI 聊天组件，回答关于我工作的提问”
- 它会执行：生成/修改代码、创建文件结构、补齐样式、指导你如何本地预览。

作者观点：就当下而言，它甚至比 Cursor 等工具更好用（至少在写这条推文的时间点）。

### 作者做了什么（设计师也能做的事）

- 48 小时内：做了个人网站 + AI 聊天（回答关于作品的问题）
- 3 天后：上线一个 growth design 内部工具
- 他强调：自己不是开发者，是设计师；一年前离开工程师几乎不能写代码，现在周末也能部署产品。

### Step 1：安装 Claude Code

Mac（终端执行）：

```bash
npm install -g @anthropic-ai/claude-code
```

如果没有 npm：先安装 Node.js（https://nodejs.org）。

验证安装：

```bash
claude
```

会打开一个文本界面，你可以开始输入指令。

另外：也可以使用 Claude Code 的桌面 Mac App（需要 Anthropic 账号），下载入口：
https://code.claude.com/docs/en/desktop

### Step 2：你只需要懂这些终端命令

```bash
claude                 # 启动 Claude Code
cd folder-name         # 进入目录
cd ..                  # 返回上一级
ls                     # 列出文件（Mac）
dir                    # 列出文件（Windows）
pwd                    # 显示当前路径（Mac）
```

### Step 3：创建第一个项目（先计划，再动手）

创建项目文件夹：

```bash
mkdir my-portfolio
cd my-portfolio
claude
```

关键原则：**永远先要一个 plan**（作者强调这是 critical）。

示例 prompt（让 Claude Code 产出 `plan.md`）：

- “我想做个人作品集网站：hero / projects / about / contact。请研究最佳方式并输出：
  1) 推荐技术栈
  2) 文件结构
  3) 设计注意点
  4) 分步实现计划”

之后你可以继续调整计划：

- “把技术栈从 React 换成原生 HTML/CSS，越简单越好。”

然后让它按计划实现。

本地预览（作者给的简单方式）：

```bash
npx serve
```

浏览器打开： http://localhost:3000

### Step 4：像设计师一样迭代（反馈 = 你的优势）

你擅长给反馈，把它写成指令：

- “hero 全屏 100vh，文字垂直居中”
- “projects 太挤了，卡片之间至少加 32px 间距”
- “卡片 hover：轻微放大 + 阴影”
- “字体换成 Inter（Google Fonts）”

移动端响应：

- “手机端卡片改为纵向堆叠”
- “导航在 <768px 时折叠为 hamburger”

功能增强：

- “点击导航链接加 smooth scroll”
- “加一个 contact form，用 Formspree 把提交发到邮箱”

### Step 5：提交到 GitHub（保存与版本化）

作者建议：
- 建 GitHub 仓库（不初始化 README）
- 在 Claude Code 里让它帮你完成 git 初始化、绑定 remote、commit、push

基本命令：

```bash
git init
git remote add origin https://github.com/yourusername/my-portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

并让它生成：
- `README.md`（说明项目 + 本地运行）
- `claude.md`（记录架构/上下文，给未来的你/未来的 Claude 用）

### Step 6：部署到 Vercel

两种方式：
- Vercel Dashboard 导入 GitHub 仓库 → Deploy
- 或直接对 Claude Code 说：把项目部署到 Vercel

上线后会得到形如 `xxx.vercel.app` 的线上地址。

### Step 7：绑定自定义域名

Vercel → Settings → Domains → 添加域名，然后按提示改 DNS。

作者给的示例：

```text
A      @     76.76.21.21
CNAME  www   cname.vercel-dns.com
```

### Step 8：进阶：从静态站到 Web App

目标功能：
- Google 登录
- AI chat（回答作品相关问题）
- 评论系统

让 Claude Code 先输出 `implementation-plan.md`：
- 需要哪些服务（auth / db / ai）
- 架构概览
- 安全注意点
- 分阶段实现

### Step 9：Supabase（数据库 + Auth）

作者流程：
- supabase.com 创建项目
- Settings → API 获取 URL 和 anon key
- Authentication → Providers → Google → Enable
- 再去 Google Cloud Console 配 OAuth Client ID

### Step 10：接入 OpenAI（AI 功能）

关键点：
- `.env` 存本地密钥，必须 `.gitignore`
- 更安全：把 key 存在 Supabase Edge Functions Secrets（服务端），避免暴露到前端

作者还给了一套 prompt 模板（计划/实现/加功能/排错）。

---

## 文章：为什么这对设计师是“杠杆”

### 1) 设计师不缺想法，缺的是“把东西做出来”的链路
过去的链路是：设计 → 交付 → 等排期 → 开发 → 上线。

Claude Code 把中间那段“等待与翻译”压缩掉：你可以直接把设计意图翻成可执行的实现步骤，让 agent 帮你落地。

### 2) 你不需要精通语法，但需要精通产品结构
这篇指南最大的暗线其实是：

- 语法不是门槛
- **结构和反馈**才是门槛

会写“正确的反馈”，比会写“正确的代码”更重要。

### 3) 先 plan 再做：把一次性冲刺变成可复用的 SOP
作者反复强调：先要 `plan.md`。

这其实是在做两件事：
- 把不确定性前置（先讨论取舍，而不是边写边返工）
- 把工程化过程文档化（未来可以复用模板，甚至让 AI 自己复用）

### 4) 真正的分水岭：部署与数据（不是 UI）
很多人会卡在“我能写个页面”，但真正拉开差距的是：
- Auth
- 数据库
- 部署
- 密钥与安全

这也是为什么作者从静态站一路写到 Supabase + OpenAI：
你一旦掌握这条链路，设计师就能做“能跑、能用、能迭代”的产品。

---

## 我自己的落地清单（给下次用）

- 先让 Claude Code 生成 `plan.md`（含 tech stack / file tree / steps）
- 只改 1-2 个变量：
  - 技术栈（React vs vanilla）
  - 部署（Vercel）
- 迭代时用“设计反馈语言”写 prompt
- 做到能上线（域名 + 部署）
- 需要数据/登录再上 Supabase
- AI key 永远别进 git：`.env + .gitignore` 或 server-side secret

---

## 参考

- 原推文：Felix Lee — Claude Code Guide for Designers
  https://x.com/felixleezd/status/2018728056249254377
- Claude Code Desktop： https://code.claude.com/docs/en/desktop
- Node.js： https://nodejs.org
- GitHub： https://github.com
- Vercel： https://vercel.com
- Supabase： https://supabase.com

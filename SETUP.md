# 网站设置指南

## 快速开始

### 1. 安装依赖

在终端中进入项目目录并运行：

\`\`\`bash
cd /Users/Steven/Desktop/technology/Website
npm install
\`\`\`

这将安装所有必需的依赖包（React, TypeScript, TailwindCSS等）。

### 2. 启动开发服务器

安装完成后，运行：

\`\`\`bash
npm run dev
\`\`\`

然后在浏览器中访问 http://localhost:3000

### 3. 构建生产版本

准备部署时，运行：

\`\`\`bash
npm run build
\`\`\`

这将在 \`dist\` 目录中生成优化后的生产文件。

## 添加新文章

编辑 \`src/data/articles.ts\` 文件，在 \`articles\` 数组中添加新的文章对象：

\`\`\`typescript
{
  slug: 'my-new-article',           // URL路径
  title: '我的新文章',              // 文章标题
  excerpt: '这是文章摘要',          // 简短描述
  category: 'AI',                   // 分类：AI, 产品管理, 编程, 创业, Web3, 量子
  date: '2024-01-20',              // 发布日期
  image: 'https://...',            // 封面图片（可选）
  content: \`
# 文章标题

这里是文章内容，使用Markdown格式编写...

## 二级标题

- 列表项1
- 列表项2

\\\`\\\`\\\`javascript
// 代码示例
console.log('Hello World')
\\\`\\\`\\\`
  \`
}
\`\`\`

保存文件后，网站会自动更新显示新文章。

## 部署到免费平台

### 方案1：Vercel（推荐）

1. 在GitHub上创建仓库并推送代码
2. 访问 https://vercel.com 并登录
3. 点击 "New Project"
4. 导入你的GitHub仓库
5. Vercel会自动检测配置，直接点击 "Deploy"
6. 几分钟后即可获得免费的https网址

### 方案2：Netlify

1. 在GitHub上创建仓库并推送代码
2. 访问 https://netlify.com 并登录
3. 点击 "Add new site" -> "Import an existing project"
4. 选择你的GitHub仓库
5. 构建设置：
   - Build command: \`npm run build\`
   - Publish directory: \`dist\`
6. 点击 "Deploy site"

### 方案3：Cloudflare Pages

1. 在GitHub上创建仓库并推送代码
2. 访问 https://pages.cloudflare.com 并登录
3. 点击 "Create a project"
4. 选择你的GitHub仓库
5. 构建设置：
   - Build command: \`npm run build\`
   - Build output directory: \`dist\`
6. 点击 "Save and Deploy"

## 自定义配置

### 修改网站标题和描述

编辑 \`index.html\` 文件：

\`\`\`html
<title>你的网站标题</title>
<meta name="description" content="你的网站描述" />
\`\`\`

### 修改主题颜色

编辑 \`tailwind.config.js\` 中的颜色配置。

### 修改页脚信息

编辑 \`src/components/Footer.tsx\` 文件。

## 项目结构

\`\`\`
Website/
├── src/
│   ├── components/      # 可复用组件
│   ├── pages/          # 页面组件
│   ├── data/           # 数据文件（在这里添加文章）
│   ├── App.tsx         # 应用主组件
│   └── main.tsx        # 入口文件
├── public/             # 静态资源
├── package.json        # 项目配置
└── README.md          # 详细文档
\`\`\`

## 常见问题

### Q: 如何添加图片？

A: 可以使用外部图片链接（如Unsplash），或将图片放在 \`public\` 目录中，然后使用 \`/image.jpg\` 引用。

### Q: 如何修改导航菜单？

A: 编辑 \`src/components/Header.tsx\` 文件中的 \`navItems\` 数组。

### Q: 如何添加新页面？

A: 
1. 在 \`src/pages/\` 创建新的页面组件
2. 在 \`src/App.tsx\` 中添加新的路由
3. 在导航栏中添加链接

## 技术支持

如遇到问题，请查看：
- 详细的 README.md 文档
- React 官方文档：https://react.dev
- TailwindCSS 文档：https://tailwindcss.com
- Vite 文档：https://vitejs.dev

---

祝你使用愉快！🚀

# Ste1ven - 个人成长博客网站

一个简约、专业、流畅的个人成长博客网站，采用Apple设计风格，记录在AI、产品管理、编程、创业、Web3、量子领域的学习成果。

## ✨ 特点

- 🎨 **Apple风格设计** - 简约优雅的视觉设计，大量留白和流畅动画
- 📱 **完全响应式** - 完美适配各种设备和屏幕尺寸
- ⚡ **极速性能** - 基于Vite构建，开发和生产环境都极快
- 📝 **Markdown支持** - 直接编辑Markdown文件，自动渲染为精美页面
- 🎭 **流畅动画** - 使用Framer Motion实现丝滑的页面过渡和交互
- 🚀 **零配置部署** - 可一键部署到Vercel、Netlify等平台

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: TailwindCSS
- **路由**: React Router v6
- **动画**: Framer Motion
- **Markdown**: react-markdown + remark-gfm

## 📦 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:3000 查看网站

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

### 预览生产版本

\`\`\`bash
npm run preview
\`\`\`

## 📝 添加内容

### 添加文章

编辑 \`src/data/articles.ts\` 文件，添加新的文章对象：

\`\`\`typescript
{
  slug: 'your-article-slug',
  title: '文章标题',
  excerpt: '文章摘要',
  category: 'AI', // AI, 产品管理, 编程, 创业, Web3, 量子
  date: '2024-01-01',
  image: 'https://example.com/image.jpg', // 可选
  content: \`
# 文章标题

文章内容使用Markdown格式...
  \`
}
\`\`\`

### 支持的Markdown特性

- 标题（H1-H6）
- 段落和换行
- 粗体和斜体
- 列表（有序和无序）
- 代码块（支持语法高亮）
- 引用
- 链接和图片
- 表格
- 任务列表

## 🚀 部署

### 部署到Vercel（推荐）

1. 将代码推送到GitHub仓库
2. 访问 [Vercel](https://vercel.com)
3. 点击 "Import Project"
4. 选择你的GitHub仓库
5. Vercel会自动检测Vite项目并配置构建设置
6. 点击 "Deploy"

### 部署到Netlify

1. 将代码推送到GitHub仓库
2. 访问 [Netlify](https://netlify.com)
3. 点击 "New site from Git"
4. 选择你的GitHub仓库
5. 构建设置：
   - Build command: \`npm run build\`
   - Publish directory: \`dist\`
6. 点击 "Deploy site"

### 部署到Cloudflare Pages

1. 将代码推送到GitHub仓库
2. 访问 [Cloudflare Pages](https://pages.cloudflare.com)
3. 点击 "Create a project"
4. 选择你的GitHub仓库
5. 构建设置：
   - Build command: \`npm run build\`
   - Build output directory: \`dist\`
6. 点击 "Save and Deploy"

## 📁 项目结构

\`\`\`
Website/
├── public/              # 静态资源
├── src/
│   ├── components/      # React组件
│   │   ├── Header.tsx   # 导航栏
│   │   └── Footer.tsx   # 页脚
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx    # 首页
│   │   ├── Articles.tsx # 文章列表
│   │   ├── ArticleDetail.tsx # 文章详情
│   │   └── About.tsx   # 关于页面
│   ├── data/           # 数据文件
│   │   └── articles.ts # 文章数据
│   ├── App.tsx         # 应用根组件
│   ├── main.tsx        # 应用入口
│   └── index.css       # 全局样式
├── index.html          # HTML模板
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript配置
├── vite.config.ts      # Vite配置
├── tailwind.config.js  # TailwindCSS配置
└── README.md          # 项目说明
\`\`\`

## 🎨 自定义样式

### 修改主题色

编辑 \`tailwind.config.js\` 中的颜色配置：

\`\`\`javascript
theme: {
  extend: {
    colors: {
      apple: {
        blue: {
          DEFAULT: '#0071e3', // 修改为你喜欢的颜色
        }
      }
    }
  }
}
\`\`\`

### 修改字体

编辑 \`tailwind.config.js\` 中的字体配置：

\`\`\`javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['你的字体', 'sans-serif'],
    }
  }
}
\`\`\`

## 📄 License

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📧 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 在GitHub上提Issue
- 发送邮件至你的邮箱

---

**持续学习，持续成长** 🚀

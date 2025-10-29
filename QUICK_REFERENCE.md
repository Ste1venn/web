# 快速参考手册

## 🎯 最常用操作

### 添加新文章

**文件**：`src/data/articles.ts`

```typescript
{
  slug: 'my-article',           // URL路径
  title: '文章标题',
  excerpt: '文章摘要',
  category: 'AI',              // AI, 产品管理, 编程, 创业, Web3, 量子
  date: '2024-01-20',
  image: 'https://...',        // 可选
  content: `
# 标题

内容使用Markdown格式...
  `
}
```

### 更新网站

```bash
# 1. 编辑 src/data/articles.ts 添加文章
# 2. 保存文件
# 3. 推送到GitHub
git add .
git commit -m "添加新文章"
git push

# 4. Vercel会自动部署（2-3分钟）
```

---

## 📁 核心文件位置

| 功能 | 文件路径 | 说明 |
|------|---------|------|
| **添加文章** | `src/data/articles.ts` | 在这里添加所有文章 |
| **修改导航** | `src/components/Header.tsx` | 修改导航菜单 |
| **修改页脚** | `src/components/Footer.tsx` | 修改页脚内容 |
| **修改首页** | `src/pages/Home.tsx` | 修改首页内容 |
| **修改关于** | `src/pages/About.tsx` | 修改关于页面 |
| **修改颜色** | `tailwind.config.js` | 修改主题颜色 |
| **修改标题** | `index.html` | 修改网站标题 |

---

## 🎨 常用样式类

```typescript
// 布局
className="flex items-center justify-between"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
className="max-w-7xl mx-auto px-6 py-16"

// 文字
className="text-5xl font-bold text-apple-gray-800"
className="text-xl text-apple-gray-600"

// 颜色
className="bg-apple-blue text-white"
className="text-apple-blue"
className="bg-gradient-to-r from-apple-blue to-purple-600"

// 圆角和阴影
className="rounded-2xl shadow-lg"
className="rounded-full"

// 间距
className="mb-4"      // 下边距
className="mt-8"      // 上边距
className="px-6 py-4" // 内边距

// 悬停效果
className="hover:bg-apple-blue-dark transition-colors"
className="hover:scale-105 transition-transform"
```

---

## 🔧 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器 (localhost:3000)

# 构建
npm run build            # 构建生产版本
npm run preview          # 预览生产版本

# Git
git status               # 查看修改状态
git add .                # 添加所有修改
git commit -m "描述"     # 提交修改
git push                 # 推送到GitHub

# 查看日志
git log --oneline        # 查看提交历史
```

---

## 🌐 网站地址

- **开发环境**：http://localhost:3000
- **生产环境**：https://web-two-fawn-52.vercel.app
- **GitHub仓库**：https://github.com/Ste1venn/web

---

## 📊 文件结构（简化版）

```
Website/
├── src/
│   ├── data/
│   │   └── articles.ts          ← 在这里添加文章
│   ├── pages/
│   │   ├── Home.tsx             ← 首页
│   │   ├── Articles.tsx         ← 文章列表
│   │   ├── ArticleDetail.tsx    ← 文章详情
│   │   └── About.tsx            ← 关于页面
│   ├── components/
│   │   ├── Header.tsx           ← 导航栏
│   │   └── Footer.tsx           ← 页脚
│   ├── App.tsx                  ← 路由配置
│   └── main.tsx                 ← 入口文件
│
├── index.html                   ← HTML模板
├── package.json                 ← 依赖配置
├── tailwind.config.js           ← 样式配置
└── vite.config.ts               ← 构建配置
```

---

## 🐛 常见问题

### Q: 添加文章后网站没更新？
A: 
1. 检查 `articles.ts` 语法是否正确
2. 运行 `git push` 推送到GitHub
3. 等待Vercel自动部署（2-3分钟）

### Q: 本地开发服务器启动失败？
A:
```bash
# 删除node_modules重新安装
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Q: 如何修改网站颜色？
A: 编辑 `tailwind.config.js`：
```javascript
colors: {
  apple: {
    blue: {
      DEFAULT: '#0071e3',  // 改成你想要的颜色
    }
  }
}
```

### Q: 如何添加新页面？
A:
1. 在 `src/pages/` 创建新文件
2. 在 `src/App.tsx` 添加路由
3. 在 `src/components/Header.tsx` 添加导航链接

---

## 📚 完整文档

- **详细代码结构**：`CODE_STRUCTURE.md`
- **项目说明**：`README.md`
- **快速设置**：`SETUP.md`
- **Git使用**：`GIT_GUIDE.md`
- **域名配置**：`DOMAIN_GUIDE.md`

---

## 💡 提示

1. **添加文章**只需编辑 `src/data/articles.ts`
2. **推送代码**后Vercel会自动部署
3. **本地测试**使用 `npm run dev`
4. **遇到问题**查看完整文档或GitHub Issues

---

**记住**：99%的时间你只需要编辑 `src/data/articles.ts` 文件来添加内容！

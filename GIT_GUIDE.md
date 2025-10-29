# Git推送指南

## 方法一：推送到新的GitHub仓库（推荐）

### 1. 在GitHub上创建新仓库

1. 访问 https://github.com
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `growth-blog` （或你喜欢的名字）
   - Description: `个人成长博客网站`
   - 选择 Public（公开）或 Private（私有）
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

### 2. 在本地初始化Git并推送

在终端中运行以下命令：

```bash
# 进入项目目录
cd /Users/Steven/Desktop/technology/Website

# 初始化Git仓库
git init

# 添加所有文件到暂存区
git add .

# 提交代码
git commit -m "Initial commit: 创建个人成长博客网站"

# 添加远程仓库（替换YOUR_USERNAME为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/growth-blog.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 3. 输入GitHub凭证

首次推送时，系统会要求你输入GitHub凭证：
- **用户名**：你的GitHub用户名
- **密码**：需要使用Personal Access Token（不是GitHub密码）

#### 如何创建Personal Access Token：

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" -> "Generate new token (classic)"
3. 设置：
   - Note: `Website deployment`
   - Expiration: 选择有效期
   - 勾选 `repo` 权限
4. 点击 "Generate token"
5. **复制生成的token**（只显示一次，请妥善保存）
6. 在终端密码提示时，粘贴这个token

## 方法二：推送到已存在的仓库

如果你已有GitHub仓库，运行：

```bash
cd /Users/Steven/Desktop/technology/Website

git init
git add .
git commit -m "Initial commit: 创建个人成长博客网站"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## 方法三：使用GitHub Desktop（图形界面）

### 1. 下载GitHub Desktop

访问 https://desktop.github.com 下载并安装

### 2. 添加本地仓库

1. 打开GitHub Desktop
2. 点击 "File" -> "Add Local Repository"
3. 选择 `/Users/Steven/Desktop/technology/Website` 目录
4. 如果提示"This directory does not appear to be a Git repository"，点击 "Create a repository"

### 3. 发布到GitHub

1. 点击 "Publish repository"
2. 填写仓库名称和描述
3. 选择是否保持私有
4. 点击 "Publish Repository"

## 常用Git命令

### 日常更新流程

```bash
# 查看修改状态
git status

# 添加修改的文件
git add .

# 提交修改
git commit -m "更新：添加新文章"

# 推送到GitHub
git push
```

### 查看提交历史

```bash
git log --oneline
```

### 撤销修改

```bash
# 撤销工作区的修改
git checkout -- filename

# 撤销暂存区的修改
git reset HEAD filename
```

## 推送后的下一步

### 部署到Vercel

1. 访问 https://vercel.com
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择你刚推送的GitHub仓库
5. 点击 "Deploy"
6. 等待几分钟，获得免费的https网址

### 部署到Netlify

1. 访问 https://netlify.com
2. 点击 "Add new site" -> "Import an existing project"
3. 选择 "GitHub"
4. 选择你的仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

## 故障排除

### 问题1：推送被拒绝

```bash
# 先拉取远程更新
git pull origin main --rebase

# 再推送
git push origin main
```

### 问题2：忘记添加.gitignore

```bash
# 删除已跟踪的node_modules
git rm -r --cached node_modules
git rm -r --cached dist

# 提交更改
git commit -m "移除node_modules和dist"
git push
```

### 问题3：修改最后一次提交信息

```bash
git commit --amend -m "新的提交信息"
git push --force
```

## 最佳实践

1. **经常提交**：完成一个功能就提交一次
2. **清晰的提交信息**：描述你做了什么改动
3. **推送前测试**：确保代码能正常运行
4. **使用分支**：开发新功能时创建新分支

```bash
# 创建并切换到新分支
git checkout -b feature/new-article

# 开发完成后合并到主分支
git checkout main
git merge feature/new-article
```

## 快速命令备忘

```bash
# 完整的推送流程
git add .
git commit -m "描述你的修改"
git push

# 查看状态
git status

# 查看远程仓库
git remote -v

# 克隆仓库到其他电脑
git clone https://github.com/YOUR_USERNAME/growth-blog.git
```

---

**提示**：推送成功后，你可以在GitHub仓库页面看到所有代码，并且可以直接部署到Vercel/Netlify等平台！

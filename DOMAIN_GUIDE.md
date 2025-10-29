# 域名修改指南

## 当前网址
https://web-two-fawn-52.vercel.app/

## 修改Vercel子域名（免费）

### 步骤

1. **访问Vercel控制台**
   - 打开 https://vercel.com/dashboard
   - 找到你的项目 `web`

2. **进入域名设置**
   - 点击项目名称进入项目详情
   - 点击顶部的 "Settings" 标签
   - 在左侧菜单选择 "Domains"

3. **修改域名**
   - 找到当前域名 `web-two-fawn-52.vercel.app`
   - 点击右侧的三个点 "..." 或 "Edit" 按钮
   - 输入新的子域名，例如：
     - `steven-blog.vercel.app`
     - `growth-journey.vercel.app`
     - `my-learning.vercel.app`
     - `tech-notes.vercel.app`
   - 点击 "Save" 保存

4. **等待生效**
   - 通常几秒钟就会生效
   - 旧域名会自动重定向到新域名

### 推荐的域名

根据你的网站主题，推荐以下域名：

- `growth-path.vercel.app` - 成长之路
- `steven-growth.vercel.app` - 个人成长
- `tech-journey.vercel.app` - 技术之旅
- `learning-notes.vercel.app` - 学习笔记
- `my-progress.vercel.app` - 我的进步

## 绑定自定义域名（需购买域名）

### 1. 购买域名

推荐平台：
- **Namecheap**: https://www.namecheap.com （约$10/年）
- **Cloudflare**: https://www.cloudflare.com/products/registrar/ （成本价）
- **阿里云**: https://wanwang.aliyun.com （国内）
- **腾讯云**: https://dnspod.cloud.tencent.com （国内）

推荐域名后缀：
- `.com` - 最常见
- `.dev` - 开发者
- `.blog` - 博客
- `.tech` - 技术
- `.me` - 个人

### 2. 在Vercel添加域名

1. 进入项目的 "Settings" → "Domains"
2. 点击 "Add" 按钮
3. 输入你的域名，例如：
   - `yourdomain.com`
   - `blog.yourdomain.com`
   - `www.yourdomain.com`
4. 点击 "Add"

### 3. 配置DNS记录

Vercel会提供DNS配置说明，通常是：

#### 如果使用根域名（example.com）：
```
类型: A
名称: @
值: 76.76.21.21
```

#### 如果使用子域名（blog.example.com）：
```
类型: CNAME
名称: blog
值: cname.vercel-dns.com
```

### 4. 在域名服务商配置

以Namecheap为例：
1. 登录Namecheap账户
2. 进入 "Domain List"
3. 点击域名旁的 "Manage"
4. 选择 "Advanced DNS"
5. 添加上述DNS记录
6. 等待生效（通常5-30分钟）

### 5. 验证域名

1. 回到Vercel，等待验证完成
2. 看到绿色勾号表示成功
3. Vercel会自动配置HTTPS证书

## 域名对比

| 类型 | 费用 | 示例 | 优点 | 缺点 |
|------|------|------|------|------|
| Vercel子域名 | 免费 | `xxx.vercel.app` | 免费、简单 | 不够专业 |
| 自定义域名 | ~$10/年 | `yourdomain.com` | 专业、品牌 | 需要购买 |

## 常见问题

### Q: 修改域名会影响网站吗？
A: 不会，内容完全不变，只是访问地址改变。

### Q: 旧域名还能用吗？
A: 可以，Vercel会自动重定向到新域名。

### Q: 可以同时使用多个域名吗？
A: 可以，Vercel支持添加多个域名指向同一个项目。

### Q: 自定义域名必须购买吗？
A: 不是必须的，Vercel的免费子域名完全够用。只有想要更专业的形象时才需要购买。

### Q: 国内访问Vercel快吗？
A: Vercel在国内访问速度一般。如果主要面向国内用户，可以考虑：
- 使用国内CDN加速
- 部署到Netlify（国内访问稍快）
- 使用国内平台（需要备案）

## 推荐方案

**个人博客（当前情况）**：
- 使用Vercel免费子域名即可
- 修改为有意义的名字，如 `steven-growth.vercel.app`
- 等以后需要时再购买自定义域名

**专业展示**：
- 购买一个 `.com` 或 `.dev` 域名
- 绑定到Vercel项目
- 成本约$10/年

---

**当前建议**：先修改Vercel子域名为一个有意义的名字，完全免费且够用！

# BeaverGo / 小河狸大冒险 — App Store 审核静态站点

纯静态 HTML/CSS/JS，零构建依赖，支持**按浏览器语言自动切换中/英文**（也可通过右上角按钮或 `?lang=en` / `?lang=zh` 手动切换），方便 Apple 英文审核团队与国内玩家同时流畅访问。

## 包含页面与 App Store Connect 填写对应关系

部署到任意静态托管（如 GitHub Pages、Cloudflare Pages、Vercel、Netlify 或自有域名 `https://<your-domain>/`）后，按如下对应填写：

| App Store Connect 字段 | 是否必填 | 对应页面 | 填写示例 |
| :--- | :---: | :--- | :--- |
| **技术支持网址（Support URL）** | 必填 | `support.html` | `https://<your-domain>/support.html` |
| **隐私政策网址（Privacy Policy URL）** | 必填 | `privacy.html` | `https://<your-domain>/privacy.html` |
| **营销网址（Marketing URL）** | 选填 | `index.html` | `https://<your-domain>/` |
| **使用条款（Terms of Use）** | 选填 | `terms.html` | `https://<your-domain>/terms.html` |

> 如需更换联系邮箱，批量替换 `docs/site/*.html` 中的 `c0ming@qq.com` 即可。

## 本地预览

```bash
python3 -m http.server 8080 --directory docs/site
# 浏览器打开 http://127.0.0.1:8080/
```

## 快速部署方式（三选一）

1. **GitHub Pages**：将 `docs/site/` 内容推送到公开仓库（或 `gh-pages` 分支），在仓库 **Settings → Pages** 开启即可获得免费 HTTPS 网址。
2. **Cloudflare Pages / Netlify**：直接将 `docs/site` 文件夹拖入后台即可 10 秒上线 HTTPS 静态页。
3. **自有域名**：直接上传 `docs/site/` 全部文件到静态服务器目录。

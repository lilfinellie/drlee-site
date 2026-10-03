# 李瑤琳醫師網站

用 Astro 建置的靜態網站。你不需要會寫程式，日常只會改到文字。

## 資料夾裡有什麼

| 位置 | 內容 |
|---|---|
| `src/data/site.ts` | **網址、門診時間、掛號連結**：改這裡，全站一起更新 |
| `src/pages/index.astro` | 首頁 |
| `src/pages/pituitary.astro` | 腦下垂體 |
| `src/pages/cervical-spine.astro` | 頸椎 |
| `src/pages/low-back-pain.astro` | 下背痛與腰椎 |
| `src/pages/minimally-invasive.astro` | 微創手術與設備 |
| `src/pages/trauma.astro` | 腦出血與外傷 |
| `src/pages/faq.astro` | 門診常見問題 |
| `src/styles/global.css` | 顏色、字型、版面 |
| `public/` | 照片、圖示放這裡 |

頁面中淡金色底的 `<span class="tbd">` 是待你確認或補充的地方。搜尋 `tbd` 就能全部找到。

## 上線前要改的兩個地方

1. `src/data/site.ts` 的 `url`：換成你買的網域（例如 `https://www.drlee-neuro.tw`）
2. `public/robots.txt` 最後一行的網址：同樣換成你的網域

## 上線（GitHub + Cloudflare Pages）

1. 在 GitHub 建立一個新的 repository，把這個資料夾的內容上傳（不含 `node_modules`、`dist`）
2. 到 Cloudflare → Workers & Pages → Create → Pages → Connect to Git，選這個 repository
3. 設定：Framework preset 選 **Astro**，Build command `npm run build`，Output directory `dist`
4. 部署完成後，在 Custom domains 綁定你的網域

之後只要 GitHub 上的檔案有更新，Cloudflare 會自動重新上線。

## 讓 Google 找得到（上線後做一次）

1. **Google Search Console**：新增你的網域、驗證，提交 `https://你的網域/sitemap-index.xml`
2. **Google 商家檔案（Google Business Profile）**：以「醫師」身分建立，地址填奇美醫學中心，網站填你的網址。這對「台南 腦下垂體」這類在地搜尋影響最大
3. **請醫院的醫師介紹頁、學會的理事名單，加上你網站的連結**：可信來源的連結對醫療網站的排名很重要
4. 定期新增衛教文章：每篇回答一個病人真正會搜尋的問題

## 在自己電腦預覽（選用）

```
npm install
npm run dev
```
打開 http://localhost:4321

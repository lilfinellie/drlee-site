// ───────────────────────────────────────────────
// 網站基本資料：改這裡，全站會一起更新
// ───────────────────────────────────────────────

export const SITE = {
  // 買好網域後，把這裡換成你的網址（SEO 與 sitemap 會用到）
  url: 'https://www.example.com',
  name: '李瑤琳醫師｜腦下垂體・顱底內視鏡・脊椎',
  doctor: {
    zh: '李瑤琳',
    en: 'Yao Lin Lee',
    title: '神經外科主治醫師',
    orcid: 'https://orcid.org/0000-0001-7443-1514',
  },
  hospital: {
    name: '奇美醫學中心 永康院區',
    dept: '神經外科',
    address: '台南市永康區中華路901號',
    deptUrl: 'https://sub.chimei.org.tw/57520/',
    // 換成你個人掛號頁的網址，病人就能一鍵直接掛你的號
    bookingUrl: 'https://www.chimei.org.tw/newindex/opd/opd.html',
  },
  // 門診時間文字（首頁表格在 src/pages/index.astro 的「CLINIC」段落）
  clinicText: '週二上午・週二下午・單數週三夜診',
};

export const NAV = [
  { href: '/pituitary/', label: '腦下垂體' },
  { href: '/cervical-spine/', label: '頸椎' },
  { href: '/low-back-pain/', label: '下背痛與腰椎' },
  { href: '/minimally-invasive/', label: '微創手術與設備' },
  { href: '/trauma/', label: '腦出血與外傷' },
  { href: '/faq/', label: '門診常見問題' },
];

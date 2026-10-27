// 媒體報導：新增一則就在最上面加一筆（最新的放最前面）
export type Press = { title: string; outlet: string; date: string; url: string; topic: string };

export const PRESS: Press[] = [
  { title: '醫籲勿輕忽硬腦膜下血腫症狀', outlet: '中央社', date: '2024-11-26', topic: '慢性硬腦膜下血腫',
    url: 'https://tw.news.yahoo.com/%E9%86%AB%E7%B1%B2%E5%8B%BF%E8%BC%95%E5%BF%BD%E7%A1%AC%E8%85%A6%E8%86%9C%E4%B8%8B%E8%A1%80%E8%85%AB%E7%97%87%E7%8B%80-%E5%9C%96-070803053.html' },
  { title: '奇美醫院提醒慢性硬腦膜下血腫常延遲發病 及早治療是契機！', outlet: '台灣賦羽公益聯盟', date: '2024-11', topic: '慢性硬腦膜下血腫',
    url: 'https://fuyutalent.org.tw/life_view.php?new_sn=11094' },
  { title: '輕熟女患腦瘤免開顱「3D經鼻內視鏡」微創無疤', outlet: '健康醫療網', date: '2022-08-02', topic: '腦下垂體腫瘤',
    url: 'https://www.healthnews.com.tw/article/54612' },
  { title: '腦瘤免開顱，微創不留疤 奇美醫學中心提供3D經鼻內視鏡', outlet: 'CNMA 新聞聯合網', date: '2022-08-01', topic: '腦下垂體腫瘤',
    url: 'https://www.cnma.org.tw/page/news/show.aspx?num=6979' },
  { title: '腦下垂體腫瘤「3D經鼻內視鏡」摘除 奇美醫：免開顱微創不留疤', outlet: '視傳媒', date: '2022-07-28', topic: '腦下垂體腫瘤',
    url: 'https://nvns.net/news_view.php?new_sn=21662' },
  { title: '34歲女腦下垂體長腫瘤 經鼻內視鏡摘除 不用剃髮5天出院', outlet: '自由時報・自由健康網', date: '2022-07-26', topic: '腦下垂體腫瘤',
    url: 'https://health.ltn.com.tw/article/breakingnews/4004616' },
];

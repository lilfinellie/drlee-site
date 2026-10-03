export type QA = { q: string; a: string };
// 產生 Google 可讀的 FAQ 結構化資料
export const faqSchema = (items: QA[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a.replace(/<[^>]+>/g, '') },
  })),
});

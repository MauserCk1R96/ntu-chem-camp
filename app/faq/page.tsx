import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常見問題",
  description:
    "整理台大化學營報名資格、活動地點與高中生參加化學營隊前常見的疑問。",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "參加台大化學營化學需要很好嗎？ 需不需要有先備知識？",
    answer: "台大化學營舉辦的目的，是為了讓高中生跳脫課本的考試重點與公式計算，從不同的角度認識化學。我們尤其著重實驗以及與生活相關的化學知識，希望讓對化學有興趣的學員從中得到啟發。  每年參加化學營的學員來自各地、從高一到高三都有，我們並不會預設學員應擁有哪些知識，若有遇到任何問題，隊輔和工作人員都會熱心幫忙解惑的！​",
  },
  {
    question: "錄取名單決定的方式為何？",
    answer: " 1. 資料齊全者優先錄取。資料經查證為偽造者不予錄取。2. 依地區、學校、性別等資料作平均分配，讓學員有機會認識來自不同背景的朋友。3. 自我介紹與參加動機將作為錄取之參考依據。"
  },
  {
    question: "請問可以團體報名嗎？我可以跟認識的朋友同隊嗎？",
    answer: "為顧及所有報名同學的權益，每一份報名表單都是分開審核。​此外，分隊時會將同地區、學校的學員打散，因此認識的朋友不易分到同一隊。",
  },
  {
    question: "若臨時有事不能參加，該怎麼通知你們？",
    answer: " 請以官網、email、或私訊粉專通知我們，工作人員將以電話跟你確認。 唯在繳費後取消參加者，將依取消的時間採取部分退費。​",
  }
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          FAQ
        </p>

        <h1 className="mb-12 text-4xl font-bold md:text-6xl">
          常見問題
        </h1>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="mb-3 text-xl font-bold text-cyan-300">
                {faq.question}
              </h2>
              <p className="leading-7 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

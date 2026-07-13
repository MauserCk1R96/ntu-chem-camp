import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常見問題",
  description:
    "整理台大化學營報名資格、活動地點與高中生參加化學營隊前常見的疑問。",
  alternates: {
    canonical: "/faq",
  },
};

type Faq = {
  question: string;
  answer: string[];
  points?: string[];
};

const faqs: Faq[] = [
  {
    question: "參加台大化學營化學需要很好嗎？ 需不需要有先備知識？",
    answer: [
      "不需要。台大化學營舉辦的目的，是希望讓高中生跳脫課本中的考試重點與公式計算，從不同角度認識化學。",
      "活動尤其著重實驗操作與生活中的化學知識，希望讓對化學有興趣的學員都能從中得到啟發。每年參加的學員來自各地，也涵蓋高一到高三，我們不會預設大家一定要具備特定先備知識。",
      "如果活動過程中遇到問題，隊輔與工作人員都會協助解惑。",
    ],
  },
  {
    question: "錄取名單決定的方式為何？",
    answer: [
      "錄取時會綜合參考報名資料完整度、學員背景分布與報名表內容。",
    ],
    points: [
      "資料齊全者優先錄取；資料經查證為偽造者不予錄取。",
      "依地區、學校、性別等資料做平均分配，讓學員有機會認識來自不同背景的朋友。",
      "自我介紹與參加動機將作為錄取參考依據。",
    ],
  },
  {
    question: "請問可以團體報名嗎？我可以跟認識的朋友同隊嗎？",
    answer: [
      "為顧及所有報名同學的權益，每一份報名表單都會分開審核。",
      "分隊時也會盡量將同地區、同學校的學員打散，讓大家有機會認識不同背景的新朋友。因此，認識的朋友不一定會分到同一隊。",
    ],
  },
  {
    question: "若臨時有事不能參加，該怎麼通知你們？",
    answer: [
      "請透過官網聯絡資訊、Email 或粉專私訊通知我們，工作人員會再以電話與你確認。",
      "若已完成繳費後取消參加，將依取消時間辦理部分退費。詳細規定請參考報名資訊頁的退費說明。",
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
            FAQ
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            常見問題
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            整理報名前常見的疑問，包含先備知識、錄取方式、分隊安排與臨時取消等資訊。
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="grid gap-5 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[96px_1fr] md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-sm font-bold text-cyan-200">
                Q{index + 1}
              </div>

              <div>
                <h2 className="mb-4 text-xl font-bold leading-8 text-cyan-200 md:text-2xl">
                  {faq.question}
                </h2>

                <div className="space-y-3 text-base leading-8 text-slate-300">
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {faq.points ? (
                    <ol className="space-y-2 pl-5 text-slate-300">
                      {faq.points.map((point) => (
                        <li key={point} className="list-decimal pl-1">
                          {point}
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

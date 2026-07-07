const faqs = [
  {
    question: "誰可以報名？",
    answer: "主要招生對象為全國高中職學生，詳細資格會依正式簡章公告為準。",
  },
  {
    question: "需要化學基礎嗎？",
    answer: "不需要特別先修大學化學，只要對化學與實驗探索有興趣即可參加。",
  },
  {
    question: "活動在哪裡舉辦？",
    answer: "活動預計於國立臺灣大學化學系及相關教學空間舉行。",
  },
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

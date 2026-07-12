import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "報名資訊、繳費須知與退款規定",
  description:
    "了解台大化學營線上報名方式、報名費用、繳費期限、匯款資訊、清寒生補助計畫與營隊退費相關規定。",
  alternates: {
    canonical: "/registration",
  },
};

const registrationNotes = [
  "由於需在表單中上傳個人照片，請先登入 Google 帳戶再填寫表單。",
  "請務必取得監護人同意再報名本活動。",
  "本活動雖已採線上報名，但仍須列印家長同意書以及防疫與實驗室安全同意書，填妥資料並由監護人簽章，於報到時繳交。",
];

const subsidyRequirements = [
  "低收入戶或其他經濟困難證明",
  "教師或社工人員推薦函",
  "清寒補助計畫切結書",
];

const subsidyPledges = [
  "申請計畫者不得同時報名一般名額。",
  "若非重大天災或不可抗力因素，錄取後不得放棄資格。",
  "營期結束一個月內，須繳交 1000 字心得作為效能評估之用，心得將不會公開。",
];

const paymentDeadlines = [
  {
    label: "正取生",
    value: "12/19（二）",
  },
  {
    label: "備取生",
    value: "待通知後請依照信件內規定的時間繳費。",
  },
];

const paymentForms = [
  {
    label: "繳費資訊表單",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdUgNrZbM9b7rbdZY3c5bnmM_qWaUIhF1WNUxPgx8XGPRboLg/viewform",
  },
  {
    label: "學員錄取報到表單",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeVd1qB3b8SXq-oudquIKT5wg_QMKXYRBLOkvdOaUqR9Q-6wA/viewform",
  },
];

const refundRules = [
  "為確保活動品質，主辦方須預先支出食宿、場地等費用。營隊開始前，學員已完成報名及繳費手續，若在活動開始 21 日前（含）因故無法參與營隊，扣除所需行政費用後，退還報名費九成。",
  "營隊開始前 8 至 20 天內取消參加，退還報名費七成；營隊開始前 7 天內取消參加，恕無法退費。",
  "營隊開始前，如遇重大天災、流行病等不可抗力情事致使營隊取消，則退還報名費七成，並於原定營期開始日十四日內退還。",
  "營期中如遇重大天災、流行病等不可抗力情事，為確保學員安全，得由主辦單位決定提前結束。若於營期第 1 至 3 天活動中止，扣除已支出之費用以及未支出但屬必要之費用後，剩餘費用全數退還。",
  "若於營期第 4 至 5 天活動中止，因活動費用皆已支出，唯餐費可退還，其餘恕不退費。",
  "營隊進行中，若因學員個人因素未完整參與營隊活動而提早離開，因課程、活動等皆照常進行，恕不退費。",
  "以上退款方式，若覺有不妥之處，請慎重考慮再行匯款。主辦單位保留活動更動與解釋權。",
];

function InfoCard({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(15,23,42,0.35)] md:p-8">
      <h2 className="mb-5 text-2xl font-bold text-cyan-200">{title}</h2>
      {children}
    </section>
  );
}

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          REGISTRATION
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          報名資訊、繳費須知與退款規定
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          以下整理台大化學營的線上報名流程、費用說明、清寒生補助計畫、
          報名確認方式、繳費須知與退費規定。報名前與匯款前請務必詳閱相關
          說明，並確認已取得監護人同意。
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfR076Pp1ChtU1-3SQOgQ989M0kuM7ur9sgsv3Yysz5mksVUA/viewform?usp=sharing&ouid=103461614838581818619"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-8 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            前往報名表單
          </a>
          <a
            href="mailto:ntuchchemcamp@gmail.com"
            className="rounded-full border border-white/30 px-8 py-3 text-center font-semibold text-white transition hover:bg-white/10"
          >
            聯絡官方信箱
          </a>
        </div>
      </section>

      <div className="mx-auto mt-14 grid max-w-5xl gap-8">
        <InfoCard title="一、線上報名">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>本活動採線上報名。請於 Google 表單中填妥真實資料並送出，即完成報名。</p>
            <p>
              報名前請務必詳閱報名簡章，並建議先閱讀報名表單題目
              （附於報名簡章後）再開始填寫表單。
            </p>
            <p>
              報名表單開始時間為 11/19，至 12/9 23:59 截止報名。
            </p>
            <ul className="space-y-3">
              {registrationNotes.map((note) => (
                <li key={note} className="rounded-2xl bg-white/5 px-5 py-4">
                  ※ {note}
                </li>
              ))}
            </ul>
          </div>
        </InfoCard>

        <InfoCard title="二、報名費用說明">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>
              報名費用為
              <strong className="mx-1 text-cyan-200">7500 元整</strong>
              ，此為不包含住宿的費用。
            </p>
            <p>
              2027 化學營為日歸營，將不提供住宿，營隊期間只有白天時會一同
              參與化學營的活動。居住於外縣市或基於其他原因而有住宿需求之學員，
              我們會於報名時另行調查協助辦理住宿。若有任何疑問，可以私訊粉專
              或寄 e-mail 詢問。
            </p>
          </div>
        </InfoCard>

        <InfoCard title="三、清寒生補助計畫">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>
              參加者免交報名費，唯來回交通費及營期外費用須自理。
              計畫上限 2 名，得不足名額錄取。
            </p>
            <div>
              <p className="mb-3 font-semibold text-cyan-100">
                欲申請補助者需額外填寫清寒補助計畫表單，內容包含：
              </p>
              <ol className="space-y-2">
                {subsidyRequirements.map((item, index) => (
                  <li key={item}>
                    ({index + 1}) {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p>※ (1)、(2) 請拍照後上傳於表單中，檔名須為 PDF 檔。</p>
              <p>※ 由於需在表單中上傳檔案，請先登入 Google 帳戶再填寫表單。</p>
              <p>※ 為保障個人隱私，自錄取名單公告至活動結束皆不會透露清寒生身分。</p>
            </div>
            <div>
              <p className="mb-3 font-semibold text-cyan-100">切結書內容：</p>
              <ol className="space-y-2">
                {subsidyPledges.map((item, index) => (
                  <li key={item}>
                    ({index + 1}) {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="四、報名確認">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>
              主辦單位收到報名表單後，將發送確認郵件至報名表單上的聯絡電子信箱。
            </p>
            <p>
              若未收到確認信，請寄信至官方信箱
              <a
                href="mailto:ntuchchemcamp@gmail.com"
                className="mx-1 font-semibold text-cyan-200 underline-offset-4 hover:underline"
              >
                ntuchchemcamp@gmail.com
              </a>
              或私訊 FB 粉絲專頁確認。
            </p>
            <p>由於調閱資料需一定時間，請耐心等候，勿直接撥打聯絡電話。</p>
          </div>
        </InfoCard>

        <InfoCard title="五、繳費須知">
          <div className="space-y-8 leading-8 text-slate-300">
            <p className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 font-semibold text-cyan-100">
              請詳閱須知以免自身權益受損。
            </p>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">報名費用</h3>
              <p>
                一般報名費用為
                <strong className="mx-1 text-cyan-200">7500 元</strong>
                ，申請代訂住宿者共
                <strong className="mx-1 text-cyan-200">9500 元</strong>
                （住宿費用 2000 元），詳情請見錄取信件通知。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">繳費期限</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {paymentDeadlines.map((deadline) => (
                  <div key={deadline.label} className="rounded-2xl bg-white/5 p-5">
                    <p className="font-semibold text-cyan-200">
                      {deadline.label}
                    </p>
                    <p className="mt-2">{deadline.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                ※ 非錄取生請勿匯款，如有此狀況我們將直接退回您的款項，
                並不負擔轉帳手續費等損失。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">匯款資訊</h3>
              <dl className="grid gap-3 rounded-2xl bg-white/5 p-5 sm:grid-cols-[8rem_1fr]">
                <dt className="font-semibold text-cyan-200">戶名</dt>
                <dd>國立臺灣大學化學系學生會</dd>
                <dt className="font-semibold text-cyan-200">分局</dt>
                <dd>郵局 700</dd>
                <dt className="font-semibold text-cyan-200">帳號</dt>
                <dd>0001236 0539539</dd>
              </dl>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                ※ 請注意，戶名不是臺大化學營。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">繳費確認</h3>
              <p>
                繳費完成後，請填寫繳費資訊表單。我們確認收到款項後，
                將在錄取名單上更新繳費記錄（平日更新）。若期限內未填寫表單，
                則視為未繳費，取消其錄取資格。
              </p>
              <p className="mt-4">
                下方的學員錄取報到表單也請於 12/19（二）23:59 前填寫完畢，
                填寫完畢才視為完成報到。請自行注意郵局或銀行營業時間。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {paymentForms.map((form) => (
                  <a
                    key={form.href}
                    href={form.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    {form.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="六、退費規定">
          <p className="mb-5 leading-8 text-slate-300">
            相關規定詳列如下，請詳細閱讀，參與本營隊者視為同意下列事項。
          </p>
          <ol className="space-y-4 leading-8 text-slate-300">
            {refundRules.map((rule, index) => (
              <li key={rule} className="rounded-2xl bg-white/5 px-5 py-4">
                <span className="font-semibold text-cyan-200">
                  {index + 1}.
                </span>{" "}
                {rule}
              </li>
            ))}
          </ol>
        </InfoCard>
      </div>
    </main>
  );
}

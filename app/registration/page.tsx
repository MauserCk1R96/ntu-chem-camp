import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "報名資訊、繳費須知與退款規定",
  description:
    "了解台大化學營報名簡章、線上報名方式、報名費用、繳費期限、清寒生補助計畫與營隊退費相關規定。",
  alternates: {
    canonical: "/registration",
  },
};

const registrationNotes = [
  "由於需在表單中上傳個人照片，請先登入 Google 帳戶再填寫表單。",
  "請務必取得監護人同意再報名本活動。",
  "本活動雖已採線上報名，但仍須列印家長同意書以及防疫與實驗室安全同意書，填妥資料並由監護人簽章，於報到時繳交。",
];

const registrationFormUrl = "https://forms.gle/roTy1K36Jps2N1c27";
const subsidyFormUrl = "https://forms.gle/wd1rfRsHfGZpGNhU6";

const scheduleItems = [
  { date: "9/14", title: "開始報名" },
  { date: "10/31", title: "報名截止" },
  { date: "11/5", title: "公告結果與匯款通知" },
  { date: "11/19", title: "匯款截止" },
  { date: "11/20", title: "通知備取" },
  { date: "11/24", title: "備取匯款截止" },
  { date: "11/28", title: "第二次備取通知" },
  { date: "12/3", title: "報名完全截止" },
  { date: "12/5", title: "繳費完全截止" },
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
    value: "11/19 匯款截止",
  },
  {
    label: "備取生",
    value: "11/24 備取匯款截止；第二次備取請依 11/28 通知與信件說明辦理，最晚至 12/5 繳費完全截止。",
  },
];

const paymentConfirmationSteps = [
  "完成匯款後，請填寫繳費確認表單。",
  "表單中請填寫報名者資料及匯款資訊，例如轉帳帳號末五碼。",
  "工作人員核對完成後，會更新錄取／繳費狀態。",
  "如超過數個工作天仍未更新，請透過網站聯絡方式與我們確認。",
];

const refundRules = [
  "營隊開始 21 日前（含）取消參加者，扣除必要行政費用後，退還報名費九成。",
  "營隊開始前 8 至 20 天取消參加者，退還報名費七成；開始前 7 天內取消參加者，恕無法退費。",
  "營隊開始前，如因重大天災、流行病等不可抗力因素致營隊取消，退還報名費七成，並於原定營隊開始日起十四日內退還。",
  "營隊期間如因重大天災、流行病等不可抗力因素，經主辦單位決定提前結束，將扣除已支出及無法退回之必要費用後，退還剩餘款項。",
  "若營隊第 4 至第 5 天提前結束，因相關活動費用多已支出，僅餐費得視實際情況退還，其餘費用不予退還。",
  "營隊進行期間，如學員因個人因素未完整參與活動而提前離開，恕不退費。",
  "如對退費規定有疑問，請先與主辦單位聯繫。主辦單位保留活動異動及規定解釋權。",
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
    <main className="relative z-10 min-h-screen bg-slate-950/80 px-6 pb-24 pt-32 text-white backdrop-blur-[1px]">
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
            href={registrationFormUrl}
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
        <InfoCard title="一、重要時程">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {scheduleItems.map((item) => (
              <div
                key={`${item.date}-${item.title}`}
                className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5"
              >
                <p className="text-2xl font-bold text-cyan-100">
                  {item.date}
                </p>
                <p className="mt-2 leading-7 text-slate-300">{item.title}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="二、線上報名">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>本活動採線上報名。請於 Google 表單中填妥真實資料並送出，即完成報名。</p>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <h3 className="mb-2 text-xl font-bold text-white">報名簡章</h3>
              <p>
                報名前請務必詳閱報名簡章，並建議先閱讀報名表單題目
                （附於報名簡章後）再開始填寫表單。
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                報名簡章連結將於正式公告後更新，請以本網站與官方社群公告為準。
              </p>
            </div>
            <p>
              報名時間為 9/14 起至 10/31 截止。備取與後續遞補流程依公告及
              信件通知辦理，12/3 為報名完全截止日。
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

        <InfoCard title="三、報名費用說明">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>
              報名費用為
              <strong className="mx-1 text-cyan-200">7500 元整</strong>
              ，此為不包含住宿的費用。
            </p>
            <p>
              2027 化學營為日歸營，將不提供住宿，營隊期間只有白天時會一同
              參與化學營的活動。居住於外縣市或基於其他原因而有住宿需求之學員，
              我們會於報名時另行調查協助辦理住宿；代訂住宿費用與合計金額
              以錄取信件通知為準。若有任何疑問，可以私訊粉專或寄 e-mail 詢問。
            </p>
          </div>
        </InfoCard>

        <InfoCard title="四、清寒生補助計畫">
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
            <a
              href={subsidyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              前往清寒補助申請表單
            </a>
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

        <InfoCard title="五、報名確認">
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

        <InfoCard title="六、繳費須知">
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
                <strong className="mx-1 text-cyan-200">10300 元</strong>
                ，詳情請見錄取信件通知。
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
              <div className="mt-5 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-5 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                <p className="text-lg font-bold text-cyan-100">
                  繳費截止：12/5
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  請於截止日前完成匯款及繳費確認表單。
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                ※ 非錄取生請勿匯款，如有此狀況我們將直接退回您的款項，
                並不負擔轉帳手續費等損失。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">匯款資訊</h3>
              <dl className="grid gap-x-5 gap-y-3 rounded-2xl bg-white/5 p-5 sm:grid-cols-[8rem_1fr]">
                <dt className="font-semibold text-cyan-200">戶名</dt>
                <dd>國立臺灣大學化學系學生會</dd>
                <dt className="font-semibold text-cyan-200">銀行／郵局</dt>
                <dd>中華郵政</dd>
                <dt className="font-semibold text-cyan-200">銀行代碼</dt>
                <dd>700</dd>
                <dt className="font-semibold text-cyan-200">帳號</dt>
                <dd>請依錄取信件通知為準</dd>
              </dl>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                ※ 轉帳時請確認收款戶名為「國立臺灣大學化學系學生會」。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">繳費確認</h3>
              <p className="mb-4">
                完成轉帳後，請填寫繳費資訊表單，方便工作人員核對款項。
              </p>
              <ol className="grid gap-3">
                {paymentConfirmationSteps.map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <span className="font-semibold text-cyan-200">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="七、退費規定">
          <p className="mb-5 leading-8 text-slate-300">
            相關規定詳列如下，請詳細閱讀，參與本營隊者視為同意下列事項。
          </p>
          <ol className="space-y-3 leading-8 text-slate-300">
            {refundRules.map((rule, index) => (
              <li
                key={rule}
                className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl bg-white/5 px-4 py-3"
              >
                <span className="font-semibold text-cyan-200">
                  {index + 1}.
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </InfoCard>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "報名資訊、繳費須知與退款規定",
  description:
    "了解台大化學營報名簡章、線上報名方式、報名費用、繳費期限、清寒生補助計畫與營隊退費相關規定。",
  alternates: {
    canonical: "/registration",
  },
};

const registrationFormUrl = "https://forms.gle/z9fVU8esm8tWjH1K9";
const subsidyFormUrl = "https://forms.gle/dkSYqkjogGVWghE77";

const registrationPeriod = {
  start: "9/14",
  end: "10/31",
};

const scheduleItems = [
  { date: "9/14", title: "開始報名", type: "APPLICATION" },
  { date: "10/31", title: "報名截止", type: "APPLICATION" },
  {
    date: "11/5",
    title: "公告錄取結果",
    detail: "並寄送正取生繳費通知",
    type: "RESULT",
  },
  { date: "11/19", title: "正取生繳費截止", type: "PAYMENT" },
  { date: "11/20", title: "第一梯次備取通知", type: "WAITLIST" },
  { date: "11/24", title: "第一梯次備取繳費截止", type: "PAYMENT" },
  { date: "11/28", title: "第二梯次備取通知", type: "WAITLIST" },
  { date: "12/5", title: "最終繳費截止", type: "PAYMENT" },
];

const requiredPaperDocuments = [
  "家長／監護人同意書",
  "實驗室安全同意書",
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

const feeOptions = [
  {
    label: "一般報名",
    amount: "NT$7,500",
  },
  {
    label: "含代訂住宿",
    amount: "NT$10,300",
  },
];

const paymentDeadlines = [
  {
    label: "正取生",
    date: "11/19",
    description: "繳費截止",
  },
  {
    label: "第一梯次備取",
    date: "11/24",
    description: "繳費截止",
  },
  {
    label: "第二梯次備取",
    date: "11/28",
    description: "錄取通知",
  },
];

const paymentConfirmationSteps = [
  "完成匯款",
  "填寫繳費確認表單",
  "工作人員核對款項",
  "網站錄取名單更新繳費狀態",
];

const paymentInfo = {
  accountName: "國立臺灣大學化學系學生會",
  institution: "中華郵政",
  bankCode: "700",
  accountNumber: "請依錄取信件通知為準",
};

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
                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-cyan-300">
                  {item.type}
                </p>
                <p className="text-2xl font-bold text-cyan-100">
                  {item.date}
                </p>
                <p className="mt-2 font-semibold leading-7 text-slate-200">
                  {item.title}
                </p>
                {"detail" in item ? (
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="二、線上報名">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>本活動採線上報名，請於報名期間填寫並送出 Google 表單。</p>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <h3 className="mb-2 text-xl font-bold text-white">報名簡章</h3>
              <p>
                填寫表單前，請先詳閱報名簡章及表單題目，確認所需資料後
                再進行報名。
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                報名簡章連結將於正式公告後更新，請以本網站與官方社群公告為準。
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
                報名期間
              </p>
              <p className="mt-2 text-2xl font-bold text-cyan-100">
                {registrationPeriod.start}－{registrationPeriod.end}
              </p>
              <p className="mt-3 leading-8 text-slate-300">
                錄取結果、備取遞補與繳費相關通知，請依網站公告及 Email 通知辦理。
              </p>
            </div>
            <ul className="space-y-3">
              <li className="rounded-2xl bg-white/5 px-5 py-4">
                ※ 表單需上傳個人照片，填寫前請先登入 Google 帳戶。
              </li>
              <li className="rounded-2xl bg-white/5 px-5 py-4">
                ※ 請務必取得監護人同意再報名本活動。
              </li>
            </ul>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="mb-3 font-semibold text-cyan-100">
                報到時須繳交以下紙本文件：
              </p>
              <ul className="list-inside list-disc space-y-2">
                {requiredPaperDocuments.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
              <p className="mt-4 leading-8 text-slate-300">
                請事先列印、填寫完整並完成監護人簽章。文件下載連結將於正式公告後更新。
              </p>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="三、報名費用說明">
          <div className="space-y-5 leading-8 text-slate-300">
            <p>
              一般報名費用為 7500 元；申請代訂住宿者共 10300 元。
              實際繳費方式與相關注意事項，以錄取通知信為準。
            </p>
            <p>
              2027 化學營為日歸營，將不提供住宿，營隊期間只有白天時會一同
              參與化學營的活動。居住於外縣市或基於其他原因而有住宿需求之學員，
              我們會於報名時另行調查協助辦理住宿。若有任何疑問，可以私訊粉專
              或寄 e-mail 詢問。
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
              錄取後請依通知期限完成繳費，並確認以下繳費資訊。
            </p>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">報名費用</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {feeOptions.map((fee) => (
                  <div key={fee.label} className="rounded-2xl bg-white/5 p-5">
                    <p className="font-semibold text-cyan-200">{fee.label}</p>
                    <p className="mt-2 text-3xl font-bold text-cyan-100">
                      {fee.amount}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                實際繳費方式與相關注意事項，以錄取通知信為準。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">繳費期限</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {paymentDeadlines.map((deadline) => (
                  <div key={deadline.label} className="rounded-2xl bg-white/5 p-5">
                    <p className="font-semibold text-cyan-200">
                      {deadline.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-cyan-100">
                      {deadline.date}
                    </p>
                    <p className="mt-2">{deadline.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-5 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
                  最終繳費截止
                </p>
                <p className="mt-2 text-3xl font-bold text-cyan-100">
                  12/5
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  請依錄取通知中的期限完成繳費與確認程序。
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                ※ 請於收到錄取通知後再進行繳費。未獲錄取者請勿自行匯款；
                若因此產生轉帳手續費等費用，將由匯款人自行負擔。
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">匯款資訊</h3>
              <dl className="grid gap-x-5 gap-y-3 rounded-2xl bg-white/5 p-5 sm:grid-cols-[8rem_1fr]">
                <dt className="font-semibold text-cyan-200">戶名</dt>
                <dd>{paymentInfo.accountName}</dd>
                <dt className="font-semibold text-cyan-200">金融機構</dt>
                <dd>{paymentInfo.institution}</dd>
                <dt className="font-semibold text-cyan-200">銀行代碼</dt>
                <dd>{paymentInfo.bankCode}</dd>
                <dt className="font-semibold text-cyan-200">帳號</dt>
                <dd>{paymentInfo.accountNumber}</dd>
              </dl>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {`※ 匯款前請確認收款戶名為「${paymentInfo.accountName}」。`}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold text-white">繳費確認</h3>
              <p className="mb-4">
                完成轉帳後，請填寫繳費確認表單，以利工作人員核對款項。
              </p>
              <ol className="grid gap-3 sm:grid-cols-2">
                {paymentConfirmationSteps.map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl bg-white/5 px-4 py-4"
                  >
                    <span className="font-semibold text-white">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                款項核對完成後，將更新錄取名單中的繳費狀態。
              </p>
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
                <span className="font-semibold text-white">
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "部署教學",
  description:
    "台大化學營網站的 Vercel Preview、Production 與本機開發部署流程整理。",
  alternates: {
    canonical: "/tutorial",
  },
};

const environmentCards = [
  {
    title: "Local Development",
    subtitle: "本機開發",
    description:
      "在自己的電腦上修改與測試網站。若專案有環境變數，先用 Vercel CLI 把變數拉到 .env.local，再執行開發伺服器。",
    commands: [
      "npm.cmd install",
      "npx vercel link",
      "npx vercel env pull",
      "npm.cmd run dev",
    ],
  },
  {
    title: "Preview",
    subtitle: "上線前預覽",
    description:
      "給團隊、老師或同學測試新版本，不會影響正式網站。推送到非 production 分支、開 Pull Request，或執行不帶 --prod 的 vercel 指令，都會建立 Preview Deployment。",
    commands: [
      "git checkout -b preview/homepage-copy",
      "git push origin preview/homepage-copy",
      "npx vercel",
    ],
  },
  {
    title: "Production",
    subtitle: "正式網站",
    description:
      "使用者真正會看到的版本。通常 main 分支是 production branch；把通過檢查的內容合併到 main 後，Vercel 會更新正式網域。",
    commands: [
      "git checkout main",
      "git merge preview/homepage-copy",
      "git push origin main",
      "npx vercel --prod",
    ],
  },
];

const previewChecklist = [
  "從 main 以外的分支開發新內容，避免直接改正式版本。",
  "開 Pull Request 後，到 GitHub 或 Vercel Dashboard 找 Preview URL。",
  "用 Branch URL 看該分支最新版本，用 Commit URL 保留特定 commit 的精準版本。",
  "確認文字、連結、表單與手機版版面都正常後，再合併回 main。",
  "正式部署後，再檢查 production domain 是否顯示最新內容。",
];

export default function TutorialPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          DEPLOYMENT GUIDE
        </p>

        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Vercel Preview 部署教學
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            這份教學整理本專案在 Vercel 上常用的三種環境：本機開發、
            Preview 預覽，以及 Production 正式網站。開發新內容時先用 Preview
            給大家檢查，確認沒問題後再合併到正式環境。
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {environmentCards.map((environment) => (
            <article
              key={environment.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="mb-2 text-sm font-semibold text-cyan-300">
                {environment.title}
              </p>
              <h2 className="mb-4 text-2xl font-bold">
                {environment.subtitle}
              </h2>
              <p className="mb-6 leading-7 text-slate-300">
                {environment.description}
              </p>
              <div className="space-y-2">
                {environment.commands.map((command) => (
                  <code
                    key={command}
                    className="block rounded-lg bg-slate-900 px-3 py-2 text-sm text-slate-100"
                  >
                    {command}
                  </code>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
              PREVIEW WORKFLOW
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              每次改版先走 Preview
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Preview Deployment 的價值是讓網站能在正式公開前被檢查。它會產生
              自動網址，可以拿來測試新版首頁、活動資訊、FAQ、報名連結或手機版
              排版。
            </p>
          </div>

          <ol className="space-y-4">
            {previewChecklist.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <span className="leading-7 text-slate-200">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-8">
        <h2 className="mb-4 text-2xl font-bold text-cyan-200">
          Windows 使用提醒
        </h2>
        <p className="leading-8 text-slate-200">
          這台電腦的 PowerShell 會擋住 npm.ps1，所以指令請優先使用
          <code className="mx-2 rounded bg-slate-900 px-2 py-1 text-sm">
            npm.cmd
          </code>
          。若安裝套件時遇到憑證錯誤，可以先確認 Windows 與 Node.js
          的憑證設定；短期測試時才使用單次
          <code className="mx-2 rounded bg-slate-900 px-2 py-1 text-sm">
            --strict-ssl=false
          </code>
          參數。
        </p>
      </section>
    </main>
  );
}

export const homeHero = {
  eyebrow: "NTU CHEMISTRY CAMP",
  campName: "台大化學營",
  // TODO: 補上本屆正式營隊名稱與主題 slogan；目前專案內尚未找到已確認文字。
  themeSlogan: null as string | null,
  description:
    "這個冬天，讓化學不只存在課本裡。走進台大化學系，在霓虹與分子交錯的空間中，探索分子世界的無限可能。",
  primaryCta: {
    label: "立即報名",
    href: "#register",
  },
  secondaryCta: {
    label: "關於營隊",
    href: "/about",
  },
  keyVisual: {
    src: "/key-visual/ntu-chem-camp-key-visual.webp",
    alt: "台大化學營本屆 Cyberpunk 主視覺",
    caption: "本屆主視覺",
  },
  atmosphereImage: {
    src: "/gallery/activity-location/cyber-molecule.jpg",
    alt: "積學館內霓虹分子裝置，呈現台大化學營 Cyberpunk 主題氛圍",
    caption: "積學館霓虹分子",
  },
};

export const homeHighlights = [
  {
    title: "實驗課程",
    description:
      "從示範實驗、大實驗到紀念品實驗，讓學員在觀察、操作與討論中體驗化學實驗的核心魅力。",
  },
  {
    title: "教授講座",
    description:
      "透過化學系師長的分享，從課堂之外認識大學化學的學習方式、研究想像與未來可能。",
  },
  {
    title: "學長姐交流",
    description:
      "和台大化學系學生聊課程、實驗室、社團與校園生活，提前想像自己的大學探索路徑。",
  },
];

export const campPackage = {
  title: "營包介紹",
  
  statusLabel: "L'Hiver Fantôme",
  description:
    "西元2728年，巨城的霓虹依然閃爍，卻因能源逐漸耗盡而隱隱失序。當中央系統發出調查指令，你將成為見習特工，" +
    "在化學與代碼交織的世界裡，在線索與謎團糾纏的巨網之間，尋找城市尚未熄滅的真相⋯⋯",
};

export const registrationSummary = {
  date: "2027 年 1 月 25 日（一）至 1 月 29 日（五）",
  location: "國立臺灣大學化學系",
  audience: "全國高中職學生",
  fee: "NT$ 7500",
  formUrl: "https://forms.gle/z9fVU8esm8tWjH1K9",
};

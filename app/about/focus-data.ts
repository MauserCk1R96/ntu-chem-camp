export type FocusArea = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sections: {
    heading: string;
    body: string;
  }[];
  takeaways: string[];
};

export const focusAreas: FocusArea[] = [
  {
    slug: "chemistry-lab",
    title: "化學實驗課程",
    subtitle: "親手操作、觀察反應，讓課本中的化學變成看得見的現象。",
    description:
      "化學實驗課程是台大化學營的核心活動之一。學員會在安全規範與工作人員協助下進入實驗情境，從操作步驟、現象觀察到結果討論，完整體驗化學實驗的思考流程。",
    sections: [
      {
        heading: "從觀察開始理解化學",
        body: "實驗課程不只是照著步驟完成操作，而是引導學員留意顏色、沉澱、氣體、溫度與材料性質等變化，練習把現象和背後原理連結起來。",
      },
      {
        heading: "在安全環境中動手實作",
        body: "活動會依照高中生適合的程度設計，並由工作人員協助說明器材使用、實驗安全與注意事項，讓學員能安心接觸大學實驗室中的學習方式。",
      },
    ],
    takeaways: ["實驗操作經驗", "化學現象觀察", "科學紀錄與討論"],
  },
  {
    slug: "science-discussion",
    title: "專題與書報討論",
    subtitle: "閱讀、整理、表達，練習用自己的方式理解科學議題。",
    description:
      "專題與書報討論讓學員接觸化學相關主題，從資料閱讀到小隊討論，再到整理重點與表達想法，體驗大學中常見的學術討論方式。",
    sections: [
      {
        heading: "把知識整理成自己的語言",
        body: "學員會練習從文章或題材中抓出重點，和隊友討論理解方式，再用清楚的說法分享自己的觀點。",
      },
      {
        heading: "看見化學與生活的連結",
        body: "討論主題會盡量連結材料、能源、環境、生命科學與日常生活，讓學員發現化學不只存在於課本和考試中。",
      },
    ],
    takeaways: ["科學閱讀能力", "重點整理", "討論與表達"],
  },
  {
    slug: "teamwork",
    title: "小隊合作活動",
    subtitle: "在任務、闖關與解謎中，和隊友一起完成共同目標。",
    description:
      "小隊合作活動包含大地遊戲、密室夜解謎、RPG、籌碼競賽與晚會等設計，讓來自不同學校的學員在互動中建立默契，練習分工、溝通與問題解決。",
    sections: [
      {
        heading: "從陌生到熟悉",
        body: "營隊初期會透過破冰與闖關任務，讓學員快速認識彼此，也逐漸熟悉小隊合作的節奏。",
      },
      {
        heading: "在挑戰中練習溝通",
        body: "不同任務需要不同策略：有人負責觀察線索，有人整理資訊，有人提出解法。學員會在過程中體驗團隊合作如何影響結果。",
      },
    ],
    takeaways: ["團隊默契", "分工合作", "問題解決"],
  },
  {
    slug: "senior-sharing",
    title: "學長姐交流",
    subtitle: "聽見大學生活、科系學習與探索方向的真實經驗。",
    description:
      "學長姐交流讓高中生有機會和台大化學系學生聊課程、社團、研究、準備方式與大學生活，從真實經驗中想像自己未來的學習路徑。",
    sections: [
      {
        heading: "更靠近化學系的日常",
        body: "透過學長姐分享，學員可以了解大學課程、實驗室、專題研究與系上生活的樣貌，補足網路資料看不到的細節。",
      },
      {
        heading: "探索自己的下一步",
        body: "交流不只是問升學問題，也能幫助學員思考自己是否喜歡化學、自然科學或研究型學習方式。",
      },
    ],
    takeaways: ["大學生活想像", "科系認識", "學習方向探索"],
  },
];

export function getFocusArea(slug: string) {
  return focusAreas.find((area) => area.slug === slug);
}

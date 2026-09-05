export type ProgramItem = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: string;
  category: "學術／實作" | "團隊／任務" | "營隊回憶";
  featured?: boolean;
};

export const programItems: ProgramItem[] = [
  {
    title: "大地遊戲",
    tagline: "在闖關裡快速熟悉隊友。",
    description:
      "營隊前期會以小隊形式進行闖關與合作任務，讓大家在活動中熟悉彼此，也先建立之後一起完成任務需要的默契。",
    tags: ["團隊合作", "破冰活動", "戶外闖關"],
    icon: "FIELD",
    category: "團隊／任務",
  },
  {
    title: "書報討論",
    tagline: "一起讀科學文章，也練習把想法說清楚。",
    description:
      "由工作人員帶領閱讀指定主題的科普或學術文章，整理重點、提出問題，再透過小組討論交換彼此的想法。",
    tags: ["科學閱讀", "小組討論", "表達訓練"],
    icon: "READ",
    category: "學術／實作",
  },
  {
    title: "示範實驗",
    tagline: "看看課堂上不一定有機會看到的化學現象。",
    description:
      "由工作人員進行示範操作，讓學員在安全距離觀察反應過程與現象，並搭配說明了解背後的化學原理。",
    tags: ["實驗觀察", "示範操作", "化學現象"],
    icon: "DEMO",
    category: "學術／實作",
  },
  {
    title: "密室夜解謎",
    tagline: "蒐集線索、一起推理，把關卡解開。",
    description:
      "夜間活動會以劇情與關卡串連任務，小隊需要搜尋線索、討論可能的解法，並共同完成指定挑戰。",
    tags: ["推理解謎", "劇情任務", "團隊合作"],
    icon: "LOCK",
    category: "團隊／任務",
  },
  {
    title: "RPG",
    tagline: "跟著角色設定進入故事，完成不同任務。",
    description:
      "學員會依照角色設定與任務線索，在活動過程中進行互動、做出選擇，並與隊友合作完成各階段任務。",
    tags: ["角色扮演", "劇情互動", "任務挑戰"],
    icon: "RPG",
    category: "團隊／任務",
  },
  {
    title: "大實驗",
    tagline: "真正進入實驗室，自己動手完成操作。",
    description:
      "學員會在工作人員協助下進行實驗，從操作、觀察現象到整理結果與討論，實際接觸大學化學實驗的流程。",
    tags: ["實驗操作", "科學探究", "小隊合作"],
    icon: "LAB",
    category: "學術／實作",
    featured: true,
  },
  {
    title: "籌碼競賽",
    tagline: "有限的籌碼，要怎麼用就看你們的策略。",
    description:
      "各小隊會透過不同任務取得或使用籌碼，並根據活動規則安排策略，在競賽中考驗團隊討論與臨場判斷。",
    tags: ["策略競賽", "團隊決策", "小隊對抗"],
    icon: "CHIP",
    category: "團隊／任務",
  },
  {
    title: "紀念品實驗",
    tagline: "動手完成一件可以帶回家的作品。",
    description:
      "透過簡單的實驗或製作活動，完成屬於自己的營隊紀念品，將實作成果帶回家。",
    tags: ["動手製作", "營隊紀念", "化學作品"],
    icon: "MAKE",
    category: "學術／實作",
  },
  {
    title: "晚會",
    tagline: "一起表演、互動，也替營隊做個收尾。",
    description:
      "晚會包含表演、互動與小隊活動，讓各隊一起完成營期間最後的大型團體活動。",
    tags: ["表演互動", "團體活動", "晚會"],
    icon: "SHOW",
    category: "營隊回憶",
  },
  {
    title: "大合照",
    tagline: "把所有學員與工作人員一起留在照片裡。",
    description:
      "營隊結束前進行全體合照，記錄大家一起完成營期活動的最後一個畫面。",
    tags: ["全體合照", "營隊紀念", "最後一天"],
    icon: "ALL",
    category: "營隊回憶",
  },
];

export const programTakeaways = [
  {
    title: "親手完成化學實驗",
    description:
      "從觀察示範到進入實驗室操作，實際接觸大學化學實驗的流程。",
  },
  {
    title: "練習閱讀與表達科學",
    description:
      "透過文章閱讀與小組討論，整理資訊、提出問題，也練習清楚表達自己的想法。",
  },
  {
    title: "和隊友一起解決問題",
    description:
      "從闖關、競賽到解謎活動，在任務中練習討論、分工與共同決策。",
  },
  {
    title: "認識大學化學的學習方式",
    description:
      "透過實驗、討論與營隊生活，了解化學系學生會接觸到的學習環境與活動形式。",
  },
];

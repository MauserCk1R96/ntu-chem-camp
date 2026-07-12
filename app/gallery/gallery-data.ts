export type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  folder: string;
  coverImage: string | null;
  images: string[];
};

/**
 * 新增照片方式：
 * 1. 把圖片放到 public/gallery/<folder>/，例如：
 *    public/gallery/main-experiment/photo-1.jpg
 * 2. 在對應分類的 images 加上檔名：
 *    images: ["photo-1.jpg", "photo-2.jpg"]
 * 3. 若想指定分類封面，把 coverImage 設成其中一張檔名；若沒有照片可維持 null。
 */
export const galleryCategories: GalleryCategory[] = [
  {
    id: "field-game",
    title: "大地遊戲",
    description:
      "透過戶外闖關與小隊合作，讓學員快速熟悉彼此，感受營隊的團隊氛圍。",
    folder: "field-game",
    coverImage: null,
    images: [],
  },
  {
    id: "journal-discussion",
    title: "書報討論",
    description:
      "小隊員閱讀、整理並討論化學相關主題，練習用自己的方式理解與表達科學內容。",
    folder: "journal-discussion",
    coverImage: null,
    images: [],
  },
  {
    id: "demo-experiment",
    title: "示範實驗",
    description:
      "由專業的學長姐進行化學實驗示範，讓小隊員近距離觀察實驗操作、現象與背後原理。",
    folder: "demo-experiment",
    coverImage: null,
    images: [],
  },
  {
    id: "escape-night",
    title: "密室夜解謎",
    description:
      "結合劇情、線索與團隊推理的夜間解謎活動，讓學員在沉浸式任務中合作破關。",
    folder: "escape-night",
    coverImage: null,
    images: [],
  },
  {
    id: "rpg",
    title: "RPG",
    description:
      "以角色扮演與劇情任務串連營隊活動，讓小隊員在遊戲中完成挑戰、累積團隊默契。",
    folder: "rpg",
    coverImage: null,
    images: [],
  },
  {
    id: "main-experiment",
    title: "大實驗",
    description:
      "小隊員親自參與的大型化學實驗活動，從操作、觀察到討論，完整體驗實驗課程的核心魅力。",
    folder: "main-experiment",
    coverImage: null,
    images: [],
  },
  {
    id: "token-competition",
    title: "籌碼競賽",
    description:
      "結合策略、知識與團隊合作的競賽活動，小隊需要運用判斷力與默契爭取最佳成果。",
    folder: "token-competition",
    coverImage: null,
    images: [],
  },
  {
    id: "souvenir-experiment",
    title: "紀念品實驗",
    description:
      "讓學員親手完成具有紀念價值的小型化學實驗作品，把營隊回憶帶回家。",
    folder: "souvenir-experiment",
    coverImage: null,
    images: [],
  },
  {
    id: "party-night",
    title: "晚會",
    description:
      "營隊中最熱鬧的夜晚，包含表演、互動與小隊活動，凝聚大家幾天累積下來的情感與回憶。",
    folder: "party-night",
    coverImage: null,
    images: [],
  },
  {
    id: "group-photo",
    title: "大合照",
    description:
      "記錄所有學員、隊輔與工作人員共同完成營隊後的珍貴時刻。",
    folder: "group-photo",
    coverImage: null,
    images: [],
  },
];

export function getGalleryImagePath(
  category: Pick<GalleryCategory, "folder">,
  imageName: string,
) {
  return `/gallery/${category.folder}/${imageName}`;
}

export function getGalleryImageAlt(category: GalleryCategory, index: number) {
  if (category.id === "group-photo") {
    return "台大化學營大合照";
  }

  if (category.id === "main-experiment") {
    return `台大化學營大實驗學員操作照片 ${index + 1}`;
  }

  return `台大化學營${category.title}活動照片 ${index + 1}`;
}

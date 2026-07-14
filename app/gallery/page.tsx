import type { Metadata } from "next";
import GalleryCategoryCard from "@/component/gallery/GalleryCategoryCard";
import GallerySection from "@/component/gallery/GallerySection";
import { galleryCategories } from "@/app/gallery/gallery-data";

export const metadata: Metadata = {
  title: "活動照片｜台大化學營",
  description:
    "瀏覽台大化學營的大地遊戲、書報討論、示範實驗、密室夜解謎、RPG、大實驗、籌碼競賽、紀念品實驗、晚會與大合照，了解營隊的活動內容與現場氛圍。",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          GALLERY
        </p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">活動照片</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          這裡依照活動分類整理台大化學營的精彩瞬間，讓高中生、家長與老師
          可以從活動照片中看見高中生化學營隊的化學實驗、營隊活動、
          團隊合作與大合照氛圍。
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-white">活動分類</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {galleryCategories.map((category) => (
            <GalleryCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <div className="mx-auto mt-16 space-y-10 max-w-6xl">
        {galleryCategories.map((category) => (
          <GallerySection key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}

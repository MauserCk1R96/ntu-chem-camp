import type { Metadata } from "next";
import Link from "next/link";
import GalleryCategoryCard from "@/component/gallery/GalleryCategoryCard";
import GalleryNav from "@/component/gallery/GalleryNav";
import GallerySection from "@/component/gallery/GallerySection";
import { galleryCategories } from "@/app/gallery/gallery-data";

export const metadata: Metadata = {
  title: "活動照片｜台大化學營",
  description:
    "瀏覽台大化學營的大地遊戲、書報討論、示範實驗、密室夜解謎、RPG、大實驗、籌碼競賽、紀念品實驗、晚會與大合照，了解高中生化學營隊的活動內容與現場氛圍。",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  const totalPhotos = galleryCategories.reduce(
    (count, category) => count + category.images.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))] p-6 shadow-[0_0_45px_rgba(34,211,238,0.1)] md:p-10">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
            GALLERY
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            活動照片
          </h1>
          <p className="max-w-4xl text-2xl font-semibold leading-10 text-cyan-100">
            從實驗室到晚會，從小隊任務到大合照，一起回顧台大化學營的每個精彩瞬間。
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            依照活動分類瀏覽照片，看看學員如何在化學實驗、團隊挑戰、
            劇情任務與晚會活動中，完成屬於自己的營隊旅程。這裡整理
            高中生化學營隊的營隊活動、活動照片與大合照，讓你更靠近
            現場氛圍。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-3xl font-bold text-cyan-200">
                {galleryCategories.length}
              </p>
              <p className="mt-1 text-sm text-slate-300">活動分類</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-3xl font-bold text-cyan-200">
                {totalPhotos}
              </p>
              <p className="mt-1 text-sm text-slate-300">張活動照片</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-3xl font-bold text-cyan-200">5</p>
              <p className="mt-1 text-sm text-slate-300">天營隊旅程</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 -mx-6 mt-8 border-y border-white/10 bg-slate-950/88 px-6 py-4 backdrop-blur md:mx-auto md:max-w-6xl md:rounded-3xl md:border">
        <GalleryNav categories={galleryCategories} />
      </section>

      <section id="gallery-categories" className="mx-auto mt-12 max-w-6xl scroll-mt-28">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
              CAMP ROUTE
            </p>
            <h2 className="text-3xl font-bold text-white">
              依活動探索營隊體驗
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-400">
            從第一天的破冰任務，到實驗、解謎、競賽、晚會與大合照，
            每個分類都是營隊旅程的一段切面。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="mx-auto mt-16 max-w-6xl rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_38%),rgba(34,211,238,0.08)] p-6 md:p-10">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          想成為下一張照片裡的人嗎？
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-200">
          台大化學營不只是一場活動，而是一段由實驗、任務與夥伴共同組成的夏日記憶。
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/registration"
            className="rounded-full bg-cyan-300 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            查看報名資訊
          </Link>
          <Link
            href="/program"
            className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white transition hover:border-cyan-300/70 hover:text-cyan-200"
          >
            了解活動內容
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { GalleryCategory } from "@/app/gallery/gallery-data";
import GalleryGrid from "@/component/gallery/GalleryGrid";

type GallerySectionProps = {
  category: GalleryCategory;
};

export default function GallerySection({ category }: GallerySectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_35px_rgba(15,23,42,0.35)] md:p-8"
    >
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
            {category.folder.toUpperCase()}
          </p>
          <h2 className="text-3xl font-bold text-white">{category.title}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            {category.description}
          </p>
        </div>
        <span className="w-fit rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">
          {category.images.length} 張照片
        </span>
      </div>

      <GalleryGrid category={category} />
    </section>
  );
}

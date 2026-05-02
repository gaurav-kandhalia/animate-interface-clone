type Props = {
  images: string[];
  size?: "sm" | "md" | "lg";
};

export function Marquee({ images, size = "md" }: Props) {
  const sizeClass =
    size === "sm"
      ? "h-20 w-28"
      : size === "lg"
      ? "h-44 w-64"
      : "h-32 w-52";

  return (
    <div className="relative py-10 overflow-hidden ">

      {/* 🔥 edge fade using theme */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* 🔥 static row */}
      <div className="flex justify-center gap-10 flex-wrap md:flex-nowrap max-w-7xl mx-auto ">

        {images.map((src, i) => (
          <div
            key={i}
            className={`${sizeClass} flex-shrink-0 border
              bg-card  border-border 
              flex items-center justify-center
              transition duration-300 
              hover:border-foreground/20 hover:shadow-lg`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="max-h-[45%] object-contain opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}

      </div>
    </div>
  );
}
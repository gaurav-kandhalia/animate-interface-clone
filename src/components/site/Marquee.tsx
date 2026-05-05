type Props = {
  images: string[];
  size?: "sm" | "md" | "lg";
};

export function Marquee({ images, size = "md" }: Props) {
  const sizeClass =
    size === "sm"
      ? "h-28 w-40"
      : size === "lg"
      ? "h-52 w-80"
      : "h-44 w-72";

  const items = [...images, ...images];

  return (
    <div className="relative py-10 overflow-hidden">

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* scrolling track */}
      <div className="flex animate-marquee w-max gap-6">
        {items.map((src, i) => (
          <div
            key={i}
            className={`${sizeClass} flex-shrink-0   flex items-center justify-center transition duration-300 hover:border-white/20`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="max-h-[62%] max-w-[60%] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

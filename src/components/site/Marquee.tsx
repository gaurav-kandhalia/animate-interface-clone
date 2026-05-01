type Props = {
  images: string[];
  speed?: "normal" | "slow";
  size?: "sm" | "md" | "lg";
};

export function Marquee({ images, speed = "normal", size = "md" }: Props) {
  const sizeClass =
    size === "sm"
      ? "h-20 w-28"
      : size === "lg"
        ? "h-44 w-64"
        : "h-32 w-48";
  const list = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 w-max ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {list.map((src, i) => (
          <div
            key={i}
            className={`${sizeClass} flex-shrink-0 overflow-hidden rounded-xl bg-surface`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

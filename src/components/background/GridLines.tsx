export default function GridLines() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none opacity-40">
      
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[2px] h-full bg-[var(--color-grid-line)]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="h-[2px] w-full bg-[var(--color-grid-line)]" />
      </div>

      <div className="absolute inset-0 flex justify-between px-[10%]">
        <div className="w-[2px] h-full bg-[var(--color-grid-line)]" />
        <div className="w-[2px] h-full bg-[var(--color-grid-line)]" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between py-[10%]">
        <div className="h-[2px] w-full bg-[var(--color-grid-line)]" />
        <div className="h-[2px] w-full bg-[var(--color-grid-line)]" />
      </div>

    </div>
  );
}
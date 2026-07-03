export default function ImagePlaceholder({
  label,
  aspect = "1/1",
  radius = 16,
  shape = "rect",
  className = "",
}: {
  label: string;
  aspect?: string;
  radius?: number;
  shape?: "rect" | "circle";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center border border-dashed border-border bg-card px-4 text-xs text-text-faint ${className}`}
      style={{
        aspectRatio: shape === "circle" ? "1/1" : aspect,
        borderRadius: shape === "circle" ? "9999px" : radius,
        background: "#101a2e",
      }}
    >
      {label}
    </div>
  );
}

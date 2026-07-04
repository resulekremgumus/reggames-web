const TEXT =
  "YETİSH ✦ ENDLESS RUNNER ✦ REGGAMES STUDIO ✦ LOW-POLY ✦ COIN TOPLA ✦ MOBILE FIRST ✦ ";

export default function Ticker() {
  return (
    <div className="overflow-hidden py-3.5" style={{ background: "#F6C344", borderTop: "2px solid #09111F", borderBottom: "2px solid #09111F" }}>
      <div className="rg-ticker flex w-max font-heading font-extrabold text-[15px] tracking-[0.04em] whitespace-nowrap" style={{ color: "#231a05" }}>
        <span className="pr-9">{TEXT.repeat(2)}</span>
        <span className="pr-9" aria-hidden="true">
          {TEXT.repeat(2)}
        </span>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "82vh" }}>
      <span
        className="rg-float rg-spin3d block w-11 h-11 rounded-full mb-6"
        style={{
          background: "radial-gradient(circle at 35% 30%, #ffe08a, #F6C344 55%, #c98f14)",
          boxShadow: "0 0 26px rgba(246,195,68,.5)",
          animationDuration: "4s, 6s",
        }}
      />
      <h1 className="font-heading font-black text-[clamp(70px,16vw,140px)] leading-none">
        4<span className="text-primary">0</span>4
      </h1>
      <h2 className="font-heading font-bold text-2xl md:text-3xl mt-4 mb-3">Bu sayfa bir otobüse yetişemedi</h2>
      <p className="text-text-body max-w-[440px] mb-8">
        Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Ana sayfaya dönüp koşmaya devam edebilirsin.
      </p>
      <Link href="/" className="rg-btn-primary px-6 py-4 bg-primary text-cta-on-primary rounded-[13px] font-body font-bold text-base no-underline">
        ← Ana sayfaya dön
      </Link>
    </section>
  );
}

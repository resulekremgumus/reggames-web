import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel'in görsel optimizasyon kotası (Hobby) dolunca /_next/image 402 döndürüyor.
  // Görseller public/ altında zaten WebP ve uygun boyutta hazırlanıyor; doğrudan sunuluyor.
  images: { unoptimized: true },
};

export default nextConfig;

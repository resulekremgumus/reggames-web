import { Baloo_2 } from "next/font/google";

// Kara Kutu'nun oyun içi yazı tipi. Kara Kutu sayfasında ve kartında başlıklarda kullanılır.
export const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

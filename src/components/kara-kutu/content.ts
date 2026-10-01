import { Locale } from "@/lib/i18n";

// Kara Kutu sayfasının metinleri. Kaynak: ~/Desktop/Kara Kutu/store/appstore-tr.txt ve appstore-en.txt

export const kk = {
  tr: {
    hero: {
      eyebrow: "Tangram bulmaca",
      taglineStart: "Kara kutuyu ",
      taglineAccent: "doldur",
      description:
        "Sakin ama zekâ isteyen bir şekil bulmacası. Her seviye, içinde sabit ahşap taşlar olan bir kara kutu: boşluğu tepsideki parçalarla doldur. Her kutunun tek bir çözümü var.",
      stats: [
        { value: "70", label: "Seviye" },
        { value: "6", label: "Bölüm" },
        { value: "2", label: "Sonsuz mod" },
      ],
      shotAlt: "Kara Kutu ana ekranı: devam eden seviye, Seri ve Patlama modları, bölümler",
    },
    how: {
      eyebrow: "Nasıl oynanır",
      title: "Üç adımda kutuyu kapat",
      steps: [
        { title: "Kutuya bak", text: "Her seviye bir kara kutu. İçindeki ahşap taşlar sabit, yerlerinden oynamaz." },
        { title: "Parçaları yerleştir", text: "Tepsideki parçaları kutuya sürükle. Döndür, çevir, tek doğru yeri bul." },
        { title: "Boşluğu doldur", text: "Kutu tam dolunca seviye biter. Hızlı çöz, az hamle yap, üç yıldızı topla." },
      ],
    },
    chapters: {
      eyebrow: "Bölümler",
      title: "6 bölüm, her birinde yeni bir kural",
      items: [
        { name: "Öğretici", text: "Okuyarak değil, yaparak öğren." },
        { name: "Karanlık", text: "Şekli ezberle, karanlıkta çöz." },
        { name: "Ayna", text: "Bazı parçalar ters geliyor." },
        { name: "Tuzak", text: "Her parça bu kutuya ait değil: fazladan parçalar var." },
        { name: "Torba", text: "Parçalar birer birer gelir, koyduğun parça kilitlenir." },
        { name: "İşaretli Kutu", text: "İşaretli yere sadece o parça girer." },
      ],
    },
    modes: {
      eyebrow: "Modlar",
      title: "İki sonsuz mod",
      tag: "Sonsuz",
      best: "Rekorunu kır",
      items: [
        { name: "Seri", icon: "⚡", text: "Süreye karşı yarış. Kapattığın her kutu süre kazandırır; hızını koru, zinciri büyüt." },
        { name: "Patlama", icon: "✸", text: "Satır ve sütunları doldurup patlat. Kombo yap, zincirleri büyüt, rekorunu kır." },
      ],
    },
    gallery: {
      title: "Ekran görüntüleri",
      shots: [
        { file: "1-home", alt: "Ana ekran ve bölümler" },
        { file: "2-mirror", alt: "Ayna bölümü: ters gelen parçalar" },
        { file: "3-dark", alt: "Karanlık bölümü: şekli ezberle" },
        { file: "4-rush", alt: "Seri modu: süreye karşı" },
        { file: "5-blast", alt: "Patlama modu: satır ve sütun patlat" },
        { file: "6-complete", alt: "Seviye tamamlandı ekranı" },
      ],
    },
    faq: {
      heading: "Sıkça Sorulan Sorular",
      items: [
        {
          q: "Nasıl oynanır?",
          a: "Tepsideki parçaları sürükleyip kutudaki boşluğa yerleştir; gerekirse döndür ya da çevir. Kutu tam dolduğunda seviye biter. Her kutunun tek bir çözümü var.",
        },
        {
          q: "Hesap açmam gerekiyor mu?",
          a: "Hayır. Hesap gerekmez; ilerlemen ve skorların yalnızca telefonunda saklanır.",
        },
        { q: "Hangi dillerde oynanır?", a: "Türkçe ve İngilizce." },
        {
          q: "Üç yıldızı nasıl alırım?",
          a: "Seviyeyi hızlı çöz, az hamle yap ve seriyi uzat. Her seviyede üç yıldız var.",
        },
        {
          q: "Ne zaman çıkıyor?",
          a: "Kara Kutu App Store'da incelemede, Google Play'de kapalı testte. Yayına girdiği gün bu sayfadaki mağaza düğmeleri açılacak.",
        },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: "Tangram puzzle",
      taglineStart: "Fill the ",
      taglineAccent: "black box",
      description:
        "A calm, clever shape puzzle. Every level is a black box with wooden stones already inside: fill the empty space with the pieces in your tray. Every box has exactly one solution.",
      stats: [
        { value: "70", label: "Levels" },
        { value: "6", label: "Chapters" },
        { value: "2", label: "Endless modes" },
      ],
      shotAlt: "Kara Kutu home screen: current level, Rush and Blast modes, chapters",
    },
    how: {
      eyebrow: "How to play",
      title: "Close the box in three steps",
      steps: [
        { title: "Look at the box", text: "Every level is a black box. The wooden stones inside are fixed and never move." },
        { title: "Place the pieces", text: "Drag the pieces from your tray into the box. Rotate, flip, find the one perfect fit." },
        { title: "Fill the gap", text: "When the box is full, the level is done. Solve fast with few moves to earn three stars." },
      ],
    },
    chapters: {
      eyebrow: "Chapters",
      title: "6 chapters, each with a new rule",
      items: [
        { name: "Tutorial", text: "Learn by doing, no walls of text." },
        { name: "Blackout", text: "Memorize the shape, then solve it in the dark." },
        { name: "Mirror", text: "Some pieces arrive flipped." },
        { name: "Decoy", text: "Not every piece belongs in the box: there are extras." },
        { name: "Bag", text: "Pieces come one at a time, and placed pieces lock." },
        { name: "Marked Box", text: "Marked spots only fit the matching piece." },
      ],
    },
    modes: {
      eyebrow: "Modes",
      title: "Two endless modes",
      tag: "Endless",
      best: "Chase your record",
      items: [
        { name: "Rush", icon: "⚡", text: "Race the clock. Every box you close adds time; keep your pace and grow the chain." },
        { name: "Blast", icon: "✸", text: "Fill rows and columns to blast them. Chain combos and chase your record." },
      ],
    },
    gallery: {
      title: "Screenshots",
      shots: [
        { file: "1-home", alt: "Home screen and chapters" },
        { file: "2-mirror", alt: "Mirror chapter: flipped pieces" },
        { file: "3-dark", alt: "Blackout chapter: memorize the shape" },
        { file: "4-rush", alt: "Rush mode: race the clock" },
        { file: "5-blast", alt: "Blast mode: clear rows and columns" },
        { file: "6-complete", alt: "Level complete screen" },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "How do I play?",
          a: "Drag the pieces from your tray into the empty space in the box, rotating or flipping them as needed. The level ends when the box is full. Every box has exactly one solution.",
        },
        {
          q: "Do I need an account?",
          a: "No. No account is needed; your progress and scores stay on your device only.",
        },
        { q: "Which languages does it support?", a: "English and Turkish." },
        {
          q: "How do I earn three stars?",
          a: "Solve the level fast, with few moves and a long streak. Every level has three stars to earn.",
        },
        {
          q: "When is it coming out?",
          a: "Kara Kutu is in App Store review and closed testing on Google Play. The store buttons on this page will open on launch day.",
        },
      ],
    },
  },
} satisfies Record<Locale, unknown>;

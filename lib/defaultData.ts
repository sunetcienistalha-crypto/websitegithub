
// ====================================================================
// CENTRAL DATA STORE — Edit this file to update content permanently.
// Admin panel overrides are stored in localStorage for live preview.
// To make changes permanent: edit this file → push to GitHub → redeploy.
// ====================================================================

export interface SiteData {
  hero: {
    name: string;
    surname: string;
    tagline: string;
    description: string;
    tags: string[];
    available: boolean;
    availableText: string;
    location: string;
    slider: { image: string; title: string; desc: string; tag1: string; tag2: string; }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    highlights: { value: string; label: string }[];
    education: { school: string; department: string; period: string; gpa: string; note?: string }[];
    certificates: string[];
    photo1: string;
    photo2: string;
  };
  experiences: ExperienceItem[];
  skills: {
    groups: { group: string; skills: { name: string; level: number }[] }[];
    languages: { name: string; label: string; level: number }[];
    tools: string[];
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    instagram: string;
    github: string;
    location: string;
    address: string;
  };
  events: EventItem[];
  projects: ProjectDetail[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  coverPhoto: string;
  gallery: string[];
  description: string[];
  role: string;
  org: string;
  achievements: string[];
  technologies: string[];
  relatedSlugs: string[];
  pdfUrl?: string;
}

export interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  type: string;
  description: string;
  tags: string[];
  active: boolean;
}

export interface EventItem {
  title: string;
  org: string;
  date: string;
  description: string;
  photo: string;
  category: string;
  slug: string;
  details: string[];
  achievements: string[];
  gallery: string[];
}

export const DEFAULT_SITE_DATA: SiteData = {
  hero: {
    name: "Enis Talha",
    surname: "Sünetci",
    tagline: "AI Proje Koordinatörü · İHA Mekanik Ekip Üyesi · Stratejik Düşünür",
    description:
      "Havacılık, savunma sanayii ve yapay zeka kesişiminde çalışıyorum. Projeleri koordine ediyor, takımları yönetiyor ve stratejik çözümler üretiyorum. Farklı disiplinlere olan ilgim ve yeni bilgiler edinme tutkum, beni her alanda gelişmeye itiyor.",
    tags: ["AI Proje Koordinatörü", "İHA Mekanik Ekip Üyesi", "TEKNOFEST", "Stratejik Düşünür", "Havacılık & Uzay", "Savunma Sanayii"],
    available: true,
    availableText: "Müsait",
    location: "Kocaeli / İstanbul, Türkiye",
    slider: [
      {
        image: "/photos/media__1775397459829.jpg",
        title: "Yönetim Kurulu Bşk.",
        desc: "Teknoloji & Havacılık Vizyonu",
        tag1: "GTÜ HUK",
        tag2: "Liderlik"
      },
      {
        image: "/photos/media__1775396600557.jpg",
        title: "Mekanik Ekip & Takım Kaptanı",
        desc: "TEKNOFEST Temsiliyeti",
        tag1: "İHA",
        tag2: "AR-GE"
      },
      {
        image: "/photos/media__1775395402266.jpg",
        title: "Üniversite Başkanı",
        desc: "Türk Dünyası Gençlik Konseyi",
        tag1: "TDT",
        tag2: "Diplomasi"
      }
    ],
  },
  about: {
    heading: "Hayallerimi projeye, projeleri gerçeğe dönüştürüyorum.",
    paragraphs: [
      "Gebze Teknik Üniversitesi İşletme bölümü 4. sınıf öğrencisiyim (GPA: 3.37, %30 İngilizce). Farklı disiplinlere duyduğum ilgi ve yeni bilgiler edinme tutkum, işletme bölümünü tercih etmemi sağladı.",
      "Yönetim alanındaki güçlü yönlerim ve teknik konulara olan merakım sayesinde, hem stratejik hem operasyonel becerilerimi geliştirmeyi hedefliyorum. Havacılık, uzay, teknoloji ve savunma sanayi alanlarına olan ilgim doğrultusunda; bu sektörlerde liderlik pozisyonlarında görev almak ve uzun vadede sektöre değer katan projeler üretmek önemli kariyer hedeflerim arasında yer alıyor.",
      "Sadece teorik bilgiyle yetinmeyip, sahada uygulama yapmayı ve üretim süreçlerinde aktif rol almayı da önemseyen bir yaklaşım benimsiyorum. Üniversite hayatım boyunca görev aldığım kulüplerde özellikle havacılık ve uzay alanında birçok etkinlik, fuar ve yarışmada aktif görev aldım.",
      "50+ salon etkinliği, gezi, fuar ve yarışma ile organizasyon yönetimi, takım koordinasyonu ve kriz çözme konularında deneyim kazandım. Yenilikçi, takım ruhuna önem veren bir kişiliğe sahibim. Çözüm odaklı fikirler üretmek ve kurum kültürüne uyum sağlamak en güçlü yanlarım.",
    ],
    highlights: [
      { value: "4+", label: "Yıl deneyim" },
      { value: "50+", label: "Etkinlik & organizasyon" },
      { value: "685", label: "Takım arası final (TEKNOFEST)" },
      { value: "3.37", label: "GPA" },
    ],
    education: [
      {
        school: "Gebze Teknik Üniversitesi",
        department: "İşletme (Lisans %30 İngilizce)",
        period: "2021 – Devam ediyor",
        gpa: "3.37",
        note: "4. Sınıf · Hazırlık sınıfı (İngilizce) 2021-2022",
      },
      {
        school: "Şehit Mustafa Kaymakçı AİHL",
        department: "Fen ve Sosyal Bilimler Proje Lisesi",
        period: "2016 – 2020",
        gpa: "85",
      },
    ],
    certificates: [
      "Oryantasyon Belgesi – Milli Eğitim Bakanlığı",
      "Uluslararası İnsansız Hava Araçları Yarışması Finalist Sertifikası – TEKNOFEST",
      "Uçuş Sertifikası – Sivrihisar Havacılık Merkezi",
      "B Sınıfı Sürücü Belgesi – T.C. İçişleri Bakanlığı",
    ],
    photo1: "/photos/media__1775395402266.jpg",
    photo2: "/photos/media__1775395402232.jpg",
  },
  experiences: [
    {
      period: "2025 – Devam ediyor",
      org: "İŞKUR",
      role: "Gebze Teknik Üniversitesi Proje Takımları Koordinatörlüğü",
      type: "İş Deneyimi",
      description:
        "Üniversite bünyesindeki proje takımlarının sponsorluk, iletişim ve temsil faaliyetlerini yürütüyorum.",
      tags: ["Koordinasyon", "Sponsorluk", "Temsil"],
      active: true,
    },
    {
      period: "2024 – 2025",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      role: "Yönetim Kurulu Başkanı",
      type: "Kulüp Liderliği",
      description:
        "GTÜ Havacılık ve Uzay Kulübü'nün Yönetim Kurulu Başkanı olarak çeşitli salon etkinliklerinde organizasyon görevleri üstlendim. Kulübün sosyal medya stratejisi ve içerik yönetimini yürüttüm. Tanıtım günleri ve fuarlarda temsil görevleri yürüttüm. Kulüp internet sitesinin moderasyonunu sağladım. Sponsorluk faaliyetlerinde rol alarak bütçeleme, finansal planlama ve firma iletişimi konularında deneyim kazandım.",
      tags: ["Liderlik", "Organizasyon", "Havacılık", "Sponsorluk", "Medya Yönetimi"],
      active: false,
    },
    {
      period: "2023 – 2024",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      role: "Yönetim Kurulu Başkan Yardımcısı",
      type: "Kulüp Yönetimi",
      description:
        "Başkan yardımcısı olarak etkinliklerin planlanması, koordinasyon ve iletişim süreçlerinde aktif rol aldım.",
      tags: ["Koordinasyon", "Planlama"],
      active: false,
    },
    {
      period: "2025 – Devam ediyor",
      org: "Türk Dünyası Gençlik Vakfı",
      role: "Gebze Teknik Üniversitesi Başkanı & Türk Dünyası Gençlik Topluluğu Kurucu YK Başkanı",
      type: "Gönüllülük",
      description:
        "Türk Devletler Teşkilatı'nın resmi gençlik platformu olan Türk Dünyası Gençlik Vakfı'nda Üniversite Temsilcisi ve kurucu başkanıyım. Topluluğun kuruluş sürecini baştan sona yürüttüm; vizyon, organizasyon yapısı ve faaliyet planlarını oluşturdum. Türk dünyasına yönelik sosyal, kültürel and akademik etkinliklerin hayata geçirilmesi için liderlik and koordinasyon görevlerini üstlenmekteyim.",
      tags: ["Diplomasi", "Uluslararası İlişkiler", "Liderlik", "Kuruculuk"],
      active: true,
    },
    {
      period: "2023 – 2024",
      org: "Türk Kızılayı – Maltepe",
      role: "Gönüllü Stajyer",
      type: "Gönüllülük",
      description:
        "Sosyal sorumluluk projelerinin planlanması and yürütülmesine destek sağladım, yardım faaliyetleri and saha organizasyonlarında aktif rol üstlendim. Etkinlik koordinasyonu, ekip çalışması and kurumsal iletişim alanlarında pratik deneyim kazandım.",
      tags: ["Sosyal Sorumluluk", "Koordinasyon", "Saha Çalışması"],
      active: false,
    },
    {
      period: "2023 – 2024",
      org: "GTU-AQUA İHA Takımı",
      role: "Mekanik Ekibi Üyesi & Takım Kaptanı",
      type: "Yarışma",
      description:
        "SolidWorks ile parça tasarımı and üretim süreçlerinde aktif görev aldım. Raporlama, sponsorluk and tanıtım faaliyetlerinde bulundum. Teknofest 2024 İHA Yarışması'nda 685 takım arasından finale kalan ilk 44 takım içinde yer aldık.",
      tags: ["İHA", "SolidWorks", "TEKNOFEST", "Mekanik Tasarım"],
      active: false,
    },
    {
      period: "2021 – 2022",
      org: "GTU-AVES İHA Takımı",
      role: "Sosyal Medya ve Sponsorluk Görevlisi",
      type: "Yarışma",
      description:
        "Amerika Birleşik Devletleri'nde düzenlenen SUAS yarışması sürecinde takımın sponsorluk and sosyal medya sorumlusu olarak rol aldım. Uluslararası alanda rapor aşamasını geçen 77 takımdan biri olarak yarışmaya kabul aldım. Yarışma ile 10 yıllık ABD vizesi elde ettim.",
      tags: ["SUAS", "Uluslararası", "Sponsorluk", "ABD"],
      active: false,
    },
    {
      period: "2022",
      org: "SÜTSÇEF",
      role: "Satış ve Finans",
      type: "İş Deneyimi",
      description:
        "Kasa işlemleri, satış sunumu and ürün düzenlemesinde görev aldım. Temel finansal süreçler and müşteri iletişimi konusunda deneyim kazandım.",
      tags: ["Satış", "Finans", "Müşteri İlişkileri"],
      active: false,
    },
    {
      period: "2021",
      org: "TÜGVA",
      role: "Yaz Kampı Eğitmeni",
      type: "Gönüllülük",
      description:
        "Ortaokul düzeyinde birden fazla sınıfa meslek bilgisi aktararak sunum, liderlik and etkili iletişim becerilerimi geliştirdim.",
      tags: ["Eğitim", "Sunum", "Liderlik"],
      active: false,
    },
  ],
  skills: {
    groups: [
      {
        group: "Teknik Beceriler",
        skills: [
          { name: "SolidWorks", level: 82 },
          { name: "AutoCAD", level: 70 },
          { name: "Python", level: 75 },
          { name: "Arduino", level: 78 },
          { name: "SPSS", level: 65 },
        ],
      },
      {
        group: "Tasarım & Medya",
        skills: [
          { name: "Adobe Photoshop & Premiere", level: 80 },
          { name: "Canva", level: 92 },
          { name: "Sosyal Medya İçerik Üretimi", level: 90 },
        ],
      },
      {
        group: "Yönetim & Liderlik",
        skills: [
          { name: "Proje Yönetimi", level: 95 },
          { name: "Takım Liderliği", level: 92 },
          { name: "Organizasyon & Planlama", level: 95 },
          { name: "Etkili İletişim", level: 93 },
          { name: "MS Office", level: 95 },
        ],
      },
    ],
    languages: [
      { name: "Türkçe", label: "Anadil", level: 100 },
      { name: "İngilizce", label: "B1 – Orta", level: 60 },
      { name: "Rusça", label: "A1 – Başlangıç", level: 20 },
      { name: "Arapça", label: "A1 – Başlangıç", level: 20 },
    ],
    tools: [
      "Yapay Zeka", "İHA Sistemleri", "Drone Yarışması", "AR-GE",
      "Stratejik Planlama", "Etkinlik Yönetimi", "Diplomasi", "Araştırma",
      "Sosyal Medya Yönetimi", "Sponsorluk", "Kurumsal İletişim",
      "Problem Çözme", "Kriz Yönetimi", "Bütçeleme",
    ],
  },
  contact: {
    email: "sunetcienistalha@gmail.com",
    phone: "+90 535 596 34 31",
    linkedin: "https://www.linkedin.com/in/enis-talha-s%C3%BCnetci-5854a5221/",
    instagram: "https://www.instagram.com/enis_talha/",
    github: "",
    location: "Kocaeli / İstanbul, Türkiye",
    address: "Altayeşme Mah. Birsen Sok. no:17/19 daire:12 Maltepe/İstanbul",
  },
  events: [
    {
      title: "GTÜ 3. Havacılık ve Uzay Zirvesi",
      org: "Gebze Teknik Üniversitesi",
      date: "2025",
      description:
        "YK Başkanı and zirve genel koordinatörü olarak Türkiye'nin önde gelen havacılık and uzay kurumlarının yöneticilerini, farklı üniversitelerden öğrenci kulüplerini bir araya getirdik. Astronot Tuva Cihangir Atasever, Aselsan Genel Müdür Yardımcısı, TÜBİTAK Uzay, TUSAŞ, Havelsan, Kale Jet, T.C. Savunma Sanayii Başkanlığı gibi kurum temsilcileri katıldı.",
      photo: "/photos/media__1775397425209.jpg",
      category: "Zirve",
      slug: "gtu-3-havacilik-ve-uzay-zirvesi",
      details: ["Türkiye'nin önde gelen havacılık and uzay kurumlarının yöneticilerini, farklı üniversitelerden öğrenci kulüplerini zirvede bir araya getirdik.", "Zirvenin genel koordinasyonunu yönettim."],
      achievements: ["Astronot Tuva Cihangir Atasever katılımı", "Sektörün dev firmalarından üst düzey temsilciler"],
      gallery: ["/photos/media__1775397425209.jpg"],
    },
    {
      title: "10. Yıl Lansmanı ve Plaket Töreni",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      date: "2025",
      description:
        "YK Başkanı olarak sponsorlarımızın katılımıyla 10. yılımız için düzenlediğimiz etkinlikte, Gebze Belediye Başkanı and değerli sponsorlarımızı ağırladık. Plaket takdiminin yanı sıra 10. yıl lansmanı and tanıtım filmi gösterimi düzenlendi.",
      photo: "/photos/media__1775396695582.jpg",
      category: "Etkinlik",
      slug: "10-yil-lansmani-ve-plaket-toreni",
      details: ["Kulübün 10. yıl şerefine lansman and tören düzenlendi.", "Plaket takdimi and tanıtım filmi gösterimi yapıldı."],
      achievements: ["Gebze Belediye Başkanı katılımı", "Sponsorlarla güçlü iletişim and yeni destek fırsatları"],
      gallery: ["/photos/media__1775396695582.jpg"],
    },
    {
      title: "Sivil Havacılık Günü",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      date: "2024",
      description:
        "7.'sini düzenlediğimiz Sivil Havacılık Günü etkinliğinde, Türkiye'nin ilk kadın kaptan pilotu Dilek Karabağlı and SOLOTÜRK'ün kurucu pilotu Sedat Yalın Ahbab gibi değerli isimleri ağırladık.",
      photo: "/photos/media__1775396663944.jpg",
      category: "Etkinlik",
      slug: "sivil-havacilik-gunu-2024",
      details: ["Etkinliğin operasyonel and protokol süreçlerini yürüttüm."],
      achievements: ["Türkiye'nin ilk kadın kaptan pilotunun katılımı"],
      gallery: ["/photos/media__1775396663944.jpg"],
    },
    {
      title: "Uzay Günleri: Artemis",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      date: "2022",
      description:
        "TUA, TÜBİTAK Uzay, TÜBİTAK SAGE, DeltaV, Roketsan gibi firmaların and üniversite roket/uydu takımlarının katıldığı Türkiye'nin en büyük roketçilik buluşması. İnsan Kaynakları Başkan Yardımcısı olarak organizasyonda aktif görev aldım.",
      photo: "/photos/media__1775396690769.jpg",
      category: "Etkinlik",
      slug: "uzay-gunleri-artemis",
      details: ["İnsan Kaynakları Başkan Yardımcısı olarak görev aldım.", "Ekip koordinasyonu and operasyonel süreçlerde yer aldım."],
      achievements: ["Türkiye'nin en büyük roketçilik buluşması olarak tarihe geçti"],
      gallery: ["/photos/media__1775396690769.jpg"],
    },
    {
      title: "TEKNOFEST İHA Yarışması",
      org: "TEKNOFEST Adana 2024",
      date: "2024",
      description:
        "GTU-AQUA İHA Takımı'nda mekanik ekip üyesi olarak SolidWorks ile parça tasarımı, üretim and saha testleri gerçekleştirdim. 685 takım arasından finale kalan ilk 44 takım içinde yer aldık.",
      photo: "/photos/media__1775396600557.jpg",
      category: "Yarışma",
      slug: "teknofest-iha-yarismasi-adana",
      details: ["Mekanik tasarım and analizleri SolidWorks üzerinden yürüttüm."],
      achievements: ["685 takım arasında ilk 44'e girerek finalist olmak"],
      gallery: ["/photos/media__1775396600557.jpg"],
    },
    {
      title: "SUAS İHA Yarışması (ABD)",
      org: "GTU-AVES Takımı",
      date: "2022",
      description:
        "Amerika'da düzenlenen SUAS yarışması sürecinde sponsorluk and sosyal medya sorumlusu olarak görev aldım. Uluslararası rapor aşamasını geçen 77 takımdan biri olduk. 10 yıllık ABD vizesi elde ettim.",
      photo: "/photos/media__1775396649087.jpg",
      category: "Yarışma",
      slug: "suas-iha-yarismasi-abd",
      details: ["Global bir yarışmada sponsorluk and finans süreçlerini takip ettim."],
      achievements: ["Raporu geçerek kabul edilen 77 dünya takımından biri olmak"],
      gallery: ["/photos/media__1775396649087.jpg"],
    },
    {
      title: "TDT – Ulusal Teşkilatlanma Kampı",
      org: "Türk Dünyası Gençlik Vakfı",
      date: "2025",
      description:
        "Türk Devletler Teşkilatı'nın resmi gençlik platformunda üniversite temsilcisi and kurucu başkan olarak ulusal kampa katıldım.",
      photo: "/photos/media__1775395402266.jpg",
      category: "Diplomasi",
      slug: "tdt-ulusal-teskilatlanma-kampi",
      details: ["Stratejik geliştirme, Türk dünyası bağlarının güçlendirilmesi üzerine seminer and çalıştaylara katılım sağlandı."],
      achievements: ["Kurucu başkan sıfatıyla temsilcilik"],
      gallery: ["/photos/media__1775395402266.jpg"],
    },
    {
      title: "Türk Kızılayı Gönüllülük",
      org: "Maltepe İlçe Kızılay Başkanlığı",
      date: "2023-2024",
      description:
        "Sosyal sorumluluk projelerinde aktif gönüllülük. Yardım organizasyonlarında destek and saha çalışmaları. Takım çalışması and kriz anlarında koordinasyon deneyimi kazandım.",
      photo: "/photos/media__1775397377996.jpg",
      category: "Gönüllülük",
      slug: "turk-kizilayi-gonulluluk",
      details: ["Pek çok sosyal destek projesi and kampanya yönetiminde görev alındı."],
      achievements: ["Aktif gönüllü saati and kriz yönetimi tecrübesi"],
      gallery: ["/photos/media__1775397377996.jpg"],
    },
    {
      title: "SahaExpo Savunma Fuarı",
      org: "Savunma & Teknoloji",
      date: "2022, 2024",
      description:
        "Savunma sanayii and havacılık alanındaki profesyonellerle networking. Fuarda temsil and sektör bağlantıları kurdum.",
      photo: "/photos/media__1775397369683.jpg",
      category: "Fuar",
      slug: "sahaexpo-savunma-fuari",
      details: ["B2B görüşmeleri and sponsor bulma ağını yönetme operasyonları."],
      achievements: ["Kurum için yeni tedarikçiler and destekçiler kazanılması"],
      gallery: ["/photos/media__1775397369683.jpg"],
    },
    {
      title: "İHA Takımı Proje Geliştirme",
      org: "GTÜ – HUK",
      date: "2024",
      description:
        "İHA tasarım toplantısı and teknik sunum. SolidWorks ile parça tasarımı, 3D modelleme and üretim süreçleri.",
      photo: "/photos/media__1775397459829.jpg",
      category: "Proje",
      slug: "iha-takimi-proje-gelistirme",
      details: ["Aerodinamik yapıların üretim and analiz test süreçleri."],
      achievements: ["Zamanında üretim takviminin yakalanması"],
      gallery: ["/photos/media__1775397459829.jpg"],
    },
    {
      title: "Eğitim & Seminer",
      org: "Akademik Program",
      date: "2024",
      description:
        "Yapay zeka and havacılık teknolojileri konulu seminerlere katılım. Sektörün geleceği hakkında bilgi edinimi.",
      photo: "/photos/media__1775397465525.jpg",
      category: "Eğitim",
      slug: "egitim-seminer",
      details: ["Geleceğin teknolojilerine dair vizyon açan panellerin takip edilmesi."],
      achievements: ["Gelecek vizyon sertifikası"],
      gallery: ["/photos/media__1775397465525.jpg"],
    },
    {
      title: "TÜBİTAK Saha Çalışması",
      org: "TÜBİTAK – Adana",
      date: "2023",
      description:
        "TÜBİTAK destekli araştırma projesinde saha çalışması. Teknik testler and veri toplama süreçlerinde yer aldım.",
      photo: "/photos/media__1775395402232.jpg",
      category: "Araştırma",
      slug: "tubitak-saha-calismasi",
      details: ["Veri toplama, analiz and sahadaki verilerin raporlanması."],
      achievements: ["Başarılı tamamlanan vaka analiz süreci"],
      gallery: ["/photos/media__1775395402232.jpg"],
    },
  ],
  projects: [
    {
      slug: "havacilik-uzay-zirvesi",
      title: "GTÜ 3. Havacılık ve Uzay Zirvesi",
      subtitle: "Zirve Genel Koordinatörü · 8-9 Mayıs 2025",
      category: "Zirve",
      period: "2023 – 2025",
      coverPhoto: "/photos/media__1775397425209.jpg",
      gallery: ["/photos/media__1775397425209.jpg", "/photos/media__1775396663944.jpg", "/photos/media__1775396695582.jpg"],
      description: [
        "GTÜ Havacılık ve Uzay Kulübü YK Başkanı and zirve genel koordinatörü olarak Gebze Teknik Üniversitesi ev sahipliğinde; ülkemizin önde gelen havacılık and uzay kurumlarının yöneticilerini, Türkiye genelinden farklı üniversitelerden gelen öğrenci kulüplerini and gençleri aynı platformda bir araya getirdik.",
        "İki gün süren bu özel organizasyonda; konferanslar, paneller, etkileşimli etkinlikler and mezun buluşmaları ile bilgi paylaşımı gibi birçok özel etkinlik düzenlendi. Sektörün geleceğine yön verecek gençlerle, tecrübeli isimleri aynı çatı altında buluşturarak güçlü bir etkileşim zemini oluşturduk.",
        "Gençlik ve Spor Bakanlığı ÜNİDES programı kapsamında ulusal düzeyde desteklenen Havacılık and Uzay Zirvesi'nin proje koordinatörü olarak görev aldım. Proje yazım and yürütme süreçlerini yönettim. Zirve, Türkiye'nin en büyük havacılık and uzay etkinliklerinden biri haline gelmiştir.",
      ],
      role: "Zirve Genel Koordinatörü & YK Başkanı",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      achievements: [
        "Astronot Tuva Cihangir Atasever'i ağırladık",
        "Aselsan Genel Müdür Yardımcısı Murat Karataş konuşmacı olarak katıldı",
        "TÜBİTAK Uzay, TUSAŞ, Havelsan, Kale Jet Motorları, Roketsan temsilcileri",
        "T.C. Sanayi ve Teknoloji Bakan Yardımcısı Zekeriya Coştu'nun katılımı",
        "T.C. Savunma Sanayii Başkanlığı Milli Muharip Uçak Daire Başkanı Dr. Murat Ceran",
        "Havelsan YK Başkanı ve GTÜ Rektörü Prof. Dr. Hacı Ali Mantar",
        "2 gün süren organizasyon: konferanslar, paneller, etkileşimli etkinlikler",
      ],
      technologies: ["Proje Yönetimi", "Etkinlik Koordinasyonu", "ÜNİDES", "Sponsorluk", "Kurumsal İletişim"],
      relatedSlugs: ["sivil-havacilik-gunu", "10-yil-lansmani", "uzay-gunleri-artemis"],
    },
    {
      slug: "10-yil-lansmani",
      title: "10. Yıl Lansmanı ve Plaket Töreni",
      subtitle: "GTÜ Havacılık ve Uzay Kulübü · 2025",
      category: "Etkinlik",
      period: "2025",
      coverPhoto: "/photos/media__1775396695582.jpg",
      gallery: ["/photos/media__1775396695582.jpg"],
      description: [
        "GTÜ Havacılık ve Uzay Kulübü YK Başkanı olarak sponsorlarımızın katılımıyla 10. yılımız için düzenlediğimiz etkinlikte, hedeflerimize ulaşmamıza katkı sağlayan değerli sponsorlarımızı ağırladık.",
        "Başta Gebze Belediye Başkanı Sayın Zinnur Büyükgöz olmak üzere, Esas Kimya, Kılavuz Gençlik, Biesse, Çelmer Çelik, NM Dış Ticaret and Kiwa gibi değerli sponsorlarımızı ağırladık. Yıl boyunca verdikleri kıymetli destekler için kendilerine plaketlerini takdim ettik.",
        "Kulübümüzün yeni süreçlerinden, yarışmalardan and yeni dönem takımlarımız hakkında planlarımızdan bahsederek bir 10. yıl lansmanı and tanıtım filmi gösterimi düzenledik.",
      ],
      role: "Yönetim Kurulu Başkanı",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      achievements: [
        "Gebze Belediye Başkanı ve tüm sponsorların katılımı",
        "10. yıl tanıtım filmi gösterimi",
        "Plaket töreni organizasyonu",
        "Yeni dönem vizyon sunumu",
      ],
      technologies: ["Etkinlik Yönetimi", "Sponsorluk", "Kurumsal İletişim", "Sunum"],
      relatedSlugs: ["havacilik-uzay-zirvesi", "sivil-havacilik-gunu"],
    },
    {
      slug: "sivil-havacilik-gunu",
      title: "7. Sivil Havacılık Günü",
      subtitle: "GTÜ Havacılık ve Uzay Kulübü · 2024",
      category: "Etkinlik",
      period: "2024",
      coverPhoto: "/photos/media__1775396663944.jpg",
      gallery: ["/photos/media__1775396663944.jpg"],
      description: [
        "GTÜ Havacılık ve Uzay Kulübü YK Başkanı olarak 6 Aralık'ta 7.'sini düzenlediğimiz Sivil Havacılık Günü etkinliğimizde, Türkiye'nin ilk kadın kaptan pilotu Dilek Karabağlı and SOLOTÜRK'ün kurucu pilotu and şu an Türk Hava Yolları'nda kaptan pilot olarak görev yapan Sedat Yalın Ahbab gibi çok değerli isimleri ağırladık.",
        "Konuşmacılarımızın ilham verici hikayeleri and deneyimleri, havacılığa tutkusu olan öğrencilere ilham kaynağı oldu.",
      ],
      role: "Yönetim Kurulu Başkanı & Organizatör",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      achievements: [
        "Türkiye'nin ilk kadın kaptan pilotu Dilek Karabağlı konuşmacı",
        "SOLOTÜRK kurucu pilotu Sedat Yalın Ahbab konuşmacı",
        "7. geleneksel etkinlik organizasyonu",
      ],
      technologies: ["Etkinlik Yönetimi", "Organizasyon", "Havacılık"],
      relatedSlugs: ["havacilik-uzay-zirvesi", "10-yil-lansmani"],
    },
    {
      slug: "uzay-gunleri-artemis",
      title: "Uzay Günleri: Artemis",
      subtitle: "Türkiye'nin en büyük roketçilik buluşması · 2022",
      category: "Etkinlik",
      period: "2022",
      coverPhoto: "/photos/media__1775396690769.jpg",
      gallery: ["/photos/media__1775396690769.jpg"],
      description: [
        "TUA, TÜBİTAK Uzay, TÜBİTAK SAGE, DeltaV, Roketsan gibi firmaların and Türkiye'nin farklı şehirlerinden roket and uydu öğrenci takımlarının katıldığı Türkiye'nin en büyük roketçilik buluşması.",
        "GTÜ Havacılık ve Uzay Kulübü İnsan Kaynakları Başkan Yardımcısı olarak etkinliğin düzenlenmesinde, yönetilmesinde and sosyal medya içeriklarının hazırlanması konusunda aktif olarak görev aldım.",
      ],
      role: "İK Başkan Yardımcısı & Organizatör",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      achievements: [
        "Türkiye'nin en büyük roketçilik etkinliği",
        "TUA, TÜBİTAK, Roketsan gibi kurumların katılımı",
        "Sosyal medya içerik yönetimi",
      ],
      technologies: ["Etkinlik Yönetimi", "Sosyal Medya", "İçerik Üretimi"],
      relatedSlugs: ["havacilik-uzay-zirvesi", "teknofest-iha"],
    },
    {
      slug: "teknofest-iha",
      title: "TEKNOFEST İHA Yarışması",
      subtitle: "GTU-AQUA Takımı · 685 Takım Arası Final · 2024",
      category: "Yarışma",
      period: "2023 – 2024",
      coverPhoto: "/photos/media__1775396600557.jpg",
      gallery: ["/photos/media__1775396600557.jpg", "/photos/media__1775396649087.jpg"],
      description: [
        "TEKNOFEST Serbest Görev İHA Yarışması'nda GTU-AQUA İHA Takımı'nın mekanik ekip üyesi and takım kaptanı olarak görev aldım.",
        "SolidWorks ile parça tasarımı and üretim süreçlerinde aktif görev aldım. Raporlama, sponsorluk and tanıtım faaliyetlerinde bulundum.",
        "Teknofest 2024 İHA Yarışması'nda 685 takım arasından finale kalan ilk 44 takım içinde yer aldık. Adana'da gerçekleşen saha testleri and finale katıldık.",
      ],
      role: "Mekanik Ekip Üyesi & Takım Kaptanı",
      org: "GTU-AQUA İHA Takımı",
      achievements: [
        "685 takım arasından ilk 44'e girme başarısı",
        "SolidWorks ile İHA parça tasarımı",
        "Saha testleri and final uçuşları",
        "Sponsorluk and tanıtım faaliyetleri",
      ],
      technologies: ["SolidWorks", "İHA Tasarımı", "Mekanik Mühendislik", "3D Modelleme", "Üretim"],
      relatedSlugs: ["suas-iha", "uzay-gunleri-artemis"],
    },
    {
      slug: "suas-iha",
      title: "SUAS İHA Yarışması (ABD)",
      subtitle: "GTU-AVES Takımı · Uluslararası · 2022",
      category: "Yarışma",
      period: "2021 – 2022",
      coverPhoto: "/photos/media__1775396649087.jpg",
      gallery: ["/photos/media__1775396649087.jpg"],
      description: [
        "Amerika Birleşik Devletleri'nde düzenlenen SUAS (Student Unmanned Aerial Systems) yarışması sürecinde GTU-AVES İHA takımının sponsorluk and sosyal medya sorumlusu olarak rol aldım.",
        "Uluslararası alanda rapor aşamasını geçen 77 takımdan biri olarak yarışmaya kabul aldık. Konsolosluk nedenli yarışmaya fiziksel katılım sağlanamasa da, yarışma ile 10 yıllık ABD vizesi elde ettim.",
      ],
      role: "Sosyal Medya ve Sponsorluk Görevlisi",
      org: "GTU-AVES İHA Takımı",
      achievements: [
        "Uluslararası rapor aşamasını geçen 77 takımdan biri",
        "10 yıllık ABD vizesi elde edildi",
        "Sosyal medya and sponsorluk yönetimi",
      ],
      technologies: ["Sponsorluk", "Sosyal Medya", "Uluslararası Proje Yönetimi"],
      relatedSlugs: ["teknofest-iha"],
    },
    {
      slug: "turk-dunyasi-genclik",
      title: "Türk Dünyası Gençlik Vakfı",
      subtitle: "Kurucu YK Başkanı & Üniversite Temsilcisi · 2025",
      category: "Diplomasi",
      period: "2025 – Devam ediyor",
      coverPhoto: "/photos/media__1775395402266.jpg",
      gallery: ["/photos/media__1775395402266.jpg"],
      description: [
        "Türk Devletler Teşkilatı'nın resmi gençlik platformu olan Türk Dünyası Gençlik Vakfı'nda Gebze Teknik Üniversitesi Başkanı and kurucu başkanıyım.",
        "Topluluğun kuruluş sürecini baştan sona yürüttüm; vizyon, organizasyon yapısı and faaliyet planlarını oluşturdum.",
        "Türk dünyasına yönelik sosyal, kültürel and akademik etkinliklerin hayata geçirilmesi için liderlik and koordinasyon görevlerini üstlenmekteyim. Siyaset üstü bir anlayışla gençlerin kültürel and sosyal olarak beraber faaliyetler yürütebileceği projeler and sosyal sorumluluk projeleri planlamaktayız.",
      ],
      role: "Kurucu YK Başkanı & Üniversite Temsilcisi",
      org: "Türk Dünyası Gençlik Vakfı",
      achievements: [
        "Türk Dünyası Gençlik Topluluğu'nun kuruculuğu",
        "Ulusal Teşkilatlanma Kampı katılımı",
        "Üniversite yapılanmasının temsili",
        "Kültürel and akademik faaliyet planlaması",
      ],
      technologies: ["Liderlik", "Diplomasi", "Uluslararası İlişkiler", "Proje Yönetimi"],
      relatedSlugs: ["kizilay-gonulluluk"],
    },
    {
      slug: "kizilay-gonulluluk",
      title: "Türk Kızılayı Gönüllülük",
      subtitle: "Maltepe İlçe Kızılay Başkanlığı · 2023-2024",
      category: "Gönüllülük",
      period: "2023 – 2024",
      coverPhoto: "/photos/media__1775397377996.jpg",
      gallery: ["/photos/media__1775397377996.jpg"],
      description: [
        "Maltepe İlçe Kızılay Başkanlığı bünyesinde gönüllü stajyer olarak görev aldım.",
        "Sosyal sorumluluk projelerinin planlanması and yürütülmesine destek sağladım, yardım faaliyetleri and saha organizasyonlarında aktif rol üstlendim.",
        "Etkinlik koordinasyonu, ekip çalışması and kurumsal iletişim alanlarında pratik deneyim kazandım. Kriz anlarında koordinasyon and takım çalışması becerilerimi geliştirdim.",
      ],
      role: "Gönüllü Stajyer",
      org: "Türk Kızılayı – Maltepe İlçe Başkanlığı",
      achievements: [
        "Sosyal sorumluluk projelerinde aktif görev",
        "Yardım organizasyonlarında saha çalışması",
        "Kriz yönetimi and koordinasyon deneyimi",
      ],
      technologies: ["Gönüllülük", "Sosyal Sorumluluk", "Saha Çalışması", "Koordinasyon"],
      relatedSlugs: ["turk-dunyasi-genclik"],
    },
    {
      slug: "medya-projeleri",
      title: "Dijital Medya Projeleri",
      subtitle: "Sosyal Medya Yönetimi & İçerik Üretimi · 2021-2025",
      category: "Medya",
      period: "2021 – 2025",
      coverPhoto: "/photos/media__1775397465525.jpg",
      gallery: ["/photos/media__1775397465525.jpg"],
      description: [
        "GTÜ Havacılık ve Uzay Kulübü'nün Instagram hesabının sosyal medya yöneticiliğini 2021-2024 yılları arasında yürüttüm.",
        "Kulübün internet sitesinin (gtuhuk.com) editörlüğünü 2023-2025 döneminde üstlendim and içerik güncellemelerini yaptım.",
        "2024-2025 döneminde sosyal medya mentörlüğü yaparak yeni üyelere içerik üretimi, grafik tasarım and dijital pazarlama konularında rehberlik ettim.",
        "Adobe Photoshop, Premiere, Canva gibi araçlarla görsel and video içerikler ürettim.",
      ],
      role: "Sosyal Medya Yöneticisi & İçerik Üreticisi",
      org: "GTÜ Havacılık ve Uzay Kulübü",
      achievements: [
        "3+ yıl sosyal medya yönetimi",
        "Website editörlüğü (gtuhuk.com)",
        "Sosyal medya mentörlüğü",
        "Görsel and video içerik üretimi",
      ],
      technologies: ["Adobe Photoshop", "Adobe Premiere", "Canva", "Sosyal Medya", "İçerik Yönetimi", "Web Editörlüğü"],
      relatedSlugs: ["havacilik-uzay-zirvesi", "10-yil-lansmani"],
    },
  ]
};

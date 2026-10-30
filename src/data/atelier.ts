export type AtelierCategory =
  | "Maternity • Traditional"
  | "Maternity • Western"
  | "Maternity • Outdoor"
  | "Kids & 1st Birthday";

export type AtelierPhoto = {
  title: string;
  category: AtelierCategory;
  location: string;
  image: string;
  alt: string;
};

type HeroSlide = {
  eyebrow: string;
  quote: string;
  image: string;
  alt: string;
  position?: string;
};

export const heroSlides: HeroSlide[] = [
  // {
  //   eyebrow: "Editorial maternity · Golden studio",
  //   quote: "Two hearts intertwined, welcoming a whole new universe.",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAMwG-lqEswibX9w0hCdd8r2ZU8AjI3LHjEwEc6n38sY8v-bL04vGEwFjU80JhJ4uzsoZ7lLCcWHs2izjT4Pdmo7VZ0wOwayJg_lT7gk4coZ0kdQVLBdSLCzaJX9N1b7TVJUW4tnSuamcmxI78TTU8QyHzJfMoXDF4dOAzoUaAbI7hSZ4_1G_NQmNYhPNLMxIDVoyDbeFAbEyhhHC5DPNwDkNbJU3z3CQq9nKWF9_Q",
  //   alt: "Expectant parents together in a softly lit maternity portrait",
  // },
  // {
  //   eyebrow: "Heritage couture · Traditional elegance",
  //   quote: "Honouring timeless tradition and ancestral grace.",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDZvAWycOlupWEGDyXNCV7gXCCk0kfsnu422aBcTD9xKP1oQ2M9d_XYMvxgNQ3H10uzpVCeks1Jr7_MZ4RKU4q6Q5HN38gY5ftUrk1JPwU3yecSgJ96LTasqoo9UmkGEx6HUnJVkI-o1bjM2XlrGut8OfVL9rKuEvBtX13o69Lqnjd8UNe0chRWTvtpZsRehSif4eKy5VouWPXyW5c_vrEzUOUSuyFMIJz2DmfGlIU",
  //   alt: "An expectant mother in a traditional green Paithani saree",
  // },
  // {
  //   eyebrow: "Couture silhouette · Western fine art",
  //   quote: "Sculpted light celebrating the quiet power of motherhood.",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBiF9mCc401KgYdlPe55tf7yU3kzNZ7-EYj-MujnjKKq2XVHUF8SstPiWqrF1BTJ3gX5wYEuMASunAZopyOWeNACgHELaimO-OBQ-lGtlGvnX-YGYs7fHivDHovHAhMg4ATPdoOKnLdaIBlMcBQzUKRa_Ie0vY5WQaa3H5d8TMn2rO2Try9D2dl_TE_Pp0hJGj1f6aEWRuQgBhGqJ7n3ZKVVSs8oUU3KKwgaIKEVl8",
  //   alt: "A maternity portrait in a flowing beige gown against studio drapery",
  // },
  // {
  //   eyebrow: "Newborn atelier · Safely posed",
  //   quote: "The gentlest beginnings, preserved before they slip away.",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBg9EJ83rr575kthdmoiMmwsw16QwRpWRiw9l_S5Z-SxNyTYkkuS_Ju0zOSkw1EDfjYGbrIY42amtdA0D1HHm3aIyypC6xo5v4CHtWVT_1AZkZgZ8sBkMNZ7_YgTDimUiq8qUfxgOxifCLxvOsUQYXFlcVtYNziq-n2wfj85Kfg2j-7uQ4HGR3nEA63OKsO4YEu1XsPdvVbpKX9BuFBnnjDbH_PQjddQ7mSRm3659o",
  //   alt: "A newborn sleeping in a soft wool wrap in the studio",
  // },
  {
    eyebrow: "Behind the lens · Magic Vision",
    quote: "Every great photograph begins with a little celebration.",
    image: "/images/hero-instagram.webp",
    alt: "Magic Vision photographer celebrating with an I did this sign",
    position: "70% 50%",
  },
  {
    eyebrow: "Pre-wedding · A moment together",
    quote: "A little laughter, a little love, and a story just beginning.",
    image: "/images/hero-instagram-cg5.jpg",
    alt: "A couple sharing a playful pre-wedding moment outdoors",
    position: "center 72%",
  },
  {
    eyebrow: "A quiet backdrop · Pune",
    quote: "The beauty of a photograph begins with the feeling of a place.",
    image: "/images/hero-instagram-c3qq.webp",
    alt: "A weathered stone wall and a pale blue wooden door",
    position: "center 50%",
  },
];

export const atelierPhotos: AtelierPhoto[] = [
  {
    title: "A Ceremony in Red",
    category: "Maternity • Traditional",
    location: "Pune",
    alt: "Expectant parents in traditional outfits against a colorful ceremonial backdrop",
    image: "/images/instagram/portrait-01.webp",
  },
  {
    title: "Blue Tulle Portrait",
    category: "Maternity • Western",
    location: "Magic Vision Studio",
    alt: "An expectant mother in a flowing blue gown",
    image: "/images/instagram/portrait-02.webp",
  },
  {
    title: "Together in Tradition",
    category: "Maternity • Traditional",
    location: "Pune",
    alt: "Expectant parents posing together in traditional clothing",
    image: "/images/instagram/portrait-03.webp",
  },
  {
    title: "A Musical Moment",
    category: "Maternity • Traditional",
    location: "Pune",
    alt: "An expectant mother seated beside a traditional Indian instrument",
    image: "/images/instagram/portrait-04.webp",
  },
  {
    title: "Little Celebration",
    category: "Kids & 1st Birthday",
    location: "Magic Vision Studio",
    alt: "A young child dressed for a festive portrait",
    image: "/images/instagram/portrait-05.webp",
  },
  {
    title: "Saffron Silk",
    category: "Maternity • Traditional",
    location: "Pune",
    alt: "An expectant mother in a saffron traditional outfit",
    image: "/images/instagram/portrait-06.webp",
  },
  {
    title: "A Festive Portrait",
    category: "Kids & 1st Birthday",
    location: "Magic Vision Studio",
    alt: "A child in traditional dress during a festive portrait session",
    image: "/images/instagram/portrait-07.webp",
  },
  {
    title: "A Family-to-Be",
    category: "Maternity • Outdoor",
    location: "Pune",
    alt: "Expectant parents sharing a quiet moment outdoors",
    image: "/images/instagram/portrait-08.webp",
  },
  {
    title: "Garden Daydream",
    category: "Maternity • Outdoor",
    location: "Pune",
    alt: "An expectant mother relaxing in a garden setting",
    image: "/images/instagram/portrait-09.webp",
  },
  {
    title: "Seafoam Gown",
    category: "Maternity • Western",
    location: "Magic Vision Studio",
    alt: "An expectant mother in a flowing seafoam gown",
    image: "/images/instagram/portrait-10.webp",
  },
  {
    title: "Violet Tulle",
    category: "Maternity • Western",
    location: "Magic Vision Studio",
    alt: "An expectant mother in a violet tulle gown",
    image: "/images/instagram/portrait-11.webp",
  },
  {
    title: "A Baby Girl to Come",
    category: "Kids & 1st Birthday",
    location: "Magic Vision Studio",
    alt: "Expectant parents celebrating the upcoming arrival of their baby girl",
    image: "/images/instagram/portrait-12.webp",
  },
  {
    title: "Emerald Elegance",
    category: "Maternity • Traditional",
    location: "Pune",
    alt: "An expectant mother in an emerald green saree",
    image: "/images/instagram/portrait-13.webp",
  },
  {
    title: "Garden Green",
    category: "Maternity • Western",
    location: "Magic Vision Studio",
    alt: "An expectant mother in a green gown",
    image: "/images/instagram/portrait-14.webp",
  },
  {
    title: "A Quiet Embrace",
    category: "Maternity • Western",
    location: "Magic Vision Studio",
    alt: "Expectant parents sharing a tender studio portrait",
    image: "/images/instagram/portrait-15.webp",
  },
  {
    title: "Crimson Drapes",
    category: "Maternity • Traditional",
    location: "Pune",
    alt: "An expectant mother in a red draped outfit",
    image: "/images/instagram/portrait-16.webp",
  },
  {
    title: "Among the Trees",
    category: "Maternity • Outdoor",
    location: "Pune",
    alt: "Expectant parents standing together outdoors",
    image: "/images/instagram/portrait-17.webp",
  },
  {
    title: "In the Soft Light",
    category: "Maternity • Western",
    location: "Magic Vision Studio",
    alt: "Expectant parents in a softly lit studio portrait",
    image: "/images/instagram/portrait-18.webp",
  },
  // {
  //   title: "Traditional Silk Splendor",
  //   category: "Maternity • Traditional",
  //   location: "Pune",
  //   alt: "An expectant mother in a crimson silk saree and heirloom gold jewelry",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuC_13b2WpRcCNXl9fx71XCHqmh_mxXjcsUQulKYWXm5s_XrN_UmGhpjNRThtb3e-rOxGIMJsmfyZOaeMxW1QFIXrh5DJTOmLieFJz77pF8EDkZ9zbWj3MWyEQjD-eAoXFZtVee_bjT1MxN1jamow13vtRMh-sWoELKYs6scuLzWSjAUDr3_cJfyjYtC3FQHPmMgyeHU9WW3x67XrCYqhh-71B0ClO5KIEfwcIkGKec",
  // },
  // {
  //   title: "Ethereal Cloud Gown",
  //   category: "Maternity • Western",
  //   location: "Magic Vision Studio",
  //   alt: "A maternity portrait with a flowing champagne tulle cape",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAul2eCPPvML5qXT8lrcyF8w_Nb6UEPFMqZa0aWlcdGAhCN2SQ51dnmaB3iLf1b2Kt35JddKhgxwpLEDn8jMVnGcP5UywLXFRmAVVBBAOdj78oroy3bjFgk66sXQRylqRG7XiwbL9ImaRlzdRWqh8twnZigVgjrlEdnvz73s1jkLYyPSP4qCcPLlJktt1wZDWpu8PZArQYuHSmmqB9KZwZEYDKcSVJXab8CGNP1iEo",
  // },
  // {
  //   title: "",
  //   category: "Maternity • Outdoor",
  //   location: "Pune",
  //   alt: "Expectant parents together in the golden light among tall grasses",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuCLm9BqF0uDjuVKp5mmJUGbb8pCNeg2x-gGdC2_kEaTNdNcFmCr207E48ZiCR3RJ_mnDlXIGWMZ0Dpspo2AJRAXIHVciWkyN-8Z1D6ZoFJRdvM3mI20W6JOT4pMM-Ug09G4m_fN-j5K9zPKe-pUDYumkiOApUwv2wJv1P4Uv71gR-W0QB7usIgulrhCQy9v7cAAAiK_WvCdWGqJr-2tvW6Cs6VPnLC2s_gdZaNwuoE",
  // },
  // {
  //   title: "First Birthday Joy",
  //   category: "Kids & 1st Birthday",
  //   location: "Magic Vision Studio",
  //   alt: "A happy one-year-old celebrating with a little cake",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDOHvw9t71q20gxp9pXzO2J-UXQDKMS_REx27oUXZJ5gNJiBDIcRkf5_3ep6w1xhDqvvY8MnqR6OCdKHeqtyGfeXyvbRk7WMrPxo1JlTI_68aaqPlTtwrJ_q6mK0Ezil9eRXU3Z9xhW95zhMA-hV7j5GaWNqB_cbONtYgeyqXv3r3LTKa8VF98dmrFhUMvoJq6et93B53DlyyFlVc34_CY7nd0HAQQnvr7qioHtjeM",
  // },
];

export const photoFilters = [
  "All Work",
  "Maternity • Traditional",
  "Maternity • Western",
  "Maternity • Outdoor",
  "Kids & 1st Birthday",
] as const;
export type PhotoFilter = (typeof photoFilters)[number];

export function matchesPhotoFilter(photo: AtelierPhoto, filter: PhotoFilter) {
  return filter === "All Work" || photo.category === filter;
}

export const instagramPhotos = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZSqRTQ5pb5s3ZrE9CJdx8nlL63UxcqiubYTlHiw1F4A7z8AveqzFhkkQ_Un83s0O9KyQ4oa36lBOSHXvXET8dxmAf941r79GHKc8as0QE_QiX4owcd7on-McTJCUJemPMUmujLQRfpEJkza_Pi2HyUtfTZFmzUUJ9-qPkroiCqPGvvM_CeHuq3uN-zbjzEnajbbtJhdBBeTH8fns8Das72-gCoMGwglChe-ufBbc",
    alt: "A mother-to-be in a warm red maternity gown",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQCwz7AdcnvctTSuVXc-AE9uAodHTqeGWw2WgwpTcBFb0N9Pm_MQ0Nl-j27bBx_TXU7cBolr41dfUM6cTH-BuHF3ZL18A68S4S7TYDn4TV5iZ_Nl97BRyob9zS3VlGCmpZ3YAi8h3XeHaPR3054TBHZIULCf-JGCbBOUuA7aik29mOrIebjBSFOsT0e3ZOybHc1MOITugr-lnWQ4mekeglHiw5WYFrH1JU9vx6Yjc",
    alt: "A tiny newborn wrapped in soft cream wool",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtgfoABQQVWfPOBGzi-gnr7DXqyTVdLDUtPYqjRXBiSAiwsBVsd3nkY0uT1-8Cdb7F1fESqMYbVX2j9mDMM8vbpYy4FEu_DsrqmshKadfZOAEsdj579dGGXkf-D9DuqkxHctOjII5UdQcjCj1fYiVWWh0oPuLvPv8LrNUCsaSH5SqJKjQSBb9r_Q4TJe_H9TOmhwHwmeakJjCPo7yJYqLA7x66EqBdZ0kad2Uof9E",
    alt: "Arju styling a maternity session in the studio",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUwZzr5Y7viTzSFhcQrfHki6WgGZOEe7rjITTQ5AirDT7X2TU277LS2E8nl4mHEHwJzCfRjv7OJ6a0zWNhj1sJUYYJvmSmZ7VGL9lbIpVQisIjJLSnVbE-HeP2jWfjkJKu4s4IuuUMMVz-MtgbC-qIoV9Sr2sgv5cmhyPIGvsRY3yPdRewMbnbWVxKmvmcN7umfsakNPbD4cCh49EwCNh97eBW-4Px8cW0srgQa7U",
    alt: "A toddler smiling during a cake smash portrait",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADW1CQWUHsGCipITSBUd9oNQS9VGKh9VCpfk3fXJsLd9a2ZbwFh7ARb58uw2O1cg6ahv-3D39aGEOz91hr2q8Aa6IPdHYd7C_C9Q7XYsJd0CNW07dfV_WOs0HkczKyx6Q_fqgue2OQ3m7q6H8qCBu9kjuIcocDjktYl1KzDUmnSv8IHVs_YJaPRQvSl8faT4TArqGn3feWzc-W51rWUS66J9L-yX6P5tcO18H9PNY",
    alt: "A maternity couple in the last light of the day",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVfB65cEwFOgc59_6s_bSBlNfvOe30g-S9OAKwe-O3vbAjFP5DKG5-vJ80SQAQw73EAiHn8QcTPekecggm1KYXHzDYU-T-CedQuyr9s3G1t3UWvh6TAayA4YTD5aMwjeG8jDCnjlUFfzA1_gojBrKoTVf_xithCCmN-MTekNKjYzKM0wbmIOUsY83CFmkCo5dpwrYQW5MxGQewOdeAGRFMe87UNehbvWbbptmN9Hg",
    alt: "An open heirloom photo album",
  },
];

export const founders = [
  {
    name: "Ashpak",
    role: "Co-founder & Lead Photographer",
    intro: "Lead photographer",
    bio: "Ashpak has over eight years of experience behind the camera. He loves working with light and capturing natural, honest moments. His portraits feel warm and timeless.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmU5RoAPe1a6K0q1orFSy844LOp0L67MSWtg6wcdT_lL8lhPflq_agT6MI1_9WBAD6friINrpByjsfigfjMtI1lmUM4USBIPN6NvIdGT--INmrpL9r9f_f--n9jeBXM2TW1aljMZsaTVvHvDqQqZ654YXiPi14HzSxehzCNltIYNWCDrz8Yk6sFFgZx_8iK1fj3rIf-yxR9A52V9Hl9RDfiHRKjIKt7vUm_z-KYXE",
  },
  {
    name: "Arju",
    role: "Co-founder & Maternity and Newborn Stylist",
    intro: "Creative director & stylist",
    bio: "Arju takes care of the little details, from styling outfits to helping mothers feel comfortable. She also makes sure every baby is handled with care during the session.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuzEBNj3gsmW3P4lXiD6_CdGMPeOF9YENUBAlbGjuyN7LQgBrEdn5NsEE-TXftZS1gDDPrYkKB3Tl3Lw37UHKfDTntwYCOFYrO3cbtvnqRf7w9KWvk6qLx0AAbRKGYP5iRQKIzWNQbLqDGOtrw9R0hUWDMg8EqpODs4KY3TZchdL79WYrPldeLP7bnb3VkdlJ6DemDPe4VH_qY8S6wS6SQKvcOuPA0pSoy5-PBzbQ",
  },
];

export const experiencePackages = [
  {
    name: "Maternity Package 1",
    group: "Maternity Photography",
    mood: "Studio + Garden",
    note: "2 outfit changes · Makeup not included",
    price: "₹2,999",
    category: "Maternity Photography Session",
    includes: [
      "15 edited soft copies (limited clicks)",
      "All raw photos included",
      "1 saree and 1 magic gown included for the shoot",
      "Standard props included; Veena props excluded",
      "Prints: ₹50 each (6×8 in); Shiv Shahi Wada excluded",
    ],
  },
  {
    name: "Maternity Package 2",
    group: "Maternity Photography",
    mood: "Studio only",
    note: "2 outfit changes · Makeup artist available",
    price: "₹3,999",
    category: "Maternity Photography Session",
    includes: [
      "15 edited soft copies (limited clicks)",
      "All raw photos included",
      "1 saree and 1 magic gown included for the shoot",
      "Standard props included; Veena props excluded",
      "Prints: ₹50 each (6×8 in); Shiv Shahi Wada excluded",
    ],
  },
  {
    name: "Maternity Package 3",
    group: "Maternity Photography",
    mood: "Studio + Garden",
    note: "3 outfit changes · 30-second reel included",
    price: "₹4,999",
    category: "Maternity Photography Session",
    includes: [
      "25 edited soft copies (limited clicks) and all raw photos",
      "1 saree and 2 magic gowns included for the shoot",
      "Standard props included; Veena props excluded",
      "Makeup artist available",
      "Prints: ₹50 each (6×8 in); garden and Shiv Shahi Wada fees excluded",
    ],
  },
  {
    name: "Maternity Package 4",
    group: "Maternity Photography",
    mood: "Shiv Shahi Wada",
    note: "1 outfit change · 1-minute reel included",
    price: "₹6,999",
    category: "Maternity Photography Session",
    includes: [
      "20 edited soft copies (limited clicks) and all raw photos",
      "1 saree included for the shoot",
      "Standard props included; rose petals excluded",
      "Makeup artist available",
      "Prints: ₹50 each (6×8 in)",
    ],
  },
  {
    name: "Maternity Package 5",
    group: "Maternity Photography",
    mood: "Wada + Studio + Garden",
    note: "3 outfit changes · 1-minute reel included",
    price: "₹9,999",
    category: "Maternity Photography Session",
    includes: [
      "30 edited soft copies (limited clicks) and all raw photos",
      "1 saree, 1 studio premium gown and 1 garden magic gown",
      "Standard props included; rose petals excluded",
      "Makeup artist available",
      "Prints: ₹50 each (6×8 in); garden charges excluded",
    ],
  },
  {
    name: "Maternity Package 6",
    group: "Maternity Photography",
    mood: "Weekday home session",
    note: "Available on weekdays · 2 outfit changes",
    price: "₹5,999",
    category: "Maternity Photography Session",
    includes: [
      "20 edited soft copies (limited clicks) and all raw photos",
      "1 saree and 1 magic gown included",
      "30-second reel and makeup artist included",
      "Standard props included; Veena props excluded",
      "Prints: ₹50 each (6×8 in); garden charges excluded",
    ],
  },
  /*
  {
    name: "Kids Essential",
    group: "Kids Photography",
    mood: "Playful joy",
    note: "Milestones & little everyday moments",
    price: "₹12,999 onwards",
    category: "Kids & 1st Birthday / Cake Smash",
    includes: [
      "A fun, child-paced portrait session",
      "Choice of a simple studio setup",
      "Family and sibling candid moments",
      "Artistically retouched high-resolution files",
    ],
  },
  {
    name: "Birthday Signature",
    group: "Kids Photography",
    mood: "A little more magic",
    note: "For birthdays and growing personalities",
    price: "Enquire for pricing",
    category: "Kids & 1st Birthday / Cake Smash",
    includes: [
      "2 custom themes: boho, royal, or pastel",
      "Optional cake smash & warm bubble bath",
      "Family and sibling candid moments",
      "Artistically retouched high-resolution files",
    ],
  },
  {
    name: "Birthday Heirloom",
    group: "Kids Photography",
    mood: "Made to treasure",
    note: "A keepsake collection for the birthday celebration",
    price: "Enquire for pricing",
    category: "Kids & 1st Birthday / Cake Smash",
    includes: [
      "A relaxed birthday session with time to play",
      "Custom theme styling for the celebration",
      "Cake smash and family portraits",
      "Private gallery of edited photographs",
    ],
  },
  */
];

export const studioStandards = [
  {
    title: "Your story, your style",
    text: "Choose the mood and look that feel like you. We’ll shape the session around your ideas and comfort.",
  },
  {
    title: "Gentle guidance throughout",
    text: "From simple posing tips to outfit adjustments, we help you feel relaxed and confident in front of the camera.",
  },
  {
    title: "Photographs that feel like you",
    text: "Careful editing keeps the colours true, the light soft, and the little details that make your moment yours.",
  },
  {
    title: "Made to revisit for years",
    text: "Take home the images you love in a private digital gallery, with printed keepsakes available to order.",
  },
];

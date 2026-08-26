import { CategoryItem, FeaturedLookItem, LookbookImage, StoreHourDay } from '../types';

export const collectionsData: CategoryItem[] = [
  {
    id: 'suits',
    key: 'suits',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop',
    ],
    titleEn: 'Suits',
    titleAm: 'ሱፎች',
    descriptionEn: 'Elegant formalwear for important occasions.',
    descriptionAm: 'ለክብር እና ለትልልቅ ፕሮግራሞች የተዘጋጁ ውብ የሱፍ ስብስቦች።',
    highlightsEn: [
      'Single & Double-Breasted Cuts',
      'Three-Piece Tailored Suits',
      'Slim & Modern Classic Fits',
      'Premium Wool-Blend Fabrics',
    ],
    highlightsAm: [
      'ባለ አንድ እና ባለ ሁለት ደረት ስፌቶች',
      'የተሟሉ ባለ ሦስት ክፍል ሱፎች',
      'ዘመናዊ እና ክላሲክ ቅርጾች',
      'ጥራት ያላቸው የጨርቅ ምርጫዎች',
    ],
  },
  {
    id: 'clothing',
    key: 'clothing',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop',
    ],
    titleEn: "Men's Clothing",
    titleAm: 'የወንዶች አልባሳት',
    descriptionEn: 'Modern and refined everyday and formal pieces.',
    descriptionAm: 'ለዕለት ተዕለት እና ለቢሮ አገልግሎት የሚውሉ ዘመናዊ አልባሳት።',
    highlightsEn: [
      'Crisp Dress Shirts & Oxford Button-Downs',
      'Tailored Trousers & Chinos',
      'Smart Blazers & Structured Jackets',
      'Knit Polo Shirts & Outerwear',
    ],
    highlightsAm: [
      'ጥራት ያላቸው ሸሚዞች እና ኦክስፎርድ ልብሶች',
      'የተዋቡ ሱሪዎች እና ቺኖዎች',
      'ዘመናዊ ጃኬቶች እና ኮቶች',
      'ፖሎዎች እና የወንዶች ፋሽኖች',
    ],
  },
  {
    id: 'shoes',
    key: 'shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop',
    ],
    titleEn: 'Shoes',
    titleAm: 'ጫማዎች',
    descriptionEn: 'Complete the look with stylish men’s footwear.',
    descriptionAm: 'አለባበስዎን የሚያደምቁ ውብ የወንዶች የቆዳ ጫማዎች።',
    highlightsEn: [
      'Classic Oxford & Derby Leather Shoes',
      'Double Monk-Strap Footwear',
      'Penny Loafers & Tassel Loafers',
      'Smart Formal Dress Shoes',
    ],
    highlightsAm: [
      'ክላሲክ ኦክስፎርድ እና ደርቢ የቆዳ ጫማዎች',
      'ባለ ማንጠልጠያ ሞንክ ስትራፕ ጫማዎች',
      'የተዋቡ ሎፈሮች',
      'ለክብር ዝግጅት የሚሆኑ የፋሽን ጫማዎች',
    ],
  },
  {
    id: 'accessories',
    key: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=1000&auto=format&fit=crop',
    ],
    titleEn: 'Accessories',
    titleAm: 'መለዋወጫዎች',
    descriptionEn: 'Finishing details for a polished appearance.',
    descriptionAm: 'ለተሟላ እና ለደመቀ ገጽታ የሚረዱ ጌጣጌጦችና መለዋወጫዎች።',
    highlightsEn: [
      'Silk Neckties & Bow Ties',
      'Pocket Squares & Lapel Pins',
      'Leather Belts with Polished Buckles',
      'Cufflinks & Tie Clips',
    ],
    highlightsAm: [
      'የሐር ከራቫቶች እና ቦውታዮች',
      'የኪስ ፎጣዎች እና የኮት ፒኖች',
      'ጥራት ያላቸው የቆዳ ቀበቶዎች',
      'ካፍሊንኮች እና የከራቫት መያዣዎች',
    ],
  },
  {
    id: 'wedding',
    key: 'wedding',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    featuredImages: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    ],
    titleEn: 'Wedding & Formal',
    titleAm: 'ሠርግ እና ክብር ዝግጅት',
    descriptionEn: 'Sophisticated looks for weddings and special occasions.',
    descriptionAm: 'ለሠርግ እና ለየት ላሉ ዝግጅቶች የተዘጋጁ የከበሩ የአለባበስ አማራጮች።',
    highlightsEn: [
      'Groom Bespoke Wedding Tuxedos',
      'Coordinated Groomsmen Attire',
      'Black Tie & Gala Ensembles',
      'Velvet & Satin Accent Pieces',
    ],
    highlightsAm: [
      'ለሙሽራ የተዘጋጁ ልዩ የሰርግ ታክሲዶዎች',
      'የተጣጣሙ የሚዜ አልባሳት',
      'የምሽት እና የጋላ ስብስቦች',
      'የቬልቬት እና የሳቲን ዝርዝር ያላቸው ዲዛይኖች',
    ],
  },
];

export const featuredLooksData: FeaturedLookItem[] = [
  {
    id: 'look-1',
    nameEn: 'Midnight Navy 3-Piece Ensemble',
    nameAm: 'ሚድናይት ኔቪ ባለ ሦስት ክፍል ሱፍ',
    tagEn: 'Executive & Ceremony',
    tagAm: 'ለስራና ለክብር ዝግጅት',
    descriptionEn: 'Deep navy wool blend with a sculpted waistline, matching vest, and crisp poplin shirt.',
    descriptionAm: 'ጥልቅ ሰማያዊ ቀለም ያለው ባለ ሶስት ክፍል ሱፍ፣ ከተጣጣመ ቬስት እና ነጭ ሸሚዝ ጋር።',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop',
    piecesEn: [
      'Tailored Midnight Navy Jacket with Notch Lapel',
      'Double-Breasted Coordinating Waistcoat',
      'Flat-Front Slim Trousers',
      'Crisp White Spread-Collar Shirt',
      'Textured Silk Navy Tie & Polished Pocket Square',
    ],
    piecesAm: [
      'ሚድናይት ኔቪ ኮት',
      'የተጣጣመ ቬስት',
      'ዘመናዊ ስሊም ሱሪ',
      'ነጭ ሸሚዝ',
      'የሐር ከራቫት እና የኪስ ፎጣ',
    ],
    fitEn: 'Tailored Slim Fit',
    fitAm: 'ዘመናዊ ስሊም ቅርጽ',
    occasionEn: 'Formal Meetings, Galas, Weddings',
    occasionAm: 'ለከበሩ ስብሰባዎች፣ ለምሽት እና ለሠርግ ፕሮግራሞች',
  },
  {
    id: 'look-2',
    nameEn: 'Sartorial Charcoal Double-Breasted',
    nameAm: 'ክላሲክ ቻርኮል ባለ ሁለት ደረት ሱፍ',
    tagEn: 'High-Impact Power Suit',
    tagAm: 'የተከበረ ቢዝነስ ፋሽን',
    descriptionEn: 'Peak lapel double-breasted suit designed for presence, authority, and timeless masculine elegance.',
    descriptionAm: 'ባለ ሰፊ አንገትጌ ሁለት ደረት ሱፍ፣ የተሟላ ግርማ ሞገስን የሚያላብስ ምርጥ ዲዛይን።',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop',
    piecesEn: [
      '6-Button Charcoal Double-Breasted Blazer',
      'Structured Tapered Trousers',
      'Micro-Stripe Italian Cut Dress Shirt',
      'Solid Charcoal Silk Tie & Metal Lapel Pin',
      'Burnished Black Oxford Shoes',
    ],
    piecesAm: [
      'ባለ 6 ቁልፍ ቻርኮል ጃኬት',
      'የተዋበ ሱሪ',
      'ጥራት ያለው ሸሚዝ',
      'የሐር ከራቫት እና የኮት ፒን',
      'የሚያብረቀርቅ ጥቁር ኦክስፎርድ ጫማ',
    ],
    fitEn: 'Classic Structured Silhouette',
    fitAm: 'ክላሲክ የክብር ቅርጽ',
    occasionEn: 'Boardroom, VIP Dinners, Keynotes',
    occasionAm: 'ለከፍተኛ አመራር ስብሰባዎች እና ለክብር እራት',
  },
  {
    id: 'look-3',
    nameEn: 'Black-Tie Shawl-Lapel Tuxedo',
    nameAm: 'የምሽት ታክሲዶ ከሳቲን አንገትጌ ጋር',
    tagEn: 'Evening & Black Tie',
    tagAm: 'ለጋላ እና ለምሽት ፕሮግራም',
    descriptionEn: 'Satin shawl lapel dinner jacket paired with grosgrain-trimmed trousers and patent leather accents.',
    descriptionAm: 'የሳቲን አንገትጌ ያለው ጥቁር ታክሲዶ፣ ለደመቁ የምሽት ክብረ በዓላት ፍጹም ምርጫ።',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    piecesEn: [
      'Jet Black Satin Shawl Lapel Dinner Jacket',
      'Tuxedo Trousers with Satin Side Stripe',
      'Pleated Front Wing-Tip Tuxedo Shirt',
      'Hand-Tied Silk Bow Tie & Cummerbund',
      'High-Shine Patent Leather Shoes',
    ],
    piecesAm: [
      'ጥቁር የሳቲን አንገትጌ ታክሲዶ ኮት',
      'የሳቲን መስመር ያለው ታክሲዶ ሱሪ',
      'የታክሲዶ ነጭ ሸሚዝ',
      'የሐር ቦውታይ',
      'የሚያብረቀርቅ ጥቁር ጫማ',
    ],
    fitEn: 'Modern Black-Tie Tailoring',
    fitAm: 'ዘመናዊ የታክሲዶ ስፌት',
    occasionEn: 'Red Carpet, Black-Tie Galas, Groom Attire',
    occasionAm: 'ለጋላ ዝግጅቶች፣ ለሙሽራ እና ለክብር ምሽቶች',
  },
  {
    id: 'look-4',
    nameEn: 'Imperial Groom Ivory & Gold Tuxedo',
    nameAm: 'የሙሽራ አይቮሪ እና ወርቃማ ታክሲዶ',
    tagEn: 'Wedding Masterpiece',
    tagAm: 'ልዩ የሠርግ አለባበስ',
    descriptionEn: 'Luminous ivory dinner jacket accented with subtle woven micro-patterns and black contrast details.',
    descriptionAm: 'አይቮሪ ቀለም ያለው የሙሽራ ኮት ከጥቁር ሱሪ እና ወርቃማ መለዋወጫዎች ጋር።',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    piecesEn: [
      'Lustrous Ivory Single-Button Dinner Jacket',
      'Contrasting Midnight Black Tailored Trousers',
      'Egyptian Cotton French-Cuff Dress Shirt',
      'Gold Accent Cufflinks & Studs',
      'Handcrafted Velvet Loafers',
    ],
    piecesAm: [
      'አይቮሪ የሙሽራ ኮት',
      'ጥቁር የተዋበ ሱሪ',
      'ጥራት ያለው ነጭ ሸሚዝ',
      'ወርቃማ ካፍሊንክስ',
      'የተዋቡ ቬልቬት ሎፈሮች',
    ],
    fitEn: 'Celebration Tailored Fit',
    fitAm: 'የሠርግ ልዩ ስፌት',
    occasionEn: 'Weddings, Reception Entries, Grand Celebrations',
    occasionAm: 'ለሠርግ፣ ለስነ-ስርዓት መግቢያ እና ለትልልቅ በዓላት',
  },
];

export const lookbookData: LookbookImage[] = [
  {
    id: 'lb-1',
    titleEn: 'The Executive Navy Classic',
    titleAm: 'ክላሲክ ኔቪ የቢዝነስ ሱፍ',
    category: 'business',
    categoryNameEn: 'Business',
    categoryNameAm: 'የስራ / ቢዝነስ',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    captionEn: 'Three-piece Italian wool cut suited for high-level business presentations.',
    captionAm: 'ለከፍተኛ የስራ ስብሰባዎችና ውይይቶች የሚመጥን ባለ ሶስት ክፍል ሱፍ።',
  },
  {
    id: 'lb-2',
    titleEn: 'Black-Tie Velvet Masterwork',
    titleAm: 'የምሽት ቬልቬት ኮት',
    category: 'evening',
    categoryNameEn: 'Evening',
    categoryNameAm: 'የምሽት ፕሮግራም',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    captionEn: 'Deep jewel-tone dinner jacket for unforgettable black-tie evenings.',
    captionAm: 'ለደመቀ የምሽት ፕሮግራም የተዘጋጀ ውብ የቬልቬት ኮት።',
  },
  {
    id: 'lb-3',
    titleEn: 'The Groom Regal Look',
    titleAm: 'የሙሽራ የክብር አለባበስ',
    category: 'wedding',
    categoryNameEn: 'Wedding',
    categoryNameAm: 'የሠርግ',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    captionEn: 'Impeccable styling for the groom on his most meaningful milestone.',
    captionAm: 'በልዩ ቀንዎ ሙሉ ውበትን የሚያላብስ የሙሽራ አለባበስ።',
  },
  {
    id: 'lb-4',
    titleEn: 'Double-Breasted Charcoal Silhouette',
    titleAm: 'ባለ ሁለት ደረት ቻርኮል ሱፍ',
    category: 'formal',
    categoryNameEn: 'Formal',
    categoryNameAm: 'የክብር / ፎርማል',
    imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    captionEn: 'Sharply tailored shoulders and peak lapels defining modern masculinity.',
    captionAm: 'ዘመናዊ የወንዶች ጥንካሬንና ውበትን የሚያሳይ የሱፍ ስፌት።',
  },
  {
    id: 'lb-5',
    titleEn: 'Smart Casual Linen & Blazer',
    titleAm: 'ስማርት ካዥዋል ብሌዘር',
    category: 'smart-casual',
    categoryNameEn: 'Smart Casual',
    categoryNameAm: 'ስማርት ካዥዋል',
    imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    captionEn: 'Effortless sophistication with premium textured shirt and tailored trousers.',
    captionAm: 'ዘና ባለ ሁኔታ የተዋበ ቁመናን የሚፈጥር ስማርት ካዥዋል ፋሽን።',
  },
  {
    id: 'lb-6',
    titleEn: 'Artisan Oxford Footwear Focus',
    titleAm: 'የተመረጡ ኦክስፎርድ ጫማዎች',
    category: 'formal',
    categoryNameEn: 'Formal',
    categoryNameAm: 'የክብር / ፎርማል',
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'wide',
    captionEn: 'Hand-burnished leather craftsmanship to anchor any bespoke outfit.',
    captionAm: 'ለማንኛውም ሙሉ አለባበስ የመጨረሻ ውበት የሚሰጡ ጥራት ያላቸው የቆዳ ጫማዎች።',
  },
  {
    id: 'lb-7',
    titleEn: 'Black Shawl Gala Tuxedo',
    titleAm: 'ጥቁር የጋላ ታክሲዶ',
    category: 'evening',
    categoryNameEn: 'Evening',
    categoryNameAm: 'የምሽት ፕሮግራም',
    imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    captionEn: 'Timeless satin trim detailing crafted for formal society events.',
    captionAm: 'ለክብር ፕሮግራሞች የተዘጋጀ ጊዜ የማይሽረው የክላሲክ ታክሲዶ ስፌት።',
  },
  {
    id: 'lb-8',
    titleEn: 'Silk & Metal Sartorial Accents',
    titleAm: 'የሐርና የብረት መለዋወጫዎች',
    category: 'formal',
    categoryNameEn: 'Formal',
    categoryNameAm: 'የክብር / ፎርማል',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    captionEn: 'The fine details that elevate a suit into a signature statement.',
    captionAm: 'አለባበስዎን ልዩ የሚያደርጉ ጥቃቅን የፋሽን መለዋወጫዎች።',
  },
  {
    id: 'lb-9',
    titleEn: 'Coordinated Wedding Ceremony Ensemble',
    titleAm: 'የተሟላ የሠርግ ስብስብ',
    category: 'wedding',
    categoryNameEn: 'Wedding',
    categoryNameAm: 'የሠርግ',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'tall',
    captionEn: 'Harmonized styling curated for unforgettable celebrations.',
    captionAm: 'ለማይረሳ የሠርግ በዓል የተዘጋጀ የተጣጣመ አለባበስ።',
  },
];

export const storeSchedule: StoreHourDay[] = [
  { dayEn: 'Monday', dayAm: 'ሰኞ', hoursEn: '8:30 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 2:30 – ማታ 3:00', isOpenToday: false, isSunday: false },
  { dayEn: 'Tuesday', dayAm: 'ማክሰኞ', hoursEn: '8:30 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 2:30 – ማታ 3:00', isOpenToday: false, isSunday: false },
  { dayEn: 'Wednesday', dayAm: 'ረቡዕ', hoursEn: '8:30 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 2:30 – ማታ 3:00', isOpenToday: false, isSunday: false },
  { dayEn: 'Thursday', dayAm: 'ሐሙስ', hoursEn: '8:30 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 2:30 – ማታ 3:00', isOpenToday: false, isSunday: false },
  { dayEn: 'Friday', dayAm: 'ዓርብ', hoursEn: '8:30 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 2:30 – ማታ 3:00', isOpenToday: false, isSunday: false },
  { dayEn: 'Saturday', dayAm: 'ቅዳሜ', hoursEn: '8:30 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 2:30 – ማታ 3:00', isOpenToday: false, isSunday: false },
  { dayEn: 'Sunday', dayAm: 'እሁድ', hoursEn: '12:00 PM – 7:30 PM', hoursAm: 'ከቀኑ 6:00 – ምሽቱ 1:30', isOpenToday: false, isSunday: true },
];

/**
 * Calculates current open/closed status in East Africa Time (UTC+3)
 */
export function getStoreStatus(lang: 'en' | 'am') {
  // Current time converted to Addis Ababa timezone (EAT = UTC+3)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const eatTime = new Date(utc + (3600000 * 3));
  
  const day = eatTime.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
  const hours = eatTime.getHours();
  const minutes = eatTime.getMinutes();
  const decimalHour = hours + (minutes / 60);

  let isOpen = false;
  let closingTimeTextEn = '';
  let closingTimeTextAm = '';

  if (day === 0) {
    // Sunday: 12:00 PM to 7:30 PM (12.0 to 19.5)
    isOpen = decimalHour >= 12.0 && decimalHour < 19.5;
    closingTimeTextEn = 'Closes at 7:30 PM';
    closingTimeTextAm = 'ምሽቱ 1:30 ላይ ይዘጋል';
  } else {
    // Mon - Sat: 8:30 AM to 9:00 PM (8.5 to 21.0)
    isOpen = decimalHour >= 8.5 && decimalHour < 21.0;
    closingTimeTextEn = 'Closes at 9:00 PM';
    closingTimeTextAm = 'ማታ 3:00 ላይ ይዘጋል';
  }

  return {
    isOpen,
    currentDayIndex: day === 0 ? 6 : day - 1,
    statusText: isOpen
      ? (lang === 'en' ? `Open Now • ${closingTimeTextEn}` : `አሁን ክፍት ነው • ${closingTimeTextAm}`)
      : (lang === 'en' ? 'Currently Closed • Opens at 8:30 AM (Sun 12:00 PM)' : 'አሁን ዝግ ነው • በስራ ሰዓት ክፍት ነው'),
  };
}


import { 
  Briefcase, 
  Cpu, 
  Video, 
  DollarSign, 
  ShoppingCart, 
  Layout, 
  CheckCircle,
  FileSpreadsheet,
  TrendingUp,
  FileSearch,
  PenTool
} from 'lucide-react';
import { Service, Certificate, Product } from './types';

export const BUSINESS_LOGO = "https://i.imgur.com/F1d2M3h.png"
export const TECH_SECTION_BG = "https://i.imgur.com/PAX54QN.png"
export const MULTIMEDIA_BG = "https://i.imgur.com/wvkH5wg.jpeg"
export const FINANCE_BG = "https://i.imgur.com/a3RGiNx.png"
export const AUTOCAD_BG = "https://i.imgur.com/Bmv9Fjz.png"
export const E_COMMERCE_BG = "https://i.imgur.com/XFLRI9s.jpeg"
export const EXPERTISE_BG = "https://i.imgur.com/dpYGZ1Z.jpeg"
export const FOCUS_VIDEO_URL = "https://i.imgur.com/55g08EV.mp4"

export const AMAZON_PRODUCTS: Product[] = [
  {
    id: 1,
    url: "https://www.amazon.com/dp/B0BNZJSQXS?customId=B07537HQXD&customizationToken=MC_Assembly_1%23B07537HQXD&th=1&psc=1",
    image: "https://m.media-amazon.com/images/I/B1fRqw30NVL._CLa%7C2140%2C2000%7C91Cq1hFY%2B9L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
    label: "Party Tee"
  },
  {
    id: 2,
    url: "https://www.amazon.com/dp/B0BPN7FKSV?th=1",
    image: "https://m.media-amazon.com/images/I/71Q-2btkC7L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    label: "Love Pillow"
  },
  {
    id: 3,
    url: "https://www.amazon.com/dp/B0BPNBGSL9?customId=B0752XJYNL&customizationToken=MC_Assembly_1%23B0752XJYNL&th=1&psc=1",
    image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7CA11bIigHOTL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
    label: "Ying-Yang Tee"
  },
  {
    id: 4,
    url: "https://www.amazon.com/dp/B0BP5FX1FT?customId=B0752XJYNL&customizationToken=MC_Assembly_1%23B0752XJYNL&th=1&psc=1",
    image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81N95esovPL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
    label: "Family JA Tee"
  },
  {
    id: 5,
    url: "https://www.amazon.com/dp/B0BP58YL5S",
    image: "https://m.media-amazon.com/images/I/51XaIoYKctL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    label: "Family Together JA PopSocket"
  },
  {
    id: 6,
    url: "https://www.amazon.com/dp/B0BNZYLYLW?customId=B078RWLY49&customizationToken=MC_Assembly_1%23B078RWLY49&th=1&psc=1",
    image: "https://m.media-amazon.com/images/I/A18Zbr2L5LL._CLa%7C2140%2C2000%7CA1t2FYZwLZL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
    label: "Family Bullseye Tee"
  },
  {
    id: 7,
    url: "https://www.amazon.com/dp/B0BRDZFZWK",
    image: "https://m.media-amazon.com/images/I/81tMghxCqHL._AC_SX679_.jpg",
    label: "Catsqunny Tote Bag"
  },
  {
    id: 8,
    url: "https://www.amazon.com/dp/B0BRF2MCCB",
    image: "https://m.media-amazon.com/images/I/514kyu6WiyL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    label: "Catsqunny PopSocket"
  },
  {
    id: 9,
    url: "https://www.amazon.com/dp/B0BPGDHN6D",
    image: "https://m.media-amazon.com/images/I/617k1sfv8XL._AC_SX679_.jpg",
    label: "Natural Hair Tote Bag"
  },
  {
    id: 10,
    url: "https://www.amazon.com/dp/B0BNM7QXR4?customId=B07KZ2LXGM&customizationToken=MC_Assembly_1%23B07KZ2LXGM&th=1&psc=1",
    image: "https://m.media-amazon.com/images/I/A16YlCTQRlL._CLa%7C2140%2C2000%7C81peWY8FmRL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
    label: "Psychedelic V-Neck JA Tee"
  },
  {
    id: 11,
    url: "https://www.amazon.com/dp/B0BNMFBK6P",
    image: "https://m.media-amazon.com/images/I/714qWLqLkAL._AC_SX679_.jpg",
    label: "Psychedelic JA Tote Bag"
  }
];

export const SERVICES: Service[] = [
  {
    id: 'technical-services',
    title: 'Engineering & Technical Services',
    category: 'Technical',
    description: 'Cutting-edge engineering solutions employing 6Sigma methodology and advanced data management.',
    details: [
      'Advanced Excel Workbooks with pivot tables, V-Lookup, and custom formulas',
      'Six Sigma/Process Improvement: Standardizing and streamlining production',
      'Validation Engineering: IQ/OQ protocols, Risk Assessments, and VMPs',
      'Compliance with cGxP and 21 CFR Part 11 requirements',
      'Process flow charting and workspace optimization (5S)',
      'DMAIC methodology for operational problem solving'
    ],
    bgImage: TECH_SECTION_BG,
    icon: 'Cpu'
  },
  {
    id: 'multimedia-production',
    title: 'Cross Media Video Productions',
    category: 'Multimedia',
    description: 'Personal and professional slideshow video productions for business, life milestones, and commemorations.',
    details: [
      'Corporate presentations',
      'Commemorative videos for transitions and memorials',
      'Festive presentations for birthdays, anniversaries, and graduations',
      'Customized media blending (photos, video clips, favorite songs, poems)',
      'Digital platforms for sharing sentiments remotely',
      'Social media and direct link sharing capability'
    ],
    bgImage: MULTIMEDIA_BG,
    icon: 'Video',
    ctaLink: 'https://www.fiverr.com/s/Kmekbz'
  },
  {
    id: 'autocad-design',
    title: 'AutoCAD Design',
    category: 'Design',
    description: 'Intricate designs that push boundaries and reimagine physical spaces.',
    details: [
      'Professional Layout and Floor Plans',
      'Reimagining and optimizing existing spaces',
      'Technical design documentation'
    ],
    bgImage: AUTOCAD_BG,
    icon: 'Layout'
  },
  {
    id: 'financial-services',
    title: 'Financial Services & Real Estate',
    category: 'Financial',
    description: 'Prudent financial management and capital solutions for businesses and investors.',
    details: [
      'Private Money Lending for Real Estate (Fix & Flip funding)',
      'Independent Private Money Brokerage for investment capital',
      'Tax Lien and Foreclosure Funds Recovery (Performance-based)',
      'Comprehensive Tax Preparation for individuals and small businesses',
      'Strategic financial management to maximize deductions'
    ],
    bgImage: FINANCE_BG, 
    icon: 'DollarSign',
    links: [
      { label: 'Tax Preparation', url: 'https://taxestogo.com/App/Download/95577' },
      { label: 'Private Money Lending', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe0r0tkskpDjDntr6zfOIuZ-3o3Iw1-CPMDcWR_30f4NEqXiQ/viewform?usp=publish-editor' },
      { label: 'Foreclosure Funds Recovery Inquiry', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfWwx--iLhP0L-ws0kor30p8ZoVZuDtHica7olMPc5j0YTl3w/viewform?usp=publish-editor' }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    category: 'E-Commerce',
    description: 'Synergistic integration of affiliate marketing and print-on-demand services.',
    details: [
      'Strategic Affiliate Marketing partnerships',
      'Print-on-Demand personalized merchandise (apparel, home decor)',
      'Zero-inventory management strategies',
      'Brand visibility and advocates network cultivation',
      'High-quality, made-to-order product fulfillment'
    ],
    bgImage: E_COMMERCE_BG,
    icon: 'ShoppingCart',
    links: [
      { label: 'Visit our eBay Store', url: 'https://www.ebay.com/usr/prospectivellc' }
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  { title: 'Ask Questions to Make Data-Driven Decisions', issuer: 'Google Coursera', date: 'Oct 2022' },
  { title: 'Foundations: Data, Data, Everywhere', issuer: 'Google Coursera', date: 'Sept 2022' },
  { title: 'Computer Software Validation Course', issuer: 'Leonic Technical Institute', date: '2020' },
  { title: 'AutoCAD Career Diploma Program', issuer: 'Ashworth College', date: '2016-2017' },
  { title: 'Six Sigma Certified', issuer: 'Johnson Controls Inc.', date: 'Sept 2002' },
  { title: 'Engineering Development Program', issuer: 'Johnson Controls Inc.', date: 'Aug 2000' }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'Video': return <Video className="w-6 h-6" />;
    case 'Layout': return <Layout className="w-6 h-6" />;
    case 'DollarSign': return <DollarSign className="w-6 h-6" />;
    case 'ShoppingCart': return <ShoppingCart className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6" />;
    case 'CheckCircle': return <CheckCircle className="w-6 h-6 text-blue-600" />;
    case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
    case 'FileSearch': return <FileSearch className="w-5 h-5" />;
    case 'PenTool': return <PenTool className="w-5 h-5" />;
    default: return <Briefcase className="w-6 h-6" />;
  }
};

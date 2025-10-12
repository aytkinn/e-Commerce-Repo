import slide1 from "../assets/img/product-slide-1.jpg";
import products1 from "../assets/img/products/products-1.jpg";
import products2 from "../assets/img/products/products-2.jpg";
import products3 from "../assets/img/products/products-3.jpg";
import products4 from "../assets/img/products/products-4.jpg";
import products5 from "../assets/img/products/products-5.jpg";
import products6 from "../assets/img/products/products-6.jpg";
import products7 from "../assets/img/products/products-7.jpg";
import products8 from "../assets/img/products/products-8.jpg";
import men from "../assets/img/men.png";
import women from "../assets/img/women.png";
import accessories from "../assets/img/accessories.jpg";
import kids from "../assets/img/kids.jpg";
import featured1 from "../assets/img/featured1.jpg";
import featured2 from "../assets/img/featured2.jpg";
import featured3 from "../assets/img/featured3.jpg";
import aws from "../assets/img/companylogo/aws.png";
import hooli from "../assets/img/companylogo/hooli.png";
import lyft from "../assets/img/companylogo/lyft.png";
import piedpiper from "../assets/img/companylogo/PiedPiperHat.png";
import reddit from "../assets/img/companylogo/reddit.png";
import stripe from "../assets/img/companylogo/stripe.png";
import slider from "../assets/img/products/product-slider1.png"


export const products = [
  {
    id: 1,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 33,
    image: products1,
    rating: 4.5,
    category: "Women"
  },
  {
    id: 2,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 25,
    image: products2,
    rating: 4.8,
    category: "Men"
  },
  {
    id: 3,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: null,
    image: products3,
    rating: 4.2,
    category: "Women"
  },
  {
    id: 4,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 33,
    image: products4,
    rating: 4.6,
    category: "Women"
  },
  {
    id: 5,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: null,
    image: products5,
    rating: 4.7,
    category: "Men"
  },
  {
    id: 6,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products6,
    rating: 4.3,
    category: "Women"
  },
  {
    id: 7,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products7,
    rating: 4.3,
    category: "Men"
  },
  {
    id: 8,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products8,
    rating: 4.3,
    category: "Men"
  },
  {
    id: 9,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products8,
    rating: 4.3,
    category: "Men"
  },
  {
    id: 10,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products8,
    rating: 4.3,
    category: "Men"
  },
  {
    id: 11,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products8,
    rating: 4.3,
    category: "Men"
  },
  {
    id: 12,
    name: "Graphic Desing",
    price: 6.48,
    originalPrice: 16.48,
    discount: 38,
    image: products8,
    rating: 4.3,
    category: "Men"
  }
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: "📱",
    count: 3
  },
  {
    id: 2,
    name: "Gaming",
    icon: "🎮",
    count: 2
  },
  {
    id: 3,
    name: "Accessories",
    icon: "🔌",
    count: 1
  },
  {
    id: 4,
    name: "Clothing",
    icon: "👕",
    count: 0
  },
  {
    id: 5,
    name: "Home",
    icon: "🏠",
    count: 0
  }
];

export const homePageData = {
  hero: {
    title: "EDITOR'S PICK",
    subtitle: "Problems trying to resolve the conflict between",
    images: [
      {
        id: 1,
        src: men,
        alt: "Men's Collection",
        buttonText: "MEN",
        buttonPosition: "bottom-left"
      },
      {
        id: 2,
        src: women,
        alt: "Women's Collection",
        buttonText: "WOMEN",
        buttonPosition: "bottom-left"
      }
    ]
  },
  herodata: {
    images: [
      {
        id: 1,
        src: accessories,
        alt: "Accesories",
        buttonText: "ACCESSORIES",
        buttonPosition: "bottom-left"
      },
      {
        id: 2,
        src: kids,
        alt: "kids",
        buttonText: "KIDS",
        buttonPosition: "bottom-left",
      }
    ]
  },
  featuredProducts: {
    title: "Featured Products",
    subtitle: "The best products of the week",
    products: products.slice(0, 4)
  },
  categories: {
    title: "Categories",
    subtitle: "Shop by category",
    items: categories
  }
};

export const sliderData = [
  {
    id: 1,
    h2: "Summer 2025",
    title: "New Collection",
    subtitle: "We know how large objects will act, but things on a small scale.",
    buttonText: "Shop Now",
    image: slide1,
    buttonStyle: "primary"
  },
  {
    id: 2,
    title: "Büyük İndirim",
    subtitle: "%50'ye Varan İndirimler",
    buttonText: "Shop Now",
    image: slide1,
    buttonStyle: "primary"
  }
];

export const menuItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/shop", hasDropdown: true },
  { id: 3, name: "About", href: "/about" },
  { id: 4, name: "Blog", href: "/blog" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "Pages", href: "/pages" }
];

export const shopDropdownData = {
  women: [
    "Bags",
    "Belts",
    "Cosmetics",
    "Bags",
    "Hats"
  ],
  men: [
    "Bags",
    "Belts",
    "Cosmetics",
    "Bags",
    "Hats"
  ]
};

export const footerData = {
  company: {
    name: "Bandage",
    description: "Lorem ipsum dolor Amit"
  },
  sections: [
    {
      title: "Company Info",
      links: [
        { name: "About Us", href: "#" },
        { name: "Carrier", href: "#" },
        { name: "We are hiring", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "About Us", href: "#" },
        { name: "Carrier", href: "#" },
        { name: "We are hiring", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Features",
      links: [
        { name: "Business Marketing", href: "#" },
        { name: "User Analytic", href: "#" },
        { name: "Live Chat", href: "#" },
        { name: "Unlimited Support", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "IOS & Android", href: "#" },
        { name: "Watch a Demo", href: "#" },
        { name: "Customers", href: "#" },
        { name: "API", href: "#" }
      ]
    }
  ],
  social: [
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" }
  ]
};

export const productSliderData = [
  {
    id: 1,
    season: "SUMMER 2020",
    title: "Vita Classic Product",
    description: "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    buttonText: "ADD TO CART",
    image: slider
  },
  {
    id: 2,
    season: "WINTER 2020",
    title: "Premium Collection",
    description: "Discover our latest winter collection with premium quality materials",
    price: "$24.99",
    buttonText: "SHOP NOW",
    image: slider
  },
  {
    id: 3,
    season: "SPRING 2021",
    title: "New Arrivals",
    description: "Fresh styles for the new season with modern designs",
    price: "$19.99",
    buttonText: "EXPLORE",
    image: slider
  }
];

export const featuredPostsData = [
  {
    id: 1,
    image: featured1,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments"
  },
  {
    id: 2,
    image: featured2,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments"
  },
  {
    id: 3,
    image: featured3,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments"
  }
];

export const shopPageData = {
  sortOptions: [
    { value: 'featured', label: 'Popularity' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' },
    { value: 'rating', label: 'Customer Rating' }
  ],
  shopHeader: [
    { id: 1, image: slide1, name: "CLOTHS", comments: 5 }, 
    { id: 2, image: slide1, name: "CLOTHS", comments: 5 },
    { id: 3, image: slide1, name: "CLOTHS", comments: 5 }, 
    { id: 4, image: slide1, name: "CLOTHS", comments: 5 }, 
    { id: 5, image: slide1, name: "CLOTHS", comments: 5 }],
  categories: ['all', 'women', 'men', 'kids', 'accessories']
};

export const companyLogos = [
  { id: 1, name: "Hooli", logo: hooli, link:"https://hooli.io/" },
  { id: 2, name: "Lyft", logo: lyft, link:"https://www.lyft.com/" },
  { id: 3, name: "Evernote", logo: piedpiper , link:"https://hooli.io/" },
  { id: 4, name: "Stripe", logo: stripe, link: "https://stripe.com/" },
  { id: 5, name: "AWS", logo: aws, link:"https://aws.amazon.com/tr/free/?trk=9fb83299-9a77-4a2b-b448-9ec81bfee7bb&sc_channel=ps&ef_id=Cj0KCQjwo63HBhCKARIsAHOHV_Vjca_aWwCwlRww98kBl87jD7maV7s97peU63_dRBTEfcd_X_RemRMaAmVUEALw_wcB:G:s&s_kwcid=AL!4422!3!645208863499!e!!g!!aws!19580263879!144835121949&gad_campaignid=19580263879&gbraid=0AAAAADjHtp_3TDC85G5SYknzN-JZECu3i&gclid=Cj0KCQjwo63HBhCKARIsAHOHV_Vjca_aWwCwlRww98kBl87jD7maV7s97peU63_dRBTEfcd_X_RemRMaAmVUEALw_wcB" },
  { id: 6, name: "Reddit", logo: reddit, link:"https://www.reddit.com/" }
];

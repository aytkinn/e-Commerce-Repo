import products1 from "../assets/img/products/products-1.jpg";
import products2 from "../assets/img/products/products-2.jpg";
import products3 from "../assets/img/products/products-3.jpg";
import products4 from "../assets/img/products/products-4.jpg";
import products5 from "../assets/img/products/products-5.jpg";
import products6 from "../assets/img/products/products-6.jpg";
import products7 from "../assets/img/products/products-6.jpg";
import products8 from "../assets/img/products/products-6.jpg";


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
        src: "/src/assets/img/men.png",
        alt: "Men's Collection",
        buttonText: "MEN",
        buttonPosition: "bottom-left"
      },
      {
        id: 2,
        src: "/src/assets/img/women.png",
        alt: "Women's Collection",
        buttonText: "WOMEN",
        buttonPosition: "bottom-left"
      }
    ]
  },
  herodata:{
    images:[
     { id:1,
      src:"/src/assets/img/accessories.jpg",
      alt:"Accesories",
      buttonText:"ACCESSORIES",
      buttonPosition:"bottom-left"
    },
   { id:2,
      src:"/src/assets/img/kids.jpg",
      alt:"kids",
      buttonText:"KIDS",
      buttonPosition:"bottom-left",
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
    title: "Yeni Sezon",
    subtitle: "En Trend Ürünler",
    buttonText: "Keşfet",
    image: "/src/assets/img/product-slide-1.jpg",
    buttonStyle: "primary"
  },
  {
    id: 2,
    title: "Büyük İndirim",
    subtitle: "%50'ye Varan İndirimler",
    buttonText: "Alışverişe Başla",
    image: "/src/assets/img/product-slide-1.jpg",
    buttonStyle: "primary"
  }
];

export const menuItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/categories" },
  { id: 3, name: "About", href: "/about" },
  { id: 4, name: "Blog", href: "/blog" },
  { id: 5, name: "Contact", href: "/contact" },
  { id: 6, name: "Pages", href: "/pages" }
];

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
    image: "src/assets/img/products/product-slider1.png"
  },
  {
    id: 2,
    season: "WINTER 2020",
    title: "Premium Collection",
    description: "Discover our latest winter collection with premium quality materials",
    price: "$24.99",
    buttonText: "SHOP NOW",
    image: "src/assets/img/products/product-slider1.png"
  },
  {
    id: 3,
    season: "SPRING 2021",
    title: "New Arrivals",
    description: "Fresh styles for the new season with modern designs",
    price: "$19.99",
    buttonText: "EXPLORE",
    image: "src/assets/img/products/product-slider1.png"
  }
];

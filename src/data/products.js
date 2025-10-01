export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    originalPrice: 149.99,
    discount: 33,
    image: "/src/assets/img/product-1.jpg",
    rating: 4.5,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    image: "/src/assets/img/product-2.jpg",
    rating: 4.8,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: "/src/assets/img/product-3.jpg",
    rating: 4.2,
    category: "Electronics"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 59.99,
    originalPrice: 89.99,
    discount: 33,
    image: "/src/assets/img/product-4.jpg",
    rating: 4.6,
    category: "Gaming"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 129.99,
    originalPrice: null,
    discount: null,
    image: "/src/assets/img/product-5.jpg",
    rating: 4.7,
    category: "Gaming"
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 49.99,
    originalPrice: 79.99,
    discount: 38,
    image: "/src/assets/img/product-6.jpg",
    rating: 4.3,
    category: "Accessories"
  }
];

// Kategori verileri
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
  { id: 1, name: "Ana Sayfa", href: "/" },
  { id: 2, name: "Kategoriler", href: "/categories" },
  { id: 3, name: "Ürünler", href: "/products" },
  { id: 4, name: "İletişim", href: "/contact" }
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

//JMTix
// Hypothetical catalog for the VELKRO store (learning project, no real sales).
// Prices are in Costa Rican colones (CRC).

export const products = Object.freeze([
  {
    id: 1,
    name: "Oversized Tee Black",
    category: "tees",
    price: 18000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["black"],
    image: "img/tee-black.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    category: "hoodies",
    price: 38000,
    sizes: ["M", "L", "XL"],
    colors: ["black", "gray"],
    image: "img/hoodie-heavyweight.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Cargo Pants",
    category: "pants",
    price: 32000,
    sizes: ["S", "M", "L"],
    colors: ["olive", "black"],
    image: "img/cargo-pants.jpg",
    inStock: true,
  },
  {
    id: 4,
    name: "Logo Cap",
    category: "accessories",
    price: 12000,
    sizes: ["One Size"],
    colors: ["black", "white"],
    image: "img/logo-cap.jpg",
    inStock: true,
  },
  {
    id: 5,
    name: "Graphic Tee Costa Rica",
    category: "tees",
    price: 20000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["white"],
    image: "img/tee-graphic-cr.jpg",
    inStock: false,
  },
]);
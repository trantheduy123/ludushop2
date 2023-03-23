import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Duy",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Luc",
      email: "luc123@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "T-shirt Buberry 01",
      slug: "T-shirt-Buberry",
      category: "T-shirt",
      image: "/images/b1.jpg", // 679px × 829px
      price: 50,
      countInStock: 10,
      brand: "BUBERRY",
      rating: 5,
      numReviews: 7,
      description: "A cotton T-shirt cut to a relaxed fit, highlighted with a graphic logo and slogan print",
    },

    {
      name: "T-shirt Buberry 02",
      slug: "T-shirt-Buberry-02",
      category: "T-shirt",
      image: "/images/b2.jpg", // 679px × 829px
      price: 50,
      countInStock: 10,
      brand: "BUBERRY",
      rating: 4,
      numReviews: 5,
      description: "A cotton T-shirt cut to a relaxed fit, highlighted with a graphic logo and slogan print",
    },

    {
      name: "T-shirt Buberry 03",
      slug: "T-shirt-Buberry-03",
      category: "T-shirt",
      image: "/images/b3.jpg", // 679px × 829px
      price: 50,
      countInStock: 10,
      brand: "BUBERRY",
      rating: 4,
      numReviews: 5,
      description: "A cotton T-shirt cut to a regular fit, embroidered with the Equestrian Knight Design intertwined with our Thomas Burberry Monogram.​",
    },
  
    {
      name: "T-shirt Buberry 04",
      slug: "T-shirt-Buberry-04",
      category: "T-shirt",
      image: "/images/b4.jpg", // 679px × 829px
      price: 50,
      countInStock: 10,
      brand: "BUBERRY",
      rating: 5,
      numReviews: 4,
      description: "A cotton T-shirt cut to a regular fit, embroidered with the Equestrian Knight Design intertwined with our Thomas Burberry Monogram.​",
    },
    {
      name: "T-shirt Buberry 05",
      slug: "T-shirt-Buberry-05",
      category: "T-shirt",
      image: "/images/b5.jpg", // 679px × 829px
      price: 50,
      countInStock: 10,
      brand: "BUBERRY",
      rating: 3,
      numReviews: 12,
      description: "Made in Italy, Fabric: 100% Cotton.​",
    },
    {
      name: "Polo Gucci 01",
      slug: "Polo-Gucci-01",
      category: "Polo",
      image: "/images/g1.jpg", // 679px × 829px
      price: 75,
      countInStock: 10,
      brand: "Gucci",
      rating: 5,
      numReviews: 12,
      description: "Made in Italy, Fabric: 100% Cotton.​",
    },
    {
      name: "Polo Gucci 02",
      slug: "Polo-Gucci-02",
      category: "Polo",
      image: "/images/g4.jpg", // 679px × 829px
      price: 75,
      countInStock: 0,
      brand: "Gucci",
      rating: 5,
      numReviews: 12,
      description: "Made in Italy, Fabric: 100% Cotton​",
    },
    {
      name: "Polo Gucci 03",
      slug: "Polo-Gucci-03",
      category: "Polo",
      image: "/images/g3.jpg", // 679px × 829px
      price: 75,
      countInStock: 10,
      brand: "Gucci",
      rating: 4,
      numReviews: 25,
      description: "Made in Italy, Fabric: 100% Cotton.​",
    },
    {
      name: "Polo Gucci 04",
      slug: "Polo-Gucci-04",
      category: "Polo",
      image: "/images/g2.jpg", // 679px × 829px
      price: 75,
      countInStock: 10,
      brand: "Gucci",
      rating: 5,
      numReviews: 12,
      description: "Made in Italy, Fabric: 100% Cotton.​",
    },
    {
      name: "Shirt Thom Browne 01",
      slug: "Shirt-Thom Browne-01",
      category: "Shirt",
      image: "/images/t1.jpg", // 679px × 829px
      price: 110,
      countInStock: 10,
      brand: "Thom Browne",
      rating: 5,
      numReviews: 12,
      description: "Made in American, Fabric: 100% Cotton.​",
    },
    {
      name: "Shirt Thom Browne 02",
      slug: "Shirt-Thom Browne-02",
      category: "Shirt",
      image: "/images/t2.jpg", // 679px × 829px
      price: 110,
      countInStock: 10,
      brand: "Thom Browne",
      rating: 5,
      numReviews: 12,
      description: "Made in American, Fabric: 100% Cotton.​",
    },
    {
      name: "Denim Jacket Parda",
      slug: "Denim-Jacket-Parda",
      category: "Denim",
      image: "/images/p1.jpg", // 679px × 829px
      price: 150,
      countInStock: 10,
      brand: "Parda",
      rating: 5,
      numReviews: 32,
      description: "This classic denim jacket is defined by a new modern design. It is made from padded denim featuring a vintage-look treatment for a timeless allure.​",
    },
    {
      name: "Denim Jacket Levi's ",
      slug: "Denim-Jacke-levis",
      category: "Denim",
      image: "/images/l1.jpg", // 679px × 829px
      price: 150,
      countInStock: 10,
      brand: "Levi's",
      rating: 4,
      numReviews: 14,
      description: "This classic denim jacket is defined by a new modern design. It is made from padded denim featuring a vintage-look treatment for a timeless allure.​",
    },
  ],
};
export default data;

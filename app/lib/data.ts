import type { Order, OrderItem, Product, Review, User } from "./definitions";
import bcrypt from "bcryptjs";

export const users: Array<User> = [
  {
    _id: "user0",
    name: process.env.ADMIN_NAME as string,
    email: process.env.ADMIN_EMAIL as string,
    passwordHash: bcrypt.hashSync(process.env.ADMIN_PASSWORD as string),
    role: "admin",
    createdAt: "12 Dec 2022",
  },
  {
    _id: "user1",
    name: "user1",
    email: "user1@email.com",
    passwordHash: bcrypt.hashSync("1234"),
    role: "user",
    createdAt: "17 May 2023",
  },
  {
    _id: "user2",
    name: "user2",
    email: "user2@email.com",
    passwordHash: bcrypt.hashSync("1234"),
    role: "user",
    createdAt: "17 May 2023",
  },
  {
    _id: "user3",
    name: "user3",
    email: "user3@email.com",
    passwordHash: bcrypt.hashSync("1234"),
    role: "user",
    createdAt: "17 May 2023",
  },
];

export const products: Array<Product> = [
  // 01
  {
    _id: "apple",
    title: "Apple",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/apple.jpg",
    slug: "apple",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: true,
  },

  // 02
  {
    _id: "apricot",
    title: "Apricot",
    desc: "Donut lemon drops apricot pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/apricot.jpg",
    slug: "apricot",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 03
  {
    _id: "artichoke",
    title: "Artichoke",
    desc: "Donut lemon drops artichoke pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/artichoke.jpg",
    slug: "artichoke",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 04
  {
    _id: "asparagus",
    title: "Asparagus",
    desc: "Donut lemon drops asparagus pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/asparagus.jpg",
    slug: "asparagus",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 05
  {
    _id: "banana",
    title: "Banana",
    desc: "Donut lemon drops banana pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/banana.jpg",
    slug: "banana",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: true,
  },

  // 06
  {
    _id: "beet",
    title: "Beet",
    desc: "Donut lemon drops beet pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/beet.jpg",
    slug: "beet",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 07
  {
    _id: "blackberry",
    title: "Blackberry",
    desc: "Donut lemon drops blackberry pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/blackberry.jpg",
    slug: "blackberry",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 08
  {
    _id: "blueberry",
    title: "Blueberry",
    desc: "Donut lemon drops blueberry pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/blueberry.jpg",
    slug: "blueberry",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 09
  {
    _id: "bok-choy",
    title: "Bok-choy",
    desc: "Donut lemon drops bok-choy pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/bok-choy.jpg",
    slug: "bok-choy",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 10
  {
    _id: "broccoli",
    title: "Broccoli",
    desc: "Donut lemon drops broccoli pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/broccoli.jpg",
    slug: "broccoli",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 11
  {
    _id: "cabbage",
    title: "Cabbage",
    desc: "Donut lemon drops cabbage pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/cabbage.jpg",
    slug: "cabbage",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: true,
  },

  // 12
  {
    _id: "carrot",
    title: "Carrot",
    desc: "Donut lemon drops carrot pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/carrot.jpg",
    slug: "carrot",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 13
  {
    _id: "cauliflower",
    title: "Cauliflower",
    desc: "Donut lemon drops cauliflower pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/cauliflower.jpg",
    slug: "cauliflower",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 14
  {
    _id: "celery",
    title: "Celery",
    desc: "Donut lemon drops celery pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/celery.jpg",
    slug: "celery",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 15
  {
    _id: "cherries",
    title: "Cherries",
    desc: "Donut lemon drops cherries pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/cherries.jpg",
    slug: "cherries",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 16
  {
    _id: "chili-pepper",
    title: "Chili-pepper",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/chili-pepper.jpg",
    slug: "chili-pepper",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 17
  {
    _id: "coconut",
    title: "Coconut",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/coconut.jpg",
    slug: "coconut",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 18
  {
    _id: "corn",
    title: "Corn",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/corn.jpg",
    slug: "corn",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 19
  {
    _id: "cucumber",
    title: "Cucumber",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/cucumber.jpg",
    slug: "cucumber",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 20
  {
    _id: "dates",
    title: "Dates",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/dates.jpg",
    slug: "dates",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 21
  {
    _id: "eggplant",
    title: "Eggplant",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/eggplant.jpg",
    slug: "eggplant",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 22
  {
    _id: "fig",
    title: "Fig",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/fig.jpg",
    slug: "fig",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 23
  {
    _id: "garlic",
    title: "Garlic",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/garlic.jpg",
    slug: "garlic",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 24
  {
    _id: "grapefruit",
    title: "Grapefruit",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/grapefruit.jpg",
    slug: "grapefruit",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 25
  {
    _id: "grapes",
    title: "Grapes",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/grapes.jpg",
    slug: "grapes",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 26
  {
    _id: "green-bean",
    title: "Green-bean",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/green-bean.jpg",
    slug: "green-bean",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 27
  {
    _id: "green-pepper",
    title: "Green-pepper",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/green-pepper.jpg",
    slug: "green-pepper",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 28
  {
    _id: "kiwi",
    title: "Kiwi",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/kiwi.jpg",
    slug: "kiwi",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 29
  {
    _id: "lemon",
    title: "Lemon",
    desc: "Donut lemon drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/lemon.jpg",
    slug: "lemon",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 30
  {
    _id: "lettuce",
    title: "Lettuce",
    desc: "Donut lettuce drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/lettuce.jpg",
    slug: "lettuce",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 31
  {
    _id: "lime",
    title: "Lime",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/lime.jpg",
    slug: "lime",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 32
  {
    _id: "mango",
    title: "Mango",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/mango.jpg",
    slug: "mango",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 33
  {
    _id: "melon",
    title: "Melon",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/melon.jpg",
    slug: "melon",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 34
  {
    _id: "mushroom",
    title: "Mushroom",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/mushroom.jpg",
    slug: "mushroom",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 35
  {
    _id: "onion",
    title: "Onion",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/onion.jpg",
    slug: "onion",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 36
  {
    _id: "orange",
    title: "Orange",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/orange.jpg",
    slug: "orange",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 37
  {
    _id: "papaya",
    title: "Papaya",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/papaya.jpg",
    slug: "papaya",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 38
  {
    _id: "parsley",
    title: "Parsley",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/parsley.jpg",
    slug: "parsley",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 39
  {
    _id: "peach",
    title: "Peach",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/peach.jpg",
    slug: "peach",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 40
  {
    _id: "pear",
    title: "Pear",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/pear.jpg",
    slug: "pear",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 41
  {
    _id: "peas",
    title: "Peas",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/peas.jpg",
    slug: "peas",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 42
  {
    _id: "pineapple",
    title: "Pineapple",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/pineapple.jpg",
    slug: "pineapple",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 43
  {
    _id: "plum",
    title: "Plum",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/plum.jpg",
    slug: "plum",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 44
  {
    _id: "potato",
    title: "Potato",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/potato.jpg",
    slug: "potato",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 45
  {
    _id: "prunes",
    title: "Prunes",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/prunes.jpg",
    slug: "prunes",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 46
  {
    _id: "radish",
    title: "Radish",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/radish.jpg",
    slug: "radish",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 47
  {
    _id: "raisins",
    title: "Raisins",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/raisins.jpg",
    slug: "raisins",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 48
  {
    _id: "raspberry",
    title: "Raspberry",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/raspberry.jpg",
    slug: "raspberry",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 49
  {
    _id: "scallion",
    title: "Scallion",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/scallion.jpg",
    slug: "scallion",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 50
  {
    _id: "spinach",
    title: "Spinach",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/spinach.jpg",
    slug: "spinach",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 51
  {
    _id: "squash",
    title: "Squash",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/squash.jpg",
    slug: "squash",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 52
  {
    _id: "strawberry",
    title: "Strawberry",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/strawberry.jpg",
    slug: "strawberry",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 53
  {
    _id: "sweet-potato",
    title: "Sweet-potato",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/sweet-potato.jpg",
    slug: "sweet-potato",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 54
  {
    _id: "tangerine",
    title: "Tangerine",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/tangerine.jpg",
    slug: "tangerine",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 55
  {
    _id: "tomato",
    title: "Tomato",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/tomato.jpg",
    slug: "tomato",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: true,
  },

  // 56
  {
    _id: "turnip",
    title: "Turnip",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/turnip.jpg",
    slug: "turnip",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 57
  {
    _id: "watermelon",
    title: "Watermelon",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/watermelon.jpg",
    slug: "watermelon",
    category: "fruits",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },

  // 58
  {
    _id: "zuchini",
    title: "Zuchini",
    desc: "Donut lime drops apple pie fruitcake bear claw tiramisu gummies jelly beans jelly-o. Ice cream carrot cake cotton candy cheesecake sugar plum tootsie roll candy canes. Candy canes dessert toffee icing jelly-o.",
    price: 3.5,
    image: "/images/zuchini.jpg",
    slug: "zuchini",
    category: "vegetables",
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  },
];

// reviews
export const reviews: Array<Review> = [
  {
    _id: "review_01",
    name: users[0].name,
    email: users[0].email,
    rating: 4,
    comment:
      "Sugar plum toffee halvah chupa chups lollipop tootsie roll fruitcake cake. Oat cake soufflé donut jelly-o pudding jelly. Macaroon muffin chocolate bar macaroon pie cookie sugar plum.",
    createdAt: "12 Dec 2024",
    product: products[0],
  },

  {
    _id: "review_02",
    name: users[1].name,
    email: users[1].email,
    rating: 5,
    comment:
      "Gingerbread biscuit sweet bonbon shortbread. Tootsie roll sugar plum lemon drops pudding cookie. Dessert powder pie candy croissant bear claw carrot cake liquorice carrot cake. ",
    createdAt: "10 Nov 2024",
    product: products[0],
  },

  {
    _id: "review_03",
    name: users[1].name,
    email: users[1].email,
    rating: 3.5,
    comment:
      "Apple pie tootsie roll chocolate gingerbread brownie biscuit. Fruitcake sweet roll candy canes halvah tiramisu gummi bears croissant. Gummies shortbread pastry marzipan oat cake.",
    createdAt: "7 Aug 2024",
    product: products[1],
  },
];

// Shipping
export const shippingData = {
  name: "John Doe",
  email: "johndoe@emai.com",
  phone: "(555) 555 5555",
  address: "4200 Martin Luther King Boulevard Houston, TX, United States",
};

// Payment
export const paymentData = {
  paymentMethod: "PayPal",
};

// Cart items
export const cartItemsData: Array<OrderItem> = [
  {
    product: products[0],
    qty: 1,
  },

  {
    product: products[1],
    qty: 2,
  },

  {
    product: products[2],
    qty: 1,
  },
];

// Order items
const orderItems: Array<OrderItem> = [
  {
    product: products[0],
    qty: 1,
  },

  {
    product: products[1],
    qty: 2,
  },

  {
    product: products[2],
    qty: 1,
  },
];

export const ordersData: Array<Order> = [
  {
    _id: "order_1",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 16,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 21,
    isPaid: false,
    paidAt: "12 Dec 2022",
    isDelivered: false,
    deliveredAt: "12 Dec 2022",
    createdAt: "12 Dec 2022",
  },

  {
    _id: "order_2",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 20,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 25,
    isPaid: true,
    paidAt: "7 Jan 2024",
    isDelivered: false,
    deliveredAt: "12 Jan 2024",
    createdAt: "7 Jan 2024",
  },

  {
    _id: "order_3",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 25,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 30,
    isPaid: true,
    paidAt: "23 Aug 2024",
    isDelivered: true,
    deliveredAt: "24 Aug 2024",
    createdAt: "23 Aug 2024",
  },

  {
    _id: "order_4",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 16,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 21,
    isPaid: false,
    paidAt: "12 Dec 2022",
    isDelivered: false,
    deliveredAt: "12 Dec 2022",
    createdAt: "12 Dec 2022",
  },

  {
    _id: "order_5",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 20,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 25,
    isPaid: true,
    paidAt: "7 Jan 2024",
    isDelivered: false,
    deliveredAt: "12 Jan 2024",
    createdAt: "7 Jan 2024",
  },

  {
    _id: "order_6",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 25,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 30,
    isPaid: true,
    paidAt: "23 Aug 2024",
    isDelivered: true,
    deliveredAt: "24 Aug 2024",
    createdAt: "23 Aug 2024",
  },

  {
    _id: "order_7",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 16,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 21,
    isPaid: false,
    paidAt: "12 Dec 2022",
    isDelivered: false,
    deliveredAt: "12 Dec 2022",
    createdAt: "12 Dec 2022",
  },

  {
    _id: "order_8",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 20,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 25,
    isPaid: true,
    paidAt: "7 Jan 2024",
    isDelivered: false,
    deliveredAt: "12 Jan 2024",
    createdAt: "7 Jan 2024",
  },

  {
    _id: "order_9",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 25,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 30,
    isPaid: true,
    paidAt: "23 Aug 2024",
    isDelivered: true,
    deliveredAt: "24 Aug 2024",
    createdAt: "23 Aug 2024",
  },

  {
    _id: "order_10",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 16,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 21,
    isPaid: false,
    paidAt: "12 Dec 2022",
    isDelivered: false,
    deliveredAt: "12 Dec 2022",
    createdAt: "12 Dec 2022",
  },

  {
    _id: "order_11",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 20,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 25,
    isPaid: true,
    paidAt: "7 Jan 2024",
    isDelivered: false,
    deliveredAt: "12 Jan 2024",
    createdAt: "7 Jan 2024",
  },

  {
    _id: "order_12",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 25,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 30,
    isPaid: true,
    paidAt: "23 Aug 2024",
    isDelivered: true,
    deliveredAt: "24 Aug 2024",
    createdAt: "23 Aug 2024",
  },

  {
    _id: "order_13",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 16,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 21,
    isPaid: false,
    paidAt: "12 Dec 2022",
    isDelivered: false,
    deliveredAt: "12 Dec 2022",
    createdAt: "12 Dec 2022",
  },

  {
    _id: "order_14",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 20,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 25,
    isPaid: true,
    paidAt: "7 Jan 2024",
    isDelivered: false,
    deliveredAt: "12 Jan 2024",
    createdAt: "7 Jan 2024",
  },

  {
    _id: "order_15",
    user: users[1],
    items: orderItems,
    shipping: shippingData,
    payment: paymentData,
    itemsPrice: 25,
    taxPrice: 5,
    shippingPrice: 0,
    totalPrice: 30,
    isPaid: true,
    paidAt: "23 Aug 2024",
    isDelivered: true,
    deliveredAt: "24 Aug 2024",
    createdAt: "23 Aug 2024",
  },
];

// Favorite products
export const favoriteProducts: Array<Product> = products.slice(0, 4);

export const barChartData = [
  {
    label: "January",
    totalSales: 20,
  },

  {
    label: "February",
    totalSales: 15,
  },

  {
    label: "March",
    totalSales: 25,
  },
];

export const donutChartData = [
  {
    title: "Black Coffee",
    totalSales: 20,
  },

  {
    title: "Latte",
    totalSales: 22,
  },

  {
    title: "Americano",
    totalSales: 19,
  },

  {
    title: "Espresso",
    totalSales: 31,
  },

  {
    title: "Mocha",
    totalSales: 23,
  },
];

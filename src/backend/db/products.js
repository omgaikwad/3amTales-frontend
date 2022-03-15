import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Immortals of Meluha",
    author: "Amish",
    mrpPrice: "499",
    discountPrice: "476",
    discountPercent: "5",
    image: "/assets/book-images/immortals-of-meluha.jpg",
    categoryName: "myths-legends-sagas",
  },
  {
    _id: uuid(),
    title: "Origin",
    author: "Dan Brown",
    mrpPrice: "499",
    discountPrice: "276",
    discountPercent: "45",
    image: "/assets/book-images/origin-danBrown.jpg",
    categoryName: "crime-mystery-thriller",
  },
  {
    _id: uuid(),
    title: "Prisoner of Birth",
    author: "Jeffrey Archer",
    mrpPrice: "450",
    discountPrice: "319",
    discountPercent: "29",
    image: "/assets/book-images/prisoner-of-birth.jpg",
    categoryName: "crime-mystery-thriller",
  },
  {
    _id: uuid(),
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    mrpPrice: "599",
    discountPrice: "391",
    discountPercent: "35",
    image: "/assets/book-images/sapiens.jpg",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "Paulo Coelho",
    mrpPrice: "350",
    discountPrice: "251",
    discountPercent: "28",
    image: "/assets/book-images/the-alchemist.jpg",
    categoryName: "fantasy-fiction",
  },
  {
    _id: uuid(),
    title: "The Krishna Key",
    author: "Ashwin Sanghi",
    mrpPrice: "450",
    discountPrice: "360",
    discountPercent: "20",
    image: "/assets/book-images/the-krishna-key.jpg",
    categoryName: "action-adventure",
  },
  {
    _id: uuid(),
    title: "The Magic Drum",
    author: "Sudha Murthy",
    mrpPrice: "250",
    discountPrice: "176",
    discountPercent: "30",
    image: "/assets/book-images/the-magic-drums.jpg",
    categoryName: "childrens",
  },
];

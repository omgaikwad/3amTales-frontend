import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "Myths, Legends and Sagas",
    categoryName: "myths-legends-sagas",
    description:
      "Stories revolving around ancient past, heroes and their tales.",
    image: "/assets/book-images/immortals-of-meluha.jpg",
  },
  {
    _id: uuid(),
    name: "Crime, Mystery and Thriller",
    categoryName: "crime-mystery-thriller",
    description:
      "Stories with plot that always revolves around a crime of sorts that must be solved—or foiled—by the protagonists.",
    image: "/assets/book-images/origin-danBrown.jpg",
  },
  {
    _id: uuid(),
    name: "Non-Fiction",
    categoryName: "non-fiction",
    description: "Books that are based on facts and real events.",
    image: "/assets/book-images/sapiens.jpg",
  },
  {
    _id: uuid(),
    name: "Fantasy Fiction",
    categoryName: "fantasy-fiction",
    description:
      "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore.",
    image: "/assets/book-images/the-alchemist.jpg",
  },
  {
    _id: uuid(),
    name: "Action Adventure",
    categoryName: "action-adventure",
    description:
      "Action and adventure books constantly have you on the edge of your seat with excitement, as your fave main character repeatedly finds themselves in high stakes situations.",
    image: "/assets/book-images/the-krishna-key.jpg",
  },
  {
    _id: uuid(),
    name: "Childrens",
    categoryName: "childrens",
    description: "Stories specifically read by childrens.",
    image: "/assets/book-images/the-magic-drums.jpg",
  },
];

import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "myths-legends-sagas",
    description:
      "Stories revolving around ancient past, heroes and their tales.",
  },
  {
    _id: uuid(),
    categoryName: "crime-mystery-thriller",
    description:
      "Stories with plot that always revolves around a crime of sorts that must be solved—or foiled—by the protagonists.",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description: "Books that are based on facts and real events.",
  },
  {
    _id: uuid(),
    categoryName: "fantasy-fiction",
    description:
      "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore.",
  },
  {
    _id: uuid(),
    categoryName: "action-adventure",
    description:
      "Action and adventure books constantly have you on the edge of your seat with excitement, as your fave main character repeatedly finds themselves in high stakes situations.",
  },
  {
    _id: uuid(),
    categoryName: "childrens",
    description: "Stories specifically read by childrens.",
  },
];

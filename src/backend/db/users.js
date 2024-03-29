import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Om Gaikwad",
    email: "omgaikwad@gmail.com",
    password: bcyrpt.hashSync("omgaikwad123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    password: bcyrpt.hashSync("johnDoe123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullName: "Adarsh Balak",
    email: "adarshbalak@gmail.com",
    password: bcyrpt.hashSync("adarshBalaki123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

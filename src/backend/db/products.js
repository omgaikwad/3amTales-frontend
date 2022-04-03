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
    description:
      " 1900 BC. In what modern Indians mistakenly call the Indus Valley Civilisation. The inhabitants of that period called it the land of Meluha – a near perfect empire created many centuries earlier by Lord Ram, one of the greatest monarchs that ever lived. This once proud empire and its Suryavanshi rulers face severe perils as its primary river, the revered Saraswati, is slowly drying to extinction. They also face devastating terrorist attacks from the east, the land of the Chandravanshis. To make matters worse, the Chandravanshis appear to have allied with the Nagas, an ostracised and sinister race of deformed humans with astonishing martial skills. ",
    rating: "5",
    mrpPrice: "499",
    discountPrice: "476",
    discountPercent: "5",
    image: "/assets/book-images/immortals-of-meluha.jpg",
    categoryName: "myths-legends-sagas",
    inWishlist: false,
  },
  {
    _id: uuid(),
    title: "Origin",
    author: "Dan Brown",
    description:
      " Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the Guggenheim Museum Bilbao to attend the unveiling of an astonishing scientific breakthrough. The evening's host is billionaire Edmond Kirsch, a futurist whose dazzling high-tech inventions and audacious predictions have made him a controversial figure around the world. ",
    rating: "3",
    mrpPrice: "499",
    discountPrice: "276",
    discountPercent: "45",
    image: "/assets/book-images/origin-danBrown.jpg",
    categoryName: "crime-mystery-thriller",
    inWishlist: false,
  },
  {
    _id: uuid(),
    title: "Prisoner of Birth",
    author: "Jeffrey Archer",
    description:
      "If Danny Cartwright had proposed to Beth Wilson the day before, or the day after, he would not have been arrested and charged with the murder of his best friend. And when the four prosecution witnesses are a barrister, a popular actor, an aristocrat and the youngest partner in an established firm's history, who is going to believe his side of the story. Danny is sentenced to twenty-two years and is sent to Belmarsh prison, the highest security jail in the land, from where no inmate has ever escaped. But everyone has underestimated Danny's determination to seek revenge and Beth's relentless quest to win justice . . . ",
    rating: "3",
    mrpPrice: "450",
    discountPrice: "319",
    discountPercent: "29",
    image: "/assets/book-images/prisoner-of-birth.jpg",
    categoryName: "crime-mystery-thriller",
    inWishlist: false,
  },
  {
    _id: uuid(),
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description:
      " What makes us brilliant? What makes us deadly? What makes us Sapiens? Yuval Noah Harari challenges everything we know about being human in the perfect read for these unprecedented times. Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it: us. In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we're going. ",
    rating: "4",
    mrpPrice: "599",
    discountPrice: "391",
    discountPercent: "35",
    image: "/assets/book-images/sapiens.jpg",
    categoryName: "non-fiction",
    inWishlist: false,
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      " Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams. ",
    rating: "2",
    mrpPrice: "350",
    discountPrice: "251",
    discountPercent: "28",
    image: "/assets/book-images/the-alchemist.jpg",
    categoryName: "fantasy-fiction",
    inWishlist: false,
  },
  {
    _id: uuid(),
    title: "The Krishna Key",
    author: "Ashwin Sanghi",
    description:
      " Five thousand years ago, there came to earth a magical being called Krishna, who brought about innumerable miracles for the good of mankind. Humanity despaired of its fate if the Blue God were to die but was reassured that he would return in a fresh avatar when needed in the eventual Dark Age - the Kaliyug. ",
    rating: "4",
    mrpPrice: "450",
    discountPrice: "360",
    discountPercent: "20",
    image: "/assets/book-images/the-krishna-key.jpg",
    categoryName: "action-adventure",
    inWishlist: false,
  },
  {
    _id: uuid(),
    title: "The Magic Drum",
    author: "Sudha Murthy",
    description:
      "Kings and misers, princes and paupers, wise men and foolish boys, the funniest and oddest men and women come alive in this sparkling  new collection of stories. The clever princess will only marry the man who can ask her a question she cannot answer; the orphan boy outwits his greedy uncles with a bag of ash; and an old couple in distress is saved by a magic drum.",
    rating: "5",
    mrpPrice: "250",
    discountPrice: "176",
    discountPercent: "30",
    image: "/assets/book-images/the-magic-drums.jpg",
    categoryName: "childrens",
    inWishlist: false,
  },
];

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
  },
  {
    _id: uuid(),
    title: "Sapiens - A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      " What makes us brilliant? What makes us deadly? What makes us Sapiens? Yuval Noah Harari challenges everything we know about being human in the perfect read for these unprecedented times. Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it: us. In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we're going. ",
    rating: "4",
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
    description:
      " Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams. ",
    rating: "2",
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
    description:
      " Five thousand years ago, there came to earth a magical being called Krishna, who brought about innumerable miracles for the good of mankind. Humanity despaired of its fate if the Blue God were to die but was reassured that he would return in a fresh avatar when needed in the eventual Dark Age - the Kaliyug. ",
    rating: "4",
    mrpPrice: "450",
    discountPrice: "360",
    discountPercent: "20",
    image: "/assets/book-images/the-krishna-key.jpg",
    categoryName: "action-adventure",
  },
  {
    _id: uuid(),
    title: "The Magic Drum and Other Favourite Stories",
    author: "Sudha Murthy",
    description:
      "Kings and misers, princes and paupers, wise men and foolish boys, the funniest and oddest men and women come alive in this sparkling  new collection of stories. The clever princess will only marry the man who can ask her a question she cannot answer; the orphan boy outwits his greedy uncles with a bag of ash; and an old couple in distress is saved by a magic drum.",
    rating: "5",
    mrpPrice: "250",
    discountPrice: "176",
    discountPercent: "30",
    image: "/assets/book-images/the-magic-drums.jpg",
    categoryName: "childrens",
  },
  {
    _id: uuid(),
    title: "Diary Of A Wimpy Kid (Book 1)",
    author: "Jeff Kinney",
    description:
      "Based on the adventures of an imaginary character Greg Heffley, The Diary Of A Wimpy Kid has been described as a 'novel in cartoons’ that is designed as part of reading material for kids aged between eight and twelve years. Regarded as a great graphic novel series for kids, 'Diary of a Wimpy Kid' takes the reader on a whirlwind journey to the inner world of a new-age kid.",
    rating: "4",
    mrpPrice: "299",
    discountPrice: "252",
    discountPercent: "16",
    image: "/assets/book-images/diaryOfAWimpyKid.jpg",
    categoryName: "childrens",
  },
  {
    _id: uuid(),
    title: "How to Win Friends and Influence People",
    author: "Yuval Noah Harari",
    description:
      "How to Win Friends and Influence People is a well-researched and comprehensive guide that will help you through these everyday problems and make success look easier. You can learn to expand your social circle, polish your skill set, find ways to put forward your thoughts more clearly, and build mental strength to counter all hurdles that you may come across on the path to success.",
    rating: "5",
    mrpPrice: "250",
    discountPrice: "109",
    discountPercent: "56",
    image: "/assets/book-images/howToWinFriends.jpg",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    description:
      "When he hears her favourite Beatles song, Toru Watanabe recalls his first love Naoko, the girlfriend of his best friend Kizuki. Immediately he is transported back almost twenty years to his student days in Tokyo, adrift in a world of uneasy friendships, casual sex, passion, loss and desire - to a time when an impetuous young woman called Midori marches into his life and he has to choose between the future and the past.",
    rating: "5",
    mrpPrice: "599",
    discountPrice: "395",
    discountPercent: "34",
    image: "/assets/book-images/norwegianWood.jpg",
    categoryName: "fantasy-fiction",
  },
  {
    _id: uuid(),
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A man is murdered in the worlds most famous museum. Around his body is a ring of codes, drawn in blood. He died to protect a secret which Robert Langdon must uncover. It will be a race against time to decipher this final message. Can he get there before the killers do?",
    rating: "3",
    mrpPrice: "499",
    discountPrice: "334",
    discountPercent: "33",
    image: "/assets/book-images/theDaVinciCode.jpg",
    categoryName: "action-adventure",
  },
  {
    _id: uuid(),
    title: "The Fellowship of the Ring: Book 1",
    author: "J.R.R. Tolkien",
    description:
      "The Fellowship of the Ring is the first of the three volumes that comprise The Lord of the Rings novel. Set in a mythical universe of Middle-earth, this book continues in the same tone as The Hobbit. The Dark Lord, Sauron, is the Lord of the Rings, who is on a mission to reclaim the One Ring and use it to enslave all of Middle-earth.",
    rating: "4",
    mrpPrice: "499",
    discountPrice: "344",
    discountPercent: "31",
    image: "/assets/book-images/theLordOfTheRings.jpg",
    categoryName: "myths-legends-sagas",
  },
];

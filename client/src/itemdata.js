import { options } from "../../backend/Routes/DisplayData";

const Pizzas=
[
  {
    
    name: "PIZZA",
    image:
      "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873912.jpg",
    options : ["small", "medium", "large"],
    prices: [
      {
        small: 199,
        medium: 350,
        large: 450
      },
      
    ],
    description:
      "Indulging in a perfect slice of pizza is a pure act of joy and gastronomic delight.",
  },
  {
    name: "BURGER",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2023/06/Cheeseburger-500x500.jpg",
    options: ["small", "medium", "large"],
    prices: [
      {
        small: 80,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "A ,flavorful burger with melty cheese and all the right toppings is a culinary experience to be savored",
  },
  {
    
    name: "SANDWHICH",
    image:
      "https://img.delicious.com.au/qlaF43m1/w1200/del/2016/11/toasted-cheese-sandwich-with-quickled-onions-39747-3.jpg",
    options: ["small", "medium", "large"],
    prices: [
      {
        small: 130,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "A sandwich typically consists of vegetables, cheese, or meat, placed between or on slices of bread or a similar holder",
  },
  {
    
    name: "PAV BAJI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
    options: ["small", "medium", "large"],
    prices: [
      {
        small: 90,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "Pav Bhaji is a flavorful and aromatic street food from Mumbai, featuring a medley of mashed vegetables and spices served with soft, buttery bread rolls.",
  },
  {
    
    name: "FRUIT JUICE",
    image:
      "https://previews.123rf.com/images/verca/verca1508/verca150800075/44154183-fresh-juice-with-fruits-on-wooden-table-with-nature-green-background.jpg",
    varients: ["small", "medium", "large"],
    options: [
      {
        small: 70,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "Fruit juice is a beverage made by extracting or pressing the natural liquid contained in fruits and vegetables.",
  },
  {
    
    name: "MALAI KOFTA",
    image:
      "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe-500x500.jpg",
    options: ["small", "medium", "large"],
    prices: [
      {
        small: 130,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "Malai Kofta is a delicious and rich Indian dish made with deep-fried balls of paneer and potatoes, served in a creamy, aromatic tomato-based gravy.",
  },
  {
    
    name: "DAL MAKHNI",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2015/01/Restaurant-Style-Dal-Makhani-Recipe.jpg",
    'options': ["small", "medium", "large"],
    'prices': [
      {
        small: 160,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "Dal Makhani is a creamy and rich Indian dish made with black lentils, kidney beans, butter, and cream, and is slow-cooked to perfection with a blend of aromatic spices.",
  },
  {
    
    name: "BUTTER CHICKEN",
    image:
      "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682.jpg",
    options: ["small", "medium", "large"],
    prices: [
      {
        small: 500,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "Butter Chicken is a rich and creamy Indian dish made with tender chicken pieces cooked in a tomato-based gravy, flavored with aromatic spices and butter",
  },
  {
    name: "DOUBLE CHESSE PIZZA",
    image:
      "https://img.freepik.com/premium-photo/pizza-homemade-double-cheese_43137-188.jpg",
    options: ["small", "medium", "large"],
    prices: [
      {
      small: 200,
        medium: 350,
        large: 450,
      },
    ],
    description:
      "A delicious pizza topped with a double layer of melted cheese, providing an extra rich and gooey experience",
  }
];
export default Pizzas;

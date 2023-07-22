import { ReactComponent as Beer } from "../assets/icon/menu/beer.svg";
import { ReactComponent as Cocktail } from "../assets/icon/menu/cocktail.svg";
import { ReactComponent as ColdDrink } from "../assets/icon/menu/cold_drink.svg";
import { ReactComponent as Food } from "../assets/icon/menu/food.svg";
import { ReactComponent as HotDrink } from "../assets/icon/menu/hot_drink.svg";
import { ReactComponent as Soup } from "../assets/icon/menu/soup.svg";

import nextId from "react-id-generator";

export const dummyProductData = [
  {
    id: nextId(),
    name: "Chocolate Fondant",
    imgUrl:
      "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Tiramisu",
    imgUrl:
      "https://images.unsplash.com/photo-1517400415121-f913b6f87532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 100,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Strawberry Sundae",
    imgUrl:
      "https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Cupcake",
    imgUrl:
      "https://images.unsplash.com/photo-1615832494873-b0c52d519696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 80,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Yogurt with Bake Granola and Fruits",
    imgUrl:
      "https://images.unsplash.com/photo-1600648832373-6f5e75b71ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 150,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Protein Smoothie Bowl",
    imgUrl:
      "https://images.unsplash.com/photo-1622484211785-e2c139030cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 280,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Apple Pie",
    imgUrl:
      "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Croissant",
    imgUrl:
      "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 80,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Diced French Toast Topped with Berries",
    imgUrl:
      "https://images.unsplash.com/photo-1654921304243-0177a403860d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Chocolate Milkshake",
    imgUrl:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
    price: 200,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Raseberry and Blueberry Smoothie",
    imgUrl:
      "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
    price: 200,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Apple and Cucumber Smoothie",
    imgUrl:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Milk Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 100,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Caffè Americano",
    imgUrl:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 90,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Latte",
    imgUrl:
      "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 120,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Caramel Macchiato",
    imgUrl:
      "https://images.unsplash.com/photo-1546549095-5d8bc3c37ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhcmFtZWwlMjBkcmlua3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 180,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Matcha Latte",
    imgUrl:
      "https://images.unsplash.com/photo-1618308113210-3a8a1778f910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    price: 150,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Black Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 90,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Green Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1622480916113-9000ac49b79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    price: 90,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Herbal Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1504382103100-db7e92322d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <HotDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Juice",
    imgUrl:
      "https://images.unsplash.com/photo-1630424836013-00e25bfe1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 130,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Lemonade",
    imgUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 60,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Berry Ice Tea",
    imgUrl:
      "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 150,
    class: <ColdDrink />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Irish coffee",
    imgUrl:
      "https://images.unsplash.com/photo-1605361293140-fd5edb9ae9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Cocktail />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Cocktail",
    imgUrl:
      "https://images.unsplash.com/photo-1606767341197-2de041e9ad9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 250,
    class: <Cocktail />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Champagne",
    imgUrl:
      "https://images.unsplash.com/photo-1601921427660-2e0997a3b8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80",
    price: 350,
    class: <Cocktail />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Beer",
    imgUrl:
      "https://images.unsplash.com/photo-1630446070374-df1ec648ac65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    price: 110,
    class: <Beer />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Vegan Sandwitch",
    imgUrl:
      "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Quiche",
    imgUrl:
      "https://images.unsplash.com/photo-1591985666643-1ecc67616216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 120,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Salad",
    imgUrl:
      "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 220,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Pizza",
    imgUrl:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    price: 120,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Classic Tomato Spagetti",
    imgUrl:
      "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhZ2V0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 300,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Garlic Bacon Pasta",
    imgUrl:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 300,
    class: <Food />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Pumpkin Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 180,
    class: <Soup />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Tomato Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <Soup />,
    quantity: 0,
  },
  {
    id: nextId(),
    name: "Creamy Corn Soup (with Bread)",
    imgUrl:
      "https://images.unsplash.com/photo-1616501268209-edfff098fdd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 180,
    class: <Soup />,
    quantity: 0,
  },
];

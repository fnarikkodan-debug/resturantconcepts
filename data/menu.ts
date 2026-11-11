// Placeholder menu. Edit dishes, prices and heat levels here.
// heat: 0 (none) to 4 (fierce). It is shown as peppercorns coloured
// by ripeness: green, orange, red, black.

export type Dish = {
  name: string;
  description: string;
  price: number; // in rupees
  heat: 0 | 1 | 2 | 3 | 4;
  veg?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  note: string;
  dishes: Dish[];
};

export const menu: MenuSection[] = [
  {
    id: "small-plates",
    title: "Small Plates",
    note: "To begin, with a first crack of pepper",
    dishes: [
      {
        name: "Kurumulaku Chicken Roast",
        description:
          "Country chicken slow-roasted with crushed black pepper, curry leaf and shallots.",
        price: 420,
        heat: 3,
      },
      {
        name: "Pepper Prawn Fry",
        description:
          "Backwater prawns tossed in coconut oil, cracked pepper and kokum.",
        price: 560,
        heat: 3,
      },
      {
        name: "Malabar Pepper Rasam",
        description:
          "A clear, warming broth of tamarind, tomato, garlic and freshly pounded pepper.",
        price: 220,
        heat: 2,
        veg: true,
      },
      {
        name: "Green Peppercorn Kappa Bites",
        description:
          "Crisp tapioca croquettes with brined green peppercorn and coconut chutney.",
        price: 280,
        heat: 1,
        veg: true,
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    note: "The heart of the table",
    dishes: [
      {
        name: "Black Pepper Beef Ularthiyathu",
        description:
          "Beef dry-roasted until dark with coconut slivers, black pepper and garam masala.",
        price: 620,
        heat: 4,
      },
      {
        name: "Pepper Karimeen Pollichathu",
        description:
          "Pearl spot fish marinated in pepper masala, wrapped in banana leaf and seared.",
        price: 780,
        heat: 3,
      },
      {
        name: "Kappa with Pepper Meen Curry",
        description:
          "Mashed tapioca with a tangy seer-fish curry finished with green peppercorn.",
        price: 540,
        heat: 2,
      },
      {
        name: "Mutton Kurumulaku Curry",
        description:
          "Tender mutton in a deep, glossy gravy led by black pepper and roasted coconut.",
        price: 680,
        heat: 4,
      },
      {
        name: "Pepper Mushroom Mappas",
        description:
          "Wild mushrooms simmered in coconut milk with white pepper and fennel.",
        price: 460,
        heat: 2,
        veg: true,
      },
    ],
  },
  {
    id: "breads-rice",
    title: "Breads & Rice",
    note: "To carry every last drop",
    dishes: [
      {
        name: "Malabar Parotta",
        description: "Flaky, layered flatbread, folded by hand and griddled in ghee.",
        price: 90,
        heat: 0,
        veg: true,
      },
      {
        name: "Pepper Neychoru",
        description:
          "Fragrant ghee rice with whole peppercorns, cashew and caramelised onion.",
        price: 260,
        heat: 1,
        veg: true,
      },
      {
        name: "Appam with Pepper Coconut Milk",
        description:
          "Lace-edged rice hoppers with sweetened coconut milk and a whisper of pepper.",
        price: 180,
        heat: 1,
        veg: true,
      },
    ],
  },
  {
    id: "desserts-drinks",
    title: "Desserts & Drinks",
    note: "Sweet, with a slow warmth",
    dishes: [
      {
        name: "Pepper Ice Cream with Jaggery",
        description:
          "Hand-churned cream infused with black pepper, under warm palm-jaggery syrup.",
        price: 260,
        heat: 1,
        veg: true,
      },
      {
        name: "Palm Sugar Payasam",
        description:
          "Rice and coconut-milk pudding with palm sugar, cardamom and a pinch of pepper.",
        price: 240,
        heat: 1,
        veg: true,
      },
      {
        name: "Sulaimani with Crushed Pepper",
        description: "Malabar black tea with lime, mint and crushed peppercorn.",
        price: 120,
        heat: 1,
        veg: true,
      },
      {
        name: "Pepper-Honey Lime Soda",
        description:
          "Forest honey, fresh lime and cracked pepper over sparkling water.",
        price: 160,
        heat: 2,
        veg: true,
      },
    ],
  },
];

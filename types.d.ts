type Product = {
  id: Number;
  title: string;
  price: string;
  description: String;
  category: String;
  image: string;
  rating: {
    rate: Number;
    count: Number;
  };
};

type RootState = {
  cart: cartState;
};


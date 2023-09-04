type Product = {
    id: Number;
    title: string;
    price: Number;
    description: String;
    category: String,
    image: String,
    rating: {
      rate: Number;
      count: Number;
    };
  };
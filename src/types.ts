export interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
  image: {
    contentType: string;
    data: string;
  };
}

export interface QueryProduct {
  products: [Product];
}

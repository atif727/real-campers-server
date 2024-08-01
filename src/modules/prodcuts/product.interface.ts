export type HowToCare = {
  header: string;
  description: string;
};

export type productType = {
  name: string;
  description: string;
  category: string;
  price: number;
  color: string;
  imageUrl: string;
  quantity: number;
  howtocare: HowToCare;
  isFeatured: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
};

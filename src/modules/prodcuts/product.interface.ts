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
};
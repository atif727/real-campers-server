export type Variant = {
  color: string;
  imageUrl: string;
};

export type HowToCare = {
  header: string;
  description: string;
};

export type productType = {
  name: string;
  description: string;
  category: string;
  price: number;
  varients: Variant[];
  quantity: number;
  howtocare: HowToCare;
};
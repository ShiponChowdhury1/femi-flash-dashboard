export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

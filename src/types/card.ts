export interface ICard {
  id: string | number;
  imgUrls: string[];
  rating?: number;
  name: string;
  author: string;
  createdAt: string;
  bookedTill: Date;
  booked: boolean;
  description: string;
}

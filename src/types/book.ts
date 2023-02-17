import { ICommentUser } from './user';

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

interface IHistories {
  id: number;
  userId: number;
}

interface IImage {
  url: string;
}

interface IBooking {
  id: number;
  order: boolean;
  dateOrder: Date | null;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
}

interface IDelivery {
  id: number;
  handed: boolean;
  dateHandedFrom: Date | null;
  dateHandedTo: Date | null;
  recipientId: number;
  recipientFirstName: string;
  recipientLastName: string;
}

interface IComment {
  id: number;
  rating: number;
  text: string;
  createdAt: Date;
  user: ICommentUser;
}

export interface IBook {
  id: number;
  authors: string[];
  booking: IBooking | null;
  categories: string[];
  delivery: IDelivery | null;
  histories: IHistories[];
  image: IImage;
  issueYear: string;
  rating: number | null;
  title: string;
}

export interface ICurrentBook {
  id: number;
  title: string;
  rating: number;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: IImage[];
  categories: string[];
  comments: IComment[];
  booking: IBooking | null;
  delivery: IDelivery | null;
  histories: IHistories[];
}

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
    url: string
}

export interface IBook {
    id: number;
    authors: string[];
    booking: any;
    categories: string[];
    delivery: any;
    histories: IHistories[];
    image: IImage;
    issueYear: string;
    rating: number | null;
    title: string
}

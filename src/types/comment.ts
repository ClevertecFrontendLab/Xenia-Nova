export interface IComment {
  id: string | number;
  user: string;
  avatarUrl: string;
  rating: number;
  text?: string;
  date: string;
}

export interface blogDataProps {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  authorImage: string;
  authorName: string;
  publishDate: string;
  tags?: string[]
}
export type userTypes = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | string | null;
  image: string | null;
} | null;
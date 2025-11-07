// FIX: The `content` property is now an HTML string, not a ReactNode, so the type is changed to `string`. The `React` import is no longer needed.
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
}

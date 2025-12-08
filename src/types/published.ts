export interface PublishedSite {
  id: string;
  siteName: string;
  url: string;
  plan: string;
  status: 'Live' | 'Unpublished';
  datePublished: string;
  description: string;
  tags: string[];
}

import type { ID, Slug } from "@/shared/types/primitives";

export type BreadcrumbLinkType = "internal" | "external" | "anchor";

export type BreadcrumbSchemaMeta = {
  position?: number;
  itemId?: string;
  url?: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
  linkType?: BreadcrumbLinkType;
  icon?: string;
  isActive?: boolean;
  hidden?: boolean;
  meta?: Record<string, unknown>;
  schema?: BreadcrumbSchemaMeta;
};

export type Breadcrumb = {
  items: BreadcrumbItem[];
  enableSchema?: boolean;
};

export type BreadcrumbCategory = {
  id: ID;
  name: string;
  slug: Slug;
};

export type BreadcrumbProduct = {
  id: ID;
  name: string;
  slug: Slug;
};

export type BuildBreadcrumbsParams = {
  pathname: string;
  params?: Record<string, string | undefined>;
  category?: BreadcrumbCategory;
  product?: BreadcrumbProduct;
};

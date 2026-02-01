export type CatalogItem = { slug: string; name: string };

export type ColumnGroup = {
  label: string;
  items: CatalogItem[];
};

export type MegaMenuData = readonly CatalogItem[][] | readonly ColumnGroup[];

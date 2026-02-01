import type { MegaMenuKey } from "@/features/navigation/model";
import type { MegaMenuData, CatalogItem, ColumnGroup } from "@/features/navigation/types";

type Props = {
  variant: MegaMenuKey;
  data: MegaMenuData;
};

export function useMegaMenu({ variant, data }: Props) {
  const isCatalog = variant === "catalog";

  const catalogCols = isCatalog ? (data as readonly CatalogItem[][]) : null;
  const groups = !isCatalog ? (data as readonly ColumnGroup[]) : null;

  return { isCatalog, catalogCols, groups };
}

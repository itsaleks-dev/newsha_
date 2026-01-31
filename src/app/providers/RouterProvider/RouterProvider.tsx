import type { ReactNode } from "react";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppLoader } from "@/shared/ui/AppLoader/AppLoader";

interface Props {
  children: ReactNode;
}

export function RouterProvider({ children }: Props) {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader fullscreen />}>{children}</Suspense>
    </BrowserRouter>
  );
}

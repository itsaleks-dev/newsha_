import type { ReactNode } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "@/app/store/store";

import { restoreSession } from "@/features/auth/model";

interface Props {
  children: ReactNode;
}

export function ReduxProvider({ children }: Props) {
  useEffect(() => {
    store.dispatch(restoreSession());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

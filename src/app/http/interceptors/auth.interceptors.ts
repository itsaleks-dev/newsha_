import { store } from "@/app/store/store";
import { setAuth } from "@/features/auth/model";

import { tokenStorage } from "@/app/http/lib";
import { UnauthorizedError } from "@/app/http/errors";
import { requestInterceptors, responseInterceptors } from "@/app/http/interceptors";

requestInterceptors.push((req) => {
  const token = tokenStorage.get();

  if (!token) return req;

  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

responseInterceptors.push((res) => {
  if (res.status !== 401) return res;

  tokenStorage.clear();
  store.dispatch(setAuth(null));

  throw new UnauthorizedError(res.data);
});

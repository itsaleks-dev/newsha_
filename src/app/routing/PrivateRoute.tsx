import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { selectIsAuthenticated, selectSessionLoaded, openLogin } from "@/features/auth/model";

import { ROUTES } from "@/shared/config/routes";
import { AppLoader } from "@/shared/ui/AppLoader";

export function PrivateRoute() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuthenticated);
  const sessionLoaded = useAppSelector(selectSessionLoaded);
  const location = useLocation();

  useEffect(() => {
    if (sessionLoaded && !isAuth) {
      dispatch(openLogin());
    }
  }, [sessionLoaded, isAuth, dispatch]);

  if (!sessionLoaded) {
    return <AppLoader fullscreen />;
  }

  if (!isAuth) {
    return <Navigate to={ROUTES.HOME} replace state={{ from: location }} />;
  }

  return <Outlet />;
}

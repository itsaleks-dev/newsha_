import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { closeAuthModal, openLogin, openRegister } from "@/features/auth/model";

export function useAuthModal() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.authUI.modal);
  const isOpen = Boolean(mode);

  const close = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  const switchToLogin = useCallback(() => {
    dispatch(openLogin());
  }, [dispatch]);

  const switchToRegister = useCallback(() => {
    dispatch(openRegister());
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return {
    mode,
    isOpen,
    close,
    switchToLogin,
    switchToRegister,
  };
}

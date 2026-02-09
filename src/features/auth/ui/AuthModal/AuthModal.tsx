import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { closeAuthModal, openLogin, openRegister } from "@/features/auth/model";
import { LoginForm } from "@/features/auth/ui/LoginForm";
import { RegisterForm } from "@/features/auth/ui/RegisterForm";

import { AUTH_MODAL_TEXT } from "./config";
import { Overlay, ModalBox, Title, SwitchLink, CloseButton } from "./AuthModal.styled";

export function AuthModal() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.authUI.modal);
  const isOpen = Boolean(mode);

  const close = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isLogin = mode === "login";

  return (
    <Overlay onClick={close}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={close} aria-label="Close">
          ×
        </CloseButton>

        <Title>{isLogin ? AUTH_MODAL_TEXT.LOGIN_TITLE : AUTH_MODAL_TEXT.REGISTER_TITLE}</Title>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <SwitchLink onClick={() => dispatch(isLogin ? openRegister() : openLogin())}>
          {isLogin ? AUTH_MODAL_TEXT.SWITCH_TO_REGISTER : AUTH_MODAL_TEXT.SWITCH_TO_LOGIN}
        </SwitchLink>
      </ModalBox>
    </Overlay>
  );
}

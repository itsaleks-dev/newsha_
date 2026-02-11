export type ModalId = string & { readonly __brand: "ModalId" };

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "fullscreen";
export type ModalAnimation = "fade" | "scale" | "slide-up" | "slide-right";
export type ModalCloseReason = "backdrop" | "escape" | "button" | "programmatic";

export type ModalAction = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
};

export type ModalBaseProps = {
  id: ModalId;
  title?: string;
  subTitle?: string;
  content?: React.ReactNode;
  size?: ModalSize;
  animation?: ModalAnimation;
  closable?: boolean;
  backdropClosable?: boolean;
  scrollbarLock?: boolean;
  closeOnEscape?: boolean;

  onOpen?: () => void;
  onClose?: (reason: ModalCloseReason) => void;
};

export type ModalProps = ModalBaseProps & {
  actions?: ModalAction[];
};

export type ModalState = {
  isOpen: boolean;
};

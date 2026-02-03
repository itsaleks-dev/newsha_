import menuIcon from "/icons/menu.svg";
import bagIcon from "/icons/shopping-bag.svg";
import userIcon from "/icons/user.svg";
import smRightIcon from "/icons/small-right.svg";
import smLeftIcon from "/icons/small-left.svg";
import wishlistIcon from "/icons/heart.svg";
import closeIcon from "/icons/close.svg";
import bgRightIcon from "/icons/arrow-right.svg";
import bgLeftIcon from "/icons/arrow-left.svg";
import searchIcon from "/icons/search.svg";

export const icons = {
  ui: {
    menu: menuIcon,
    close: closeIcon,
    search: searchIcon,
  },
  arrows: {
    smallLeft: smLeftIcon,
    smallRight: smRightIcon,
    bigLeft: bgLeftIcon,
    bigRight: bgRightIcon,
  },
  user: {
    profile: userIcon,
    wishlist: wishlistIcon,
    bag: bagIcon,
  },
} as const;

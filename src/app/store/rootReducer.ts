import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "../model/app.slice";

import { authReducer } from "@/features/auth/model/auth.slice";
import { authUIReducer } from "@/features/auth/model/authUI.slice";

import { productReducer } from "@/features/product/model/product.slice";
import { categoryReducer } from "@/features/category/model/category.slice";
import { catalogReducer } from "@/features/catalog/model/catalog.slice";
import { bannersReducer } from "@/features/banner/model/banner.slice";

import { cartReducer } from "@/features/cart/model/cart.slice";
import { wishlistReducer } from "@/features/wishlist/model";
import { searchReducer } from "@/features/search/model/search.slice";

import { cartUIReducer } from "@/features/cart/model/cartUI.slice";
import { megaMenuReducer } from "@/features/navigation/model";
import { burgerUIReducer } from "@/features/burgerUI/model";
import { consultationUIReducer } from "@/features/consultationUI/model";

import { ordersReducer } from "@/features/orders/model";

export const rootReducer = combineReducers({
  app: appReducer,

  auth: authReducer,
  authUI: authUIReducer,

  product: productReducer,
  category: categoryReducer,
  catalog: catalogReducer,
  banners: bannersReducer,

  cart: cartReducer,
  wishlist: wishlistReducer,
  search: searchReducer,

  cartUI: cartUIReducer,
  megaMenu: megaMenuReducer,
  burgerUI: burgerUIReducer,
  consultationUI: consultationUIReducer,

  orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

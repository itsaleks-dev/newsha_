import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "@/app/model";

import { authReducer } from "@/features/auth/model";
import { authUIReducer } from "@/features/auth/model";
import { productReducer } from "@/features/product/model";
import { categoryReducer } from "@/features/category/model";
import { catalogReducer } from "@/features/catalog/model";
import { bannersReducer } from "@/features/banner/model";
import { cartReducer } from "@/features/cart/model";
import { wishlistReducer } from "@/features/wishlist/model";
import { searchReducer } from "@/features/search/model";
import { cartUIReducer } from "@/features/cart/model";
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

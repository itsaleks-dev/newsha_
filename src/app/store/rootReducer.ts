import { combineReducers } from "@reduxjs/toolkit";

import { authUIReducer } from "@/features/auth/model/authUI.slice";
import { authReducer } from "@/features/auth/model/auth.slice";
import { appReducer } from "../model/app.slice";
import { categoryReducer } from "@/features/category/model/category.slice";
import { catalogReducer } from "@/features/catalog/model/catalog.slice";
import { megaMenuReducer } from "@/features/navigation/model";
import { wishlistReducer } from "@/features/wishlist/model";
import { bannersReducer } from "@/features/banner/model/banner.slice";
import { burgerUIReducer } from "@/features/burgerUI/model";
import { consultationUIReducer } from "@/features/consultationUI/model";
import { productReducer } from "@/features/product/model/product.slice";
import { cartReducer } from "@/features/cart/model/cart.slice";
import { cartUIReducer } from "@/features/cart/model/cartUI.slice";
import { searchReducer } from "@/features/search/model/search.slice";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  authUI: authUIReducer,
  category: categoryReducer,
  catalog: catalogReducer,
  megaMenu: megaMenuReducer,
  wishlist: wishlistReducer,
  banners: bannersReducer,
  burgerUI: burgerUIReducer,
  consultationUI: consultationUIReducer,
  product: productReducer,
  cart: cartReducer,
  cartUI: cartUIReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

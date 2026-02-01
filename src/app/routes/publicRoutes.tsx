import type { RouteObject } from "react-router-dom";

import { AppLayout } from "@/app/layout";

import { HomePage } from "@/pages/HomePage";
import { CatalogPage } from "@/pages/CatalogPage";
import { ProductPage } from "@/pages/ProductPage";
import { StaticPage } from "@/pages/StaticPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { CooperationPage } from "@/pages/CooperationPage";
import { DeliveryPaymentPage } from "@/pages/DeliveryPaymentPage";
import { ReturnExchancePage } from "@/pages/ReturnExchancePage";
import { PublicOfferPage } from "@/pages/PublicOfferPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { AboutPage } from "@/pages/AboutPage";
import { SearchPage } from "@/pages/SearchPage";

export const publicRoutes: RouteObject = {
  path: "/",
  element: <AppLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "catalog", element: <CatalogPage /> },
    { path: "products/:slug", element: <ProductPage /> },
    { path: "page/:slug", element: <StaticPage /> },
    { path: "contacts", element: <ContactsPage /> },
    { path: "cooperation", element: <CooperationPage /> },
    { path: "delivery", element: <DeliveryPaymentPage /> },
    { path: "returns", element: <ReturnExchancePage /> },
    { path: "offer", element: <PublicOfferPage /> },
    { path: "privacy", element: <PrivacyPolicyPage /> },
    { path: "about", element: <AboutPage /> },
    { path: "search", element: <SearchPage /> },
  ],
};

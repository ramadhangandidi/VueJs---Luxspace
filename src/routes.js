import HomePage from "./pages/Home.vue";
import Shipping from "./pages/Shipping.vue";
import ShippingList from "./pages/ShippingList.vue";

export default [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/shipping",
    component: Shipping,
  },
  {
    path: "/shippingList",
    component: ShippingList,
  },
];

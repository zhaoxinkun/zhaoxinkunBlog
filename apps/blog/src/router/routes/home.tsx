// 页面级路由
import { createRoute } from "@tanstack/react-router";
import Home from "../../pages/Home.tsx";
import rootRoute from "./root.tsx";

const homeRoute = createRoute({
  getParentRoute() {
    return rootRoute;
  },
  path: "/",
  component: () => <Home />,
});

export default homeRoute;

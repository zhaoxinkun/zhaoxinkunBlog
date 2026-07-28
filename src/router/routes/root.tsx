// 根路由
import { createRootRoute } from "@tanstack/react-router";
import Dashboard from "../../layout/Dashboard.tsx";

export const rootRoute = createRootRoute({
  component: () => <Dashboard />,
});

export default rootRoute;

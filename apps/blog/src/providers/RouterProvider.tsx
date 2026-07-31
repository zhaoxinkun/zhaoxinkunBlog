import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import router from "../router";
// 路由的Provider

export default function AppRouterProvider() {
  return (
    <>
      {/*注册路由*/}
      <RouterProvider router={router} />
      {/*路由工具*/}
      {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
    </>
  );
}

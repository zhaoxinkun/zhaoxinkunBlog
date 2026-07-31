import homeRoute from "./routes/home.tsx";
import rootRoute from "./routes/root.tsx";
import userRouter from "./routes/user.tsx";

// 组装路由树
export const routeTree = rootRoute.addChildren([homeRoute, userRouter]);

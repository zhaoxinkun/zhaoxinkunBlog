import { createRoute } from "@tanstack/react-router";
import User from "../../pages/User.tsx";
import rootRoute from "./root.tsx";

const userRouter = createRoute({
  getParentRoute() {
    return rootRoute;
  },
  path: "/user",
  component: () => <User />,
});

export default userRouter;

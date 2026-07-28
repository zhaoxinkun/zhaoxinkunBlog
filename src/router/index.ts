// 创建路由实例

import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.ts";

const router = createRouter({
  routeTree,
});
export default router;

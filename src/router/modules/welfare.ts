import { welfare } from "@/router/enums";

export default {
  path: "/welfare",
  redirect: "/welfare/index",
  meta: {
    icon: "ant-design:coffee-outlined",
    title: "福利管理",
    rank: welfare
  },
  children: [
    {
      path: "/welfare/index",
      name: "WelfareManage",
      component: () => import("@/views/welfare/index.vue"),
      meta: {
        title: "福利管理",
      }
    }
  ]
} satisfies RouteConfigsTable;

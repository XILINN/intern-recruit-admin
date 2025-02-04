import { guide } from "@/router/enums";

export default {
  path: "/guide",
  redirect: "/guide/index",
  meta: {
    icon: "ant-design:compass-outlined",
    title: "系统内容管理",
    rank: guide
  },
  children: [
    {
      path: "/guide/index",
      name: "GuideManage",
      component: () => import("@/views/guide/index.vue"),
      meta: {
        title: "系统内容管理",
      }
    }
  ]
} satisfies RouteConfigsTable;

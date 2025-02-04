import { classify } from "@/router/enums";

export default {
  path: "/classify",
  redirect: "/classify/industry",
  meta: {
    icon: "ri:list-check",
    title: "分类管理",
    rank: classify
  },
  children: [
    {
      path: "/classify/industry",
      name: "IndustryClassify",
      component: () => import("@/views/classify/industry.vue"),
      meta: {
        icon: "ep:menu",
        title: "行业分类",
        showParent: true
      }
    },
    {
      path: "/classify/position",
      name: "PositionClassify",
      component: () => import("@/views/classify/position.vue"),
      meta: {
        icon: "ri:bank-card-line",
        title: "岗位分类",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;

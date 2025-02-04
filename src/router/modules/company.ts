import { company } from "@/router/enums";

export default {
  path: "/company",
  redirect: "/company/index",
  meta: {
    icon: "ant-design:copyright-circle-outlined",
    title: "公司管理",
    rank: company
  },
  children: [
    {
      path: "/company/index",
      name: "CompanyManage",
      component: () => import("@/views/company/index.vue"),
      meta: {
        title: "公司管理",
      }
    }
  ]
} satisfies RouteConfigsTable;

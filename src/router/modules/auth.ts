import { auth } from "@/router/enums";

export default {
  path: "/auth",
  redirect: "/auth/company",
  meta: {
    icon: "ant-design:carry-out-outlined",
    title: "认证管理",
    rank: auth
  },
  children: [
    {
      path: "/auth/company",
      name: "CompanyAuth",
      component: () => import("@/views/auth/company.vue"),
      meta: {
        icon:"ant-design:reconciliation-outlined",
        title: "公司资质认证",
        showParent: true
      }
    },
    {
      path: "/auth/user",
      name: "UserAuth",
      component: () => import("@/views/auth/user.vue"),
      meta: {
        icon:"ant-design:idcard-outlined",
        title: "用户实名认证",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;

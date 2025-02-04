import { user } from "@/router/enums";

export default {
  path: "/user",
  redirect: "/user/admin",
  meta: {
    icon: "ant-design:team-outlined",
    title: "用户管理",
    rank: user
  },
  children: [
    {
      path: "/user/admin",
      name: "AdminManage",
      component: () => import("@/views/user/admin.vue"),
      meta: {
        icon:"ant-design:user-outlined",
        title: "管理员",
        showParent: true
      }
    },
    {
      path: "/user/intern",
      name: "InternManage",
      component: () => import("@/views/user/intern.vue"),
      meta: {
        icon:"ant-design:smile-outlined",
        title: "应聘者",
        showParent: true
      }
    },
    {
      path: "/user/recruit",
      name: "RecruitManage",
      component: () => import("@/views/user/recruit.vue"),
      meta: {
        icon:"ant-design:trademark-circle-outlined",
        title: "招聘者",
        showParent: true
      }
    },
  ]
} satisfies RouteConfigsTable;

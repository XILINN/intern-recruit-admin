import { dispute } from "@/router/enums";

export default {
  path: "/dispute",
  redirect: "/dispute/index",
  meta: {
    icon: "ep:stamp",
    title: "纠纷管理",
    rank: dispute
  },
  children: [
    {
      path: "/dispute/agreement",
      name: "AgreementManage",
      component: () => import("@/views/dispute/agreement.vue"),
      meta: {
        icon:"ant-design:file-text-outlined",
        title: "实习协议管理",
        showParent: true
      }
    },
    {
      path: "/dispute/index",
      name: "DisputeManage",
      component: () => import("@/views/dispute/index.vue"),
      meta: {
        icon:"ant-design:comment-outlined",
        title: "纠纷调解",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;

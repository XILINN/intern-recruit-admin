import { http } from "@/utils/http";
import { baseUrlApi } from "@/api/common/utils";

export type AdminLoginDTO = {
  /** 用户名 */
  username: string;
  /**  密码 */
  password: string;
};

export type AdminLogiVO = {
  /** 用户名 */
  username: string;
  /** 昵称 */
  nickname: string;
  /** 头像地址 */
  avatar: string;
  /** 性别 */
  sex: number;
  /** 电话 */
  phone: string;
  /** 角色 */
  roles: Array<string>;
  /** token */
  token: string;
};

/** 登录接口 */
export const loginByPassword = (data: AdminLoginDTO) => {
  return http.request<ResponseData<AdminLogiVO>>("post", baseUrlApi("/admin/login"), { data });
};
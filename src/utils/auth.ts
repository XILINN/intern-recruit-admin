import Cookies from "js-cookie";
import { useUserStoreHook } from "@/store/modules/user";
import { storageLocal, isString, isIncludeAllChildren } from "@pureadmin/utils";
import { avatar } from "@/views/login/utils/static";

export interface DataInfo<T> {
  /** token */
  token: string;
  /** 头像 */
  avatar?: string;
  /** 用户名 */
  username?: string;
  /** 昵称 */
  nickname?: string;
  /** 当前登录用户的角色 */
  roles?: Array<string>;
  /** 当前登录用户的按钮级别权限 */
  permissions?: Array<string>;
}

export const userKey = "user-info";
export const TokenKey = "token";

/** 获取`token` */
export function getToken(): DataInfo<number> {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  return Cookies.get(TokenKey)
    ? JSON.parse(Cookies.get(TokenKey))
    : storageLocal().getItem(userKey);
}

export function setToken(data: DataInfo<Date>) {
  const cookieString = JSON.stringify(data.token);
  Cookies.set(TokenKey, cookieString);
  
  useUserStoreHook().SET_AVATAR(data.avatar);
  useUserStoreHook().SET_USERNAME(data.username);
  useUserStoreHook().SET_NICKNAME(data.nickname);
  useUserStoreHook().SET_ROLES(data.roles);
  useUserStoreHook().SET_PERMS(data.permissions);

  storageLocal().setItem(userKey, {
    avatar: data.avatar,
    username: data.username,
    nickname: data.nickname,
    roles: data.roles,
    permissions: data.permissions
  });
}

/** 删除`token`以及key值为`user-info`的localStorage信息 */
export function removeToken() {
  Cookies.remove(TokenKey);
  storageLocal().removeItem(userKey);
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return "Bearer " + token;
};

/** 是否有按钮级别的权限（根据登录接口返回的`permissions`字段进行判断）*/
export const hasPerms = (value: string | Array<string>): boolean => {
  if (!value) return false;
  const allPerms = "*:*:*";
  const { permissions } = useUserStoreHook();
  if (!permissions) return false;
  if (permissions.length === 1 && permissions[0] === allPerms) return true;
  const isAuths = isString(value)
    ? permissions.includes(value)
    : isIncludeAllChildren(value, permissions);
  return isAuths ? true : false;
};

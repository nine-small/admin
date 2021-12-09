/**
 * 如果登陆了，利用本地localStorage进行存储
 * 如果注销，则清除本地的localStorage中的用户信息
 *
 * 登陆鉴权
 * 查看是否登陆，查看localStorage中的用户信息是否正确。
 * 如果登陆了，直接放行
 * 如果没有登陆，就查看是否需要鉴权
 * 如果不需要鉴权，直接放行
 * 如果需要鉴权，就记录想去的页面，然后跳转到登陆页
 */

// 正常来说，localStorage中应该存储的是一段字符串，需要发给服务器，让服务器进行判断是否有用，现在就简单的处理。
import store from "@/store";
export default (to, from, next) => {
  const storeUser = store.state.user.user;
  if (storeUser) {
    next();
  } else {
    // 拿到localStorage中的用户信息。
    const user = JSON.parse(localStorage.getItem("USER"));
    if (user) {
      store
        .dispatch("user/login", { email: user.email, password: "2022woaijj" })
        .then((r) => {
          if (r.status === "success") {
            next();
          } else {
            next("/login?wanth=" + to.path);
          }
        });
    } else {
      if (!to.meta.auth) {
        next();
      } else {
        const want = to.path;
        next("/login?want=" + want);
      }
    }
  }
};

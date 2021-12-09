export default [
  {
    path: "/",
    name: "Home",
    redirect: "/census",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "主页",
      auth: true,
    },
    children: [
      {
        path: "/census",
        name: "Census",
        component: () => import("../views/Census.vue"),
        meta: {
          title: "统计",
          auth: true,
          bread:[{click:true,name:"Home",title:"主页"},{name:"Census",title:"统计"}]
        },
      },

      {
        path: "pro",
        name: "Pro",
        redirect:'pro/list',
        component: () => import("../components/Product.vue"),
        meta: {
          title: "商品",
          auth: true,
        },
        children: [
          {
            path: "add",
            name: "Add",
            component: () => import("../views/Add.vue"),
            meta: {
              title: "增加商品",
              auth: true,
              bread:[{name:'Home',title:'主页'},{name:'Pro',title:'商品'},{name:'Add',title:'新增商品'},]
            },
          },
          {
            path: "list",
            name: "List",
            component: () => import("../views/List.vue"),
            meta: {
              title: "商品列表",
              auth: true,
              bread:[{name:'Home',title:'主页'},{click:true,name:'Pro',title:'商品'},{name:'List',title:'商品列表'},]

            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登陆",
      auth: false,
    },
  },
];

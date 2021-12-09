import request from "./request";

// 分页获取商品
/**
 *
 * @param {Number} page 第几页的数据
 * @param {Number} size 每页显示多少条
 * @param {Number} category 分类
 * @param {String} searchWord 搜索字
 */

export async function getProducts(
  page = 1,
  size = 10,
  category,
  searchWord
) {
  return await request({
    url: "/products/all",
    method: "get",
    params: {
      page,
      size,
      category,
      searchWord,
    },
  });
}

// 获取产品分类
export async function getCategory(page = 1, size = 10) {
  return await request({
    url: "/category/all",
    method: "get",
    params: {
      page,
      size,
    },
  });
}

// 删除商品
export async function delProduct(id){
  return await request({
    url:'/products/'+id,
    method:'delete'
  })
}

// 获取单个产品信息
export async function getProduct(id){
  return await request({
    url:'/products/'+id,
    method:'get'
  })
}
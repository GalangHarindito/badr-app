export const productsFilter = (listProduct: any, listOrder: any) => {
  let arr: any[] = [];
  listProduct.map((product: any) => {
    listOrder.map((order: any, idx: any) => {
      if (product.id == order.productId) {
        arr.push({ ...listOrder[idx], productName: product.name });
      }
    });
  });
  return arr;
};

export interface IOrderResponse {
  page: number;
  limit: number;
  total: number;
  list: [
    {
      name: string;
      price: number;
      id: number;
    }
  ];
}

export interface IOrderDetailResponse {
  id: string;
  customer_name: string;
  products: Array<IProducts>;
}

export interface IProducts {
  product_id: number;
  product_price: number;
  quantity: number;
}

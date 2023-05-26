import axios from "axios";
import { IOrderResponse, IOrderDetailResponse } from "./typeData";

const Base_URL =
  "https://b7bd6a50-0036-42bc-9b75-f732c791fe87.mock.pstmn.io/api/";

export const fetchApi = axios.create({
  baseURL: Base_URL,
});

fetchApi.defaults.headers.common["Content-Type"] = "application/json";

export const getOrderList = async (page: number) => {
  const response = await fetchApi.get<IOrderResponse>(
    `orders?page=${page}&limit=${10}&customer_name=${null}&order_date=${null}`
  );
  return response.data;
};

export const getOrderListDetail = async (id: string) => {
  const response = await fetchApi.get(`order/${id}`);
  return response;
};

export const getProduct = async () => {
  const response = await fetchApi.get(`products`);
  return response.data.data;
};

export const deleteOrder = async (id: string | number) => {
    const response = await fetchApi.delete(`order/${id}`);
    return response;
  };

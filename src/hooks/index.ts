import { useQuery, useMutation } from '@tanstack/react-query';
import { getOrderList, getOrderListDetail, getProduct, deleteOrder, createOrder } from '../pages/api/orderManagement';

export const orderList = (page:number) => {
    return useQuery(['getOrderList', page], () => getOrderList(page));
}

export const orderListDetail = (id:string) => {
    return useQuery(['getOrderListDDetail', id], () => getOrderListDetail(id));
}

export const orderProduct = () => {
    return useQuery(['getProduct'], () => getProduct());
}

export const deleteOrderProduct = () => {
    return useMutation((id:string | number) => deleteOrder(id));
}

export const createUserOrder = () => {
    return useMutation((data:object) => createOrder(data));
}
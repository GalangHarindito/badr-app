import { useEffect, useState } from "react";
import { toCurrency } from "@helpers/general";
import TableDetailOrder from "./_component/table";
import { orderProduct } from "../../hooks";
import { productsFilter } from "@helpers/produtcs";

interface OrderListDetailProps {
  dataOrder: {
    id: string;
    customerName: string;
    products: ProductProps[];
  };
}

interface ProductProps {
  productId: any;
  productPrice: number;
  quantity: number;
}

const OrderListDetail = ({ dataOrder }: OrderListDetailProps | any) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [newProducts, setNewProducts] = useState<any[]>();
  const { products } = dataOrder;

  const { data, isLoading } = orderProduct();

  const handleTotalPrice = () => {
    let total = 0;
    for (let index of dataOrder.products) {
      total += index.productPrice;
    }
    setTotalPrice(total);
  };
  const informationUser = [
    { title: "Order ID", value: dataOrder.id },
    { title: "Customer Name", value: dataOrder.customerName },
    { title: "Total Order Price", value: toCurrency(totalPrice) },
  ];

  useEffect(() => {
    handleTotalPrice();
  }, [dataOrder]);

  useEffect(() => {
    if (data) {
      setNewProducts(productsFilter(data, products));
    }
  }, [data]);

  const column = ["Product Name", "Quantity", "Price"];

  return (
    <>
      {isLoading ? (
        <p className='text-xl flex items-center justify-center font-bold'>Lagi loading...</p>
      ) : (
        <>
          {dataOrder && (
            <div>
              {dataOrder &&
                informationUser.map((item) => {
                  return (
                    <div className='mb-4'>
                      <div>{item.title}</div>
                      <div className='text-lg font-bold mt-1'>{item.value}</div>
                    </div>
                  );
                })}
            </div>
          )}
          <div className='devider' />
          <div className='my-4 text-grayScale2'>Product Detail</div>
          {newProducts && (
            <TableDetailOrder column={column} data={newProducts} />
          )}
        </>
      )}
    </>
  );
};

export default OrderListDetail;

import type { NextPage } from "next";
import OrderManagement from "@fragment/orderManagement/orderManagement";
import { orderList, deleteOrderProduct } from "../hooks";
import { useState } from "react";

const Home: NextPage = () => {
  const [page] = useState<number>(1);
  const { data, isLoading } = orderList(page);

  const { mutate, isLoading: isDeleting } = deleteOrderProduct();

  const handleDelete = (id: string | number) => {
    mutate(id);
  };
  if (isLoading) {
    return (
      <p className='text-xl flex items-center justify-center font-bold'>
        lagi loading....
      </p>
    );
  }

  if (isDeleting) {
    return (
      <p className='text-xl flex items-center justify-center font-bold'>
        lagi loading delete....
      </p>
    );
  }
  return (
    <>
      {data && (
        <OrderManagement
          data={data}
          onDelete={(id: string | number) => handleDelete(id)}
        />
      )}
    </>
  );
};

export default Home;

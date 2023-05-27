import { useRouter } from "next/router";
import OrderCreatePage from "@fragment/orderManagement/orderCreate";
import { createUserOrder } from "../../hooks";

const OrderCreate = () => {
  const router = useRouter();
  const { mutate, isLoading: isUploading, isSuccess } = createUserOrder();
  const handleSubmit = (data: any) => {
    data.products.map((item: any) => {
      delete item.price;
      delete item.productPrice;
    });
    mutate(data);
  };

  if (isUploading) {
    return (
      <p className='text-xl flex items-center justify-center font-bold'>
        Lagi loading upload...
      </p>
    );
  }
  const success = () => {
    router.push("/");
  };

  if (isSuccess) {
    success();
  }

  return (
    <>
      <OrderCreatePage submitData={(data: any) => handleSubmit(data)} />
    </>
  );
};

export default OrderCreate;

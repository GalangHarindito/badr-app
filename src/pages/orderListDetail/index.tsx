import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { orderListDetail } from "../../hooks";
import OrderListDetail from "@fragment/orderManagement/orderListDetail";

const OrderListdetail: NextPage = () => {
  const router = useRouter();
//   console.log(router.query.id)
//   const [id, setid] = useState<any>(router.query.id);
  const [newData, setNewData] = useState<object>();

  const { data, isLoading } = orderListDetail(router.query.id);

  const handleData = () => {
    const replaceSnakeCase = data?.data.replace(/_([a-z])/g, function (g: any) {
      return g[1].toUpperCase();
    });

    const findString = data && replaceSnakeCase.split(/[:,]/)[3].trim();
    const res = JSON.parse(
      replaceSnakeCase.replace(findString, `"${findString}"`)
    );
    return res;
  };

  useEffect(() => {
    if (data) {
      setNewData(handleData());
    }
  }, [data]);

  return (
    <div>
      {isLoading ? <p className='text-xl flex items-center justify-center font-bold'>Lagi Loading....</p> : newData && <OrderListDetail dataOrder={newData} />}
    </div>
  );
};

export default OrderListdetail;

import { useMemo } from "react";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useRouter } from "next/router";
import { toCurrency, formatDate } from '@helpers/general';
import Button from "@components/general/button";
import Input from "@components/form/input";
import DatePicker from "@components/form/input/datePicker";
import ButtonIcon from "@components/general/buttonIcon";

interface OrderManagementProps {
  data?: {
    list: Array<ListProps>;
    page: number;
    total: number;
    limit: number;
  }
  onDelete: (s:any) => {};
}

interface ListProps {
  created_at: string;
  customer_name: string;
  total_products: number;
  total_price: string;
  id: string;
}

const OrderManagement = ({ data, onDelete }: OrderManagementProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('orderCreate')
  };

  const handleClickAction = (id: string | number, button: string) => {
    if (button === "view") {
      router.push(`orderListDetail?id=${id}`);
    }if(button === "delete"){
      onDelete(id)
    }
  };

  const buttonAction = [
    {
      button: "edit",
      icon: "assets/ic-edit.svg",
    },
    {
      button: "view",
      icon: "assets/ic-detail.svg",
    },
    {
      button: "delete",
      icon: "assets/ic-delete.svg",
    },
  ];
  const columns = useMemo<MRT_ColumnDef<ListProps>[]>(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "Order Id",
      },
      {
        accessorKey: "customer_name",
        header: "Customer",
      },
      {
        accessorKey: "total_products", //normal accessorKey
        header: "Total Products",
      },
      {
        accessorKey: "total_price",
        header: "Total Price",
        Cell: ({ cell }) => (
          <div>
            <div>{toCurrency(cell.row.original.total_price)}</div>
          </div>
        ),
      },
      {
        accessorKey: "created_at",
        header: "Order Date",
        Cell: ({ cell }) => (
          <div>
            <div>{formatDate(cell.row.original.created_at, 'L')}</div>
          </div>
        ),
      },
      {
        header: "Action",
        enableGlobalFilter: false,
        Cell: ({ cell }) => (
          <div>
            {buttonAction.map((item) => {
              return (
                <ButtonIcon
                  icon={item.icon}
                  onClick={() => handleClickAction(cell.row.index, item.button)}
                  type='button'
                />
              );
            })}
          </div>
        ),
      },
    ],
    []
  );
  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <div className='flex gap-4 mb-6'>
          <Input
            label='Customer name'
            type={"text"}
            placeHolder='Input customer name'
          />
          <DatePicker label='Create date' placeHolder='Select date' />
        </div>
        <Button
          label={"Add New Order"}
          onClick={handleClick}
          buttonStyle='buttonPrimary'
          type='submit'
        />
      </div>

      <div className='mb-'>
        <MantineReactTable
          columns={columns}
          data={data?.list ?? []}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableTopToolbar={false}
        />
      </div>
    </>
  );
};

export default OrderManagement;

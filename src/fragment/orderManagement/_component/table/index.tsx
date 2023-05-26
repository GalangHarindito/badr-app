import { toCurrency } from "@helpers/general";

const TableDetailOrder = ({ data, column }: any) => {
  return (
    <table>
      <thead>
        {column &&
          column.map((item: any) => {
            return <th className='text-left'>{item}</th>;
          })}
      </thead>

      <tbody>
        {data &&
          data.map((item: any) => {
            return (
              <tr>
                <td className='w-80 text-left py-2'>{item.productName}</td>
                <td className='w-60 text-left'>{item.quantity}</td>
                <td className='w-60 text-left'>{toCurrency(item.productPrice)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableDetailOrder;

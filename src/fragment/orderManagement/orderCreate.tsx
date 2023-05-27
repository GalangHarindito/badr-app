import { useRouter } from "next/router";
import Input from "@components/form/input";
import { Field, FieldArray, Form, Formik, getIn } from "formik";
import Button from "@components/general/button";
import { SetStateAction, useState } from "react";
import Select from "@components/form/select";
import { orderProduct } from "../../hooks";
import { toCurrency } from "@helpers/general";


interface OrderCreatePageProps {
  submitData: any;
}
const OrderCreatePage = ({submitData}:OrderCreatePageProps) => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const { data, isLoading:loadingListProduct } = orderProduct();
  const onHandleSubmit = (value: string) => {
    const values = { products: value.products, customer_name: input };
    submitData(values);
  };

  if(loadingListProduct){
    return <p className='text-xl flex items-center justify-center font-bold'>Lagi loading...</p>
  }
  return (
    <div>
      <div className='w-72'>
        <Input
          label='Customer name'
          type={"text"}
          placeHolder='Input customer name'
          onChanges={(e: { target: { value: SetStateAction<string> } }) =>
            setInput(e.target.value)
          }
          required
        />
      </div>
      <div className='devider' />
      <div className='my-4 text-grayScale2'>Product Detail</div>
      <Formik
        initialValues={{
          products: [
            {
              product_id: "",
              quantity: "",
              productPrice: "",
              price: "",
            },
          ],
        }}
        onSubmit={(values: any, actions) => {
          setTimeout(() => {
            onHandleSubmit(values);
            actions.setSubmitting(false);
          }, 500);
        }}
      >
        {({ values, handleSubmit, isSubmitting, setFieldValue }) => {
          const total = values.products.reduce((acc: any, obj: any) => {
            return acc + obj.productPrice;
          }, 0);
          return (
            <Form onSubmit={handleSubmit}>
              <FieldArray name='products'>
                {(arrayHelpers) => (
                  <div>
                    {values.products &&
                      values.products.length > 0 &&
                      values.products.map((p: any, index: any) => {
                        const price = (qty: any, id: any) => {
                          const filter = data.filter(
                            (item: any) => item.id == id
                          );

                          setFieldValue(
                            `products[${index}].price`,
                            filter[0].price
                          );
                          setFieldValue(
                            `products[${index}].productPrice`,
                            Number(qty) * Number(filter[0].price)
                          );
                        };

                        return (
                          <div className='mb-10' key={index}>
                            <div className='flex gap-4 items-center'>
                              <div className='flex flex-col gap-4'>
                                <Field
                                  name={`products[${index}].product_id`}
                                  component={Select}
                                  label='Product Name'
                                  placeHolder='Select product name'
                                  options={data}
                                  onChanges={(e: any) => {
                                    setFieldValue(
                                      `products[${index}].product_id`,
                                      e.target.value
                                    );
                                    const quantity = getIn(
                                      values,
                                      `products[${index}].quantity`
                                    );
                                    price(quantity, e.target.value);
                                  }}
                                  required
                                />
                                <Field
                                  name={`products[${index}].quantity`}
                                  type='number'
                                  component={Input}
                                  label='Quantity'
                                  placeHolder='Input quantity'
                                  onChanges={(e: any) => {
                                    setFieldValue(
                                      `products[${index}].quantity`,
                                      e.target.value
                                    );
                                    const productId = getIn(
                                      values,
                                      `products[${index}].product_id`
                                    );
                                    price(e.target.value, productId);
                                  }}
                                  required
                                />
                              </div>
                              <div className='flex flex-col gap-4'>
                                <Field
                                  name={`products[${index}].price`}
                                  component={Input}
                                  placeHolder='You need to select product name'
                                  label='Price'
                                  value={
                                    getIn(values, `products[${index}].price`)
                                      ? toCurrency(
                                          getIn(
                                            values,
                                            `products[${index}].price`
                                          )
                                        )
                                      : ""
                                  }
                                  disabled
                                />
                                <Field
                                  name={`products[${index}].productPrice`}
                                  component={Input}
                                  placeHolder='You need to input qantity'
                                  label='Total Product Price'
                                  value={
                                    getIn(
                                      values,
                                      `products[${index}].productPrice`
                                    )
                                      ? toCurrency(
                                          getIn(
                                            values,
                                            `products[${index}].productPrice`
                                          )
                                        )
                                      : ""
                                  }
                                  disabled
                                />
                              </div>
                            </div>

                            <div className='flex gap-4 mt-5'>
                              <Button
                                type='button'
                                buttonStyle='buttonDark'
                                onClick={() =>
                                  arrayHelpers.push({
                                    product_id: "",
                                    quantity: "",
                                    productPrice: "",
                                    price: "",
                                  })
                                }
                                label='Add More Product'
                              />
                              <Button
                                type='button'
                                buttonStyle='buttonTransparent'
                                onClick={() => arrayHelpers.remove(index)}
                                label='Delete'
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </FieldArray>
              <div className='devider' />

              <Input
                label='Total Order Price'
                type={"text"}
                placeHolder='Total Price'
                value={total ? toCurrency(total) : ""}
                disabled
              />

              <div className='flex justify-start gap-4 mt-10'>
                <Button
                  type='submit'
                  buttonStyle='buttonPrimary'
                  label='Save'
                  disabled={isSubmitting}
                />
                <Button
                  type='button'
                  buttonStyle='buttonTransparent'
                  label='Back'
                  onClick={() => router.push("/")}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OrderCreatePage;

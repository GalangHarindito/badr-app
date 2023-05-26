import { useRouter } from "next/router";
import Input from "@components/form/input";
import { Field, FieldArray, Form, Formik, getIn } from "formik";
import Button from "@components/general/button";

const OrderCreatePage = () => {
  const router = useRouter();
  const onHandleSubmit = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <div className='w-72'>
        <Input
          label='Customer name'
          type={"text"}
          placeHolder='Input customer name'
          required
        />
      </div>
      <div className='devider' />
      <div className='my-4 text-grayScale2'>Product Detail</div>
      <Formik
        initialValues={{
          products: [
            {
              product_id: 0,
              quantity: 0,
              productPrice: 0,
              price: 0,
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
        {({ values, handleSubmit, isSubmitting, setFieldValue, errors }) => {
          const errorFormat = (i: number) => {
            const quantity = getIn(values, `products[${i}].quantity`);
          };

          return (
            <Form onSubmit={handleSubmit}>
              <FieldArray name='product'>
                {(arrayHelpers) => (
                  <div>
                    {values.product.length > 0 &&
                      values.products.map((p: any, index: any) => {
                        return (
                          <div className='mb-2' key={index}>
                            <div className='flex gap-4'>
                              <div className='flex flex-col gap-4'>
                                <Field
                                  name={`product[${index}].product_id`}
                                  component={Input}
                                  label='Product Name'
                                  placeHolder='Select product name'
                                />
                                <Field
                                  name={`product[${index}].quantity`}
                                  component={Input}
                                  label='Quantity'
                                  placeHolder='Input quantity'
                                />
                              </div>
                              <div className='flex flex-col gap-4'>
                                <Field
                                  name={`product[${index}].price`}
                                  component={Input}
                                  placeHolder='You need to select product name'
                                  label='Price'
                                  disabled
                                />
                                <Field
                                  name={`product[${index}].productPrice`}
                                  component={Input}
                                  placeHolder='You need to input qantity'
                                  label='Total Product Price'
                                  disabled
                                />
                              </div>
                            </div>

                            <div className='flex gap-4 mt-5'>
                              <Button
                                type='button'
                                buttonStyle='buttonDark'
                                onClick={() => arrayHelpers.push({
                                    product_id: '',
                                    quantity: '',
                                    productPrice: '',
                                    price: '',
                                  },)}
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

              <div className='flex justify-start gap-4 mt-10'>
                <Button
                  type='button'
                  buttonStyle='buttonPrimary'
                  label='Save'
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

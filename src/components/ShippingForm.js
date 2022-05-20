import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { object, string, setLocale} from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const postCodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i

setLocale({
  mixed: {
    required: 'This is a required field.',
  },
  string: {
    max: 'You have exceeded the maximum of ${max} characters.'
  }
});

const schema = object().shape({
  firstName: string().required().min(1).max(32),
  lastName: string().required().max(32),
  "address1": string().required().max(64),
  "address2":string().max(64),
  "city": string().required().max(64),
  postcode: string().required().matches(postCodeRegex, "Invalid Postcode.")
})

function ShippingForm() {

  const { register, handleSubmit, trigger, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  
  const onSubmitHandler = (data) => {
    console.log(data)
  }

  const inputFields = [{
    id: "first-name",
    name: "firstName",
    placeHolder:"First Name",
    autocomplete: "givenName",
    errors: errors.firstName?.message,
  },
  {
    id: "last-name",
    name: "lastName",
    placeHolder:"Last Name",
    autocomplete: "familyName",
    errors: errors.lastName?.message
  },
  {
    id: "address-1",
    name: "address1",
    placeHolder:"Address 1",
    autocomplete: "address-line1",
    errors: errors.address1?.message
  },
  {
    id: "address-2",
    name: "address2",
    placeHolder:"Address 2 (optional)",
    autocomplete: "address-line2",
    errors: errors.address2?.message
  },
  {
    id: "city",
    name: "city",
    placeHolder:"City",
    autocomplete: "address-level2",
    errors: errors.city?.message
  },
  {
    id: "postcode",
    name: "postcode",
    placeHolder:"Postcode",
    autocomplete: "postal-code",
    errors: errors.postcode?.message
  }]

  return (

    <form className="shipping-form" onSubmit={handleSubmit(onSubmitHandler)}>
    
      <div className="shipping-inputs">
        {inputFields.map(field => 
          <TextInput
            key={field.id}
            id={field.id}
            name={field.name}
            placeHolder={field.placeHolder}
            autocomplete={field.autocomplete}
            register={register}
            trigger={trigger}
            errors={field.errors}
          />
        )}
      </div>

      <button className="checkout-btn" type="submit">
        Confirm shipping details.
      </button>

    </form>
  )
}

export default ShippingForm
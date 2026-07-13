"use server";
import axios from "axios";


export async function sendData(prevState:any, data: FormData){
  try {
    const resp = await axios.post(`${process.env.NEXT_PUBLIC_CONTACT}`, data, {
      method: "POST",
      headers: {
        Accept: "application/json",
      }
    });

    const errors = Object.fromEntries(
      (resp.data.invalid_fields ?? []).map((invalid: any) => [
        invalid.field,
        invalid.message,
      ]),
    );
    const values = Object.fromEntries(data)
    console.log(values)
    return {
      status: resp.data.status,
      message: resp.data.message,
      field: values,
      errors
      
    };
    
  } catch (error) {
    return {
      status: 'Not sent',
      message: 'something went wrong, error',
      
    }
  }
}

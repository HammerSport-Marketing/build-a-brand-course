import React, { useEffect, useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"


export default ({ cart }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [token, setToken] = useState(null)
  const [total, setTotal] = useState("loading")
  const handleSubmit =  (event) => {
  }

    

 


  useEffect(() => {
    const loadToken = async () => {
      const response = await fetch("http://localhost:1337/orders/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart
        })
      })
      const data = await response.json()
      console.log("Load Token Data", data)
      setToken(data.client_secret)
      setTotal(data.amount)
    }

    loadToken()
  }, [cart] )

  if (token) {
    return (
      <div>
        <h3>Total: {total}</h3>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button disabled={!stripe}>Confirm order</button>
        </form>
      </div>
    )
  } else {
    return <p>Loading</p>
  }
}

import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}:any) => {
  return (
    <PayPalScriptProvider options={{ clientId: "ARJpueuucpPIiMF82wsyDyg289cjAf1kMzLl8yPVy5NN6YK0RbH3_Kw9y8XoGGDTAw_KmG0tWdkO_Ezw" }}>
            <PayPalButtons 
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units:[{amount: {value:amount}}]
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order?.capture().then(onSuccess)
                }}
                onError={onError}
            />
        </PayPalScriptProvider>
  )
}

export default PayPalButton


// 
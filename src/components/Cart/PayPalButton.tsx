
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}:any) => {
  return (
    <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
            <PayPalButtons 
                style={{ layout: "vertical" }}
                // createOrder={(data, actions) => {
                createOrder={( actions) => {
                    // @ts-ignore
                    return actions.order.create({
                        purchase_units:[{amount: {value:amount}}]
                    })
                }}
                // onApprove={(data, actions) => {
                onApprove={( actions) => {
                    // @ts-ignore
                    return actions.order?.capture().then(onSuccess)
                }}
                onError={onError}
            />
        </PayPalScriptProvider>
  )
}

export default PayPalButton


// 
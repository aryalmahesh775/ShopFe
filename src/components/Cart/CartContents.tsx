import { RiDeleteBin3Fill } from "react-icons/ri"

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: 'T-shirt',
            price: 15,
            quantity: 2,
            color:"Red",
            size:"M",
            image: 'https://picsum.photos/200?random=1'
        },
        {
            productId: 2,
            name: 'Jeans',
            price: 25,
            quantity: 2,
            color:"Blue",
            size:"L",
            image: 'https://picsum.photos/200?random=2'
        },
        {
            productId: 3,
            name: 'Shirt',
            price: 10,
            quantity: 2,
            color:"White",
            size:"M",
            image: 'https://picsum.photos/200?random=3'
        },

    ]
  return (
    <div>
      {cartProducts.map((product, index) => ( 
        <div key={index} className="flex items-start justify-between py-4 border-b">
            <div className="flex items-start">
                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded " />
                <div className="">
                    <h3 className="">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                        size:{product.size} | color:{product.color}
                    </p>
                    <div className="flex items-center mt-2">
                        <button className="border rounded px-1.5 py-0.5 text-xl font-medium">-</button>
                        <span className="mx-2">{product.quantity}</span>
                        <button className="border rounded px-1.5 py-0.5 text-xl font-medium">+</button>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="font-medium ">$ { product.price.toLocaleString() }</p>
                <button>
                    <RiDeleteBin3Fill className="h-6 w-6 text-red-600" />
                </button>
            </div>
        </div>
       ))}
    </div>
  )
}

export default CartContents

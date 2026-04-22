'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { clearCart, removeFromCart } from "@/app/redux/CartSlice/CartSlice";
import { Order } from "@/app/Types/order";
import { useRouter } from "next/navigation";
import { createOrder } from "@/app/actions/orderActions";
import { customToast } from "@/app/components/common/ShowToast";


export default function Cart() {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );


  const handleBuyNow = async () => {
    if (cartItems.length === 0) return;

    const newOrder: Order = {
      items: cartItems,
      totalAmount: total,
    };

    try {

      await createOrder(newOrder)

      customToast.success("Purchase successful!");

      dispatch(clearCart());

      router.push("/");

    } catch (error) {
      console.log(error);
      customToast.error("Something went wrong")
    }

  }


  return (

    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>


      <Card>
        <CardContent className="p-6 space-y-4">

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <>
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>

                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}  {/* //quantity coming from cart */}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${Number(item.price) * item.quantity}
                  </p>
                </div>

                <Button
                  variant="destructive"
                  className="bg-red-500 text-white hover:bg-red-600"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(item.id!))}
                >
                  Remove
                </Button>
              </>

            ))
          )}


          <div className="flex justify-between items-center pt-4">
            <p className="font-bold">Total</p>
            <p className="font-bold">${total.toFixed(2)}</p>
          </div>

        </CardContent>


      </Card>

      {cartItems.length > 0 && (
        <Button
          className="w-full text-white bg bg-[#282828] hover:bg-[#282828]/90"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      )}

      <Button
      disabled={cartItems.length === 0}
        className="w-full text-white bg-[#ffae00] hover:bg-[#ff9900]"
        onClick={handleBuyNow}
      >
        Buy Now
      </Button>
    </div>
  );
}

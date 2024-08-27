import React from 'react'

const Cartadd = () => {
  return (
    <section id="cart-add" class="section-pl">
    <div id="coupon">
      <h3> Apply Coupon </h3>
      <div>
        <input type=" text" placeholder="Enter Your Coupon" />
        <button class="normal">Apply</button>
      </div>
    </div>

    <div id="subtotal" />
      <h3>Cart Totals</h3>
      <table>
        <tr>
          <td>Cart Subtotal</td>
          <td>$ 335</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong> </td>
          <td><strong>$335</strong> </td>
        </tr>
      </table>

      <button class="normal">Proceed to checkout</button>
  </section>
  )
}

export default Cartadd

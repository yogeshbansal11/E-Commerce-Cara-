import React from 'react'
import proimgf1 from '../../assets/proimg/f1.jpg'
import proimgf2 from '../../assets/proimg/f2.jpg'
import proimgf3 from '../../assets/proimg/f3.jpg'

const carts = () => {
  return (
    <section id="cart" class="section-pl">
    <table width="100%">
      <thead>
        <tr>
          <td>Remove</td>
          <td>Image</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src={proimgf1} alt="" /></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.5</td>
          <td><input type="number" value="1" /></td>
          <td>$118.5</td>
        </tr>
        <tr>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src={proimgf2} alt="" /></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.5</td>
          <td><input type="number" value="1" /></td>
          <td>$118.5</td>
        </tr>
        <tr>
          <td><a href="#"><i class="far fa-times-circle"></i></a></td>
          <td><img src={proimgf3} alt="" /></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.5</td>
          <td><input type="number" value="1" /></td>
          <td>$118.5</td>
        </tr>
      </tbody>
    </table>
  </section>
  )
}

export default carts

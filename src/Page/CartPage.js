
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import image from '../../src/image/carton.png';
import Form from 'react-bootstrap/Form';
import {Button,Col} from 'react-bootstrap';

function CartPage() {
  const [items, setItems] = useState([
    { id: 1, title: "شامبو", quntaity: 1, price: 100, img: `${image}` },
    { id: 2, title: "مكنه حلاقه", quntaity: 1, price: 10, img: `${image}` }
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price when items change
    let result = 0;
    items.forEach((item) => {
      result += item.price * item.quntaity;
    });
    setTotalPrice(result);
  }, [items]);

  const handlequntplus = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quntaity: item.quntaity + 1 };
        }
        return item;
      })
    );
  };
  const handlequntmines = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if(item.quntaity === 0){
            return item;
        }
        if (item.id === id) {
          return { ...item, quntaity: item.quntaity - 1 };
        }
        return item;
      })
    );
  };
  const [formData, setFormData] = useState({
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Form submitted:', {formData,items,totalPrice});
  };
  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>اسم المنتج</th>
            <th>عدد القطع</th>
            <th>سعر الوحدة</th>
            <th>سعر الكلي</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.id}</td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <div>
                  <img
                    src={item.img}
                    alt="not found"
                    className="cart-chekout-image "

                  />
                  <h4>{item.title}</h4>
                </div>
              </td>
              <td  style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <div
                  className="p-2 border"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlequntplus(item.id)}
                >
                  +
                </div>
                <div className="p-2">{item.quntaity}</div>
                <div className="p-2 border" style={{ cursor: "pointer" }} onClick={()=>handlequntmines(item.id)}>
                  -
                </div>
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.price}</td>
                  { 
        (item.price* item.quntaity) === 0 ? 
          <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>-</td> : 
          <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.price* item.quntaity}</td> 
      }
            
            </tr>
          ))}
          <tr>
            <td>-</td>
            <td colSpan={3}>السعر الكلي </td>
            <td>{totalPrice}ج.م</td>
          </tr>
        </tbody>
      </Table>
      <Form  className="d-flex justify-content-center align-items-center w-100 flex-column mb-5">
      <Col xs={12} sm={10} md={8} lg={6}>
      <Form.Group controlId="phone" className='w-100 mt-3'>
        <Form.Label>رقم التلفون:</Form.Label>
        <Form.Control
         type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder= "  ادخل رقم التلفون" 
          required
        />
      </Form.Group>

      <Form.Group controlId="message" className='w-100 mt-3'>
        <Form.Label>رساله لتاجر:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="رساله للتاجر لمعرفه التفاصيل "
          required
        />
      </Form.Group>

      <Button className='btn-form-e w-100 mt-3' onClick={handleSubmit}>
        طلب اوردر
      </Button>
      </Col>
    </Form>
    </>
  );
}

export default CartPage;

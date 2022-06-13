import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import { ToastContainer, toast } from 'react-toastify';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import styles from './style.module.css'

const CheckOutForm = () => {
    const [data, setData] = useState({
        name: '',
        billingAddress: '',
        deliveryaddress: '',
        contactNumber: '',
        selectedDate: null,
    })

    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14);
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
    const enddate = new Date(new Date().getFullYear(), new Date().getMonth(), 20);

    const formSubmit = (event) => {
        toast.success("Submitted !", {
            position: 'top-center'
        });
        event.preventDefault()
    }

    return (
        <div className={styles.loginForm}>
            <Form onSubmit={formSubmit}>
                <h1 className={styles.checkout}>Checkout</h1>
                <Form.Group className={styles.form_group}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setData({ ...data, name: e.target.value })} />
                </Form.Group>

                <Form.Group className={styles.form_group}>
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control type="text" onChange={(e) => setData({ ...data, billingAddress: e.target.value })} />
                </Form.Group>


                <Form.Group className={styles.form_group}>
                    <Form.Label>Delivery Address </Form.Label>
                    <Form.Control type="password" onChange={(e) => setData({ ...data, deliveryaddress: e.target.value })} />
                </Form.Group>

                <Form.Group className={styles.form_group}>
                    <Form.Label>ContactNumber</Form.Label>
                    <Form.Control type="password" onChange={(e) => setData({ ...data, contactNUmber: e.target.value })} />
                </Form.Group>

                <Form.Group className={styles.form_group}>
                    <Form.Label>DatePicker</Form.Label>
                    <div>
                        <style>
                            {`.date-picker input {
          width: 100%
      }`}
                        </style>
                        <DatePicker
                           wrapperClassName="date-picker"
                            selected={data.selectedDate}
                            onChange={(date) => setData({ ...data, selectedDate: date })}
                            minDate={new Date()}
                        />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit" className={styles.btn_submit}>
                    Submit
                </Button>
                <ToastContainer />
            </Form>
        </div>
    )

}

export default CheckOutForm;
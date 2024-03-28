import React, { useState } from 'react';
import { Customers } from '../model/User';
import { deleteCustomer, updateCustomer }from  '../Api/user'

interface Props {
    customer: Customers;
}

 export const  EditCustomerForm=({ customer }: Props)=> {
    const [editedCustomer, setEditedCustomer] = useState(customer);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const  handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateCustomer(editedCustomer);
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <div>
            <h2>עריכת לקוח</h2>
            <form onSubmit={handleSubmit}>
                <label>שם לקוח: <input type="text" name="CustomerName" value={editedCustomer.CustomerName} onChange={handleChange} /></label><br />
                <label>כתובת: <input type="text" name="CustomerAdress" value={editedCustomer.CustomerAdress} onChange={handleChange} /></label><br />
                <label>תאריך לידה: <input type="text" name="CustomerBirthDate" value={editedCustomer.CustomerBirthDate} onChange={handleChange} /></label><br />
                <label>טלפון: <input type="text" name="CustomerPhone" value={editedCustomer.CustomerPhone} onChange={handleChange} /></label><br />
                <label>טלפון נייד: <input type="text" name="CustomerMobile" value={editedCustomer.CustomerMobile} onChange={handleChange} /></label><br />
                <button type="submit">שמירת שינויים</button>
            </form>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { Customers } from '../model/User';
import { deleteCustomer,getAllCustomers, } from '../Api/user';
import {EditCustomerForm} from './EditCustomerForm';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function CustomersList() {
    const navigate: NavigateFunction = useNavigate();
    const [customers, setCustomers] = useState<Customers[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<Customers | null>(null);

    const getCustomers = async () => {
        try {
            const data: Customers[] = await getAllCustomers();
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };
  
    useEffect(() => {
        getCustomers();
    }, [])
  
    const handleCustomerClick = (customer: Customers) => {
        setSelectedCustomer(customer);
        showCustomerDetails(customer);
    };

    const showCustomerDetails = (customer: Customers) => {
        const { CustomerName, CustomerAdress, CustomerBirthDate, CustomerPhone, CustomerMobile } = customer;
        const alertMessage = `
            שם לקוח: ${CustomerName}
            כתובת: ${CustomerAdress}
            תאריך לידה: ${CustomerBirthDate}
            טלפון: ${CustomerPhone}
            טלפון נייד: ${CustomerMobile}
        `;
        alert(alertMessage);
    };
  
    const handleDeleteClick = async (customer: Customers) => {
        try {
            await deleteCustomer(customer.CustomerID);
            setCustomers(prevCustomers =>
                prevCustomers.filter(c => c.CustomerID !== customer.CustomerID)
            );
            setSelectedCustomer(null);
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    const handleEditClick = (customer: Customers) => {
        setSelectedCustomer(customer);
        navigate('/updateCustomer')
        
    };
  
    return (
        <div>
            <h2>רשימת לקוחות</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.CustomerID}>
                        <span onClick={() => handleCustomerClick(customer)}>{customer.CustomerName}</span>
                        <button onClick={() => handleDeleteClick(customer)}>מחיקה</button>
                        <button onClick={() => handleEditClick(customer)}>עריכה</button>
                    </li>
                ))}
            </ul>
            {selectedCustomer && <EditCustomerForm customer={selectedCustomer} />}
        </div>
    );
}

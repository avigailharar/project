import axios from "axios";
import { AxiosResponse } from "axios";
import config from "../config";
import { Customers } from "../model/User";

export const getAllCustomers = async (): Promise<Customers[]> => {
    console.log("getAllCustomers API");
    try {
        const response: AxiosResponse<Customers[]> = await axios.get(`${config.api}/customers/getAllCustomers`);
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.error("Error fetching customers:", error);
        throw error;
    }
};

export const getCustomer = async (id: string): Promise<Customers> => {
    console.log("getCustomer API");
    try {
        const response: AxiosResponse<Customers> = await axios.post(`${config.api}/customers/getCustomer`, { id: id });
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.error("Error fetching customer:", error);
        throw error;
    }
};

export const updateCustomer = async (updatedCustomer: Customers): Promise<Customers> => {
    console.log("updateCustomer API");
    try {
        const response: AxiosResponse<Customers> = await axios.post(`${config.api}/customers/updateCustomer`, updatedCustomer);
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.error("Error updating customer:", error);
        throw error;
    }
};

export const deleteCustomer = async (id: string): Promise<void> => {
    console.log("deleteCustomer API");
    try {
        await axios.post(`${config.api}/customers/deleteCustomer`, { id: id });
        console.log("Customer deleted successfully");
    } catch (error) {
        console.error("Error deleting customer:", error);
        throw error;
    }
};

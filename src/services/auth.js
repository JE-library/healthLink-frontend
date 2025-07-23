import { apiClient } from "./config";

// Log-in for patient
export const apiUserLogin = async (payload) => apiClient.post("/user/login", payload);

// Sign-up for patient 
export const apiUserSignup = async (payload) => apiClient.post("/user/register", payload);

// Log-in for service provider 
export const apiProviderLogin = async (payload) => apiClient.post("/providers/login", payload);

// Sign-up for service provider
export const apiProviderSignup = async (payload) => apiClient.post("/providers/register", payload);
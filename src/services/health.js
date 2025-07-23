import { apiClient } from "./config";

export const apiFetchProviderProfile = async () => {
  return apiClient.get("/providers/profile");
};
export const apiUpdateProviderProfile = async (formData) => {
  return apiClient.put("/providers/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const apiGetProviderAppointments = async () =>
  apiClient.get("/providers/appointment");

export const apiGetSingleAppointment = async (appointmentId) =>
  apiClient.get(`/providers/appointment/${appointmentId}`);

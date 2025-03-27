import api from '../axios-instance';
import { MOCK } from '../config/config';
import { OrderFormData } from '../types/form';

export const getUserById = async (userId: number) => {
  if (MOCK) {
    const response = await fetch('/mock/user.json');
    const data = await response.json();
    return Promise.resolve({ data });
  }

  return api.get(`/users/${userId}`);
};

export const getUserOrdersPaginated = async (userId: number, page = 1, size = 5) => {
  if (MOCK) {
    const response = await fetch(`/mock/orders-${page}.json`);
    const data = await response.json();
    return Promise.resolve({ data });
  }

  return api.get(`/users/${userId}/orders`, {
    params: { page, size },
  });
};

export const createOrder = async (userId: number, data: OrderFormData) => {
  if (MOCK) {
    return Promise.resolve({
      data: {
        success: true,
        orderId: Date.now(),
      },
    });
  }

  return api.post(`/users/${userId}/orders`, data);
};

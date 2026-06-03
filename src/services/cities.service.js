import api from './api';

export const searchCities = (query) => api.get('/cities', { params: { q: query } });

export const getCityById = (cityId) => api.get(`/cities/${cityId}`);

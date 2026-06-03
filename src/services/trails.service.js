import api from './api';

export const getTrailsByCity = (cityId) => api.get(`/cities/${cityId}/trails`);

export const getTrailById = (trailId) => api.get(`/trails/${trailId}`);

import React from 'react'
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/main/vr1`,
    withCredentials: true,
});

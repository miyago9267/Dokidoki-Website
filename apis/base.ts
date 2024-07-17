import axios from 'axios';
import type { AxiosInstance, Method } from 'axios';

import type { AxiosRequestData, AxiosRequestParams } from '@/types';

export const API_BASE_URL = process.env.API_BASE_URL?.[0] || '';

interface DefaultResponseData {
	code: number;
	message: string;
}

export default abstract class BaseApi {
	protected abstract apiUrl: string;

	private axios: AxiosInstance;

	constructor() {
		this.axios = axios.create({ baseURL: API_BASE_URL });
		this.axios.interceptors.response.use((a) => a, ({ response }) => response);
	}

	protected async request<T>(url: string, method: Method = 'get', data?: AxiosRequestData, params?: AxiosRequestParams) {
		url = `${this.apiUrl}${url}`;
		return await this.axios.request<T & DefaultResponseData>({
			method,
			params,
			data,
			url,
			headers: {
				'content-type': "multipart/form-data"
			}
		});
	}
}

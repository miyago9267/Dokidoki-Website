import axios, { type AxiosRequestConfig } from 'axios';

import type { AxiosRequestData, AxiosRequestParams } from '@/types';

const axiosApi = axios.create();

axiosApi.interceptors.response.use((response) => response, ({ response }) => response);
async function request(
	url: string,
	method: string,
	params: AxiosRequestParams = {},
	data: AxiosRequestData = {},
	config: AxiosRequestConfig = {
		withCredentials: true,
	}
) {
	return await axiosApi.request({
		...config,
		data,
		method,
		params,
		url
	});
}

/**
 * 使用Delete請求
 */
export const useDelete = async (url: string, params: AxiosRequestParams = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'delete', params, {}, config);
}

export const $useDelete = async (url: string, params: AxiosRequestParams = {}, config?: AxiosRequestConfig) => {
	return (await useDelete(url, params, config)).data;
}

/**
 * 使用Get請求
 */
export const useGet = async (url: string, params: AxiosRequestParams = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'get', params, {}, config);
}

export const $useGet = async (url: string, params: AxiosRequestParams = {}, config?: AxiosRequestConfig) => {
	return (await useGet(url, params, config)).data;
}

/**
 * 使用Patch請求
 */
export const usePatch = async (url: string, data: AxiosRequestData = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'patch', {}, data, config);
}

export const $usePatch = async (url: string, data: AxiosRequestData = {}, config?: AxiosRequestConfig) => {
	return (await usePatch(url, data, config)).data;
}

/**
 * 使用Post請求
 */
export const usePost = async (url: string, data: AxiosRequestData = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'post', {}, data, config);
}

export const $usePost = async (url: string, data: AxiosRequestData = {}, config?: AxiosRequestConfig) => {
	return (await usePost(url, data, config)).data;
}

/**
 * 使用Put請求
 */
export const usePut = async (url: string, data: AxiosRequestData = {}, config?: AxiosRequestConfig) => {
	return await request(url, 'put', {}, data, config);
}

export const $usePut = async (url: string, data: AxiosRequestData = {}, config?: AxiosRequestConfig) => {
	return (await usePut(url, data, config)).data;
}

import axios, { AxiosError, AxiosResponse } from "axios";

const http = axios.create();

http.interceptors.response.use(
	function(response: AxiosResponse) {
		return response.data;
	},
	function(error: AxiosError) {
		if (error.response) {
			const response: AxiosResponse = error.response

			throw new Error(response.data.message, { cause: response });
		}
	}
);

export default http

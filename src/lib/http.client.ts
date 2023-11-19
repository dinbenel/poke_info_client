import { devConfig } from "@/config/config.dev";
import axios from "axios";

export class HttpClient {
  private _httpClient;

  constructor() {
    this._httpClient = axios.create({
      baseURL: devConfig.baseUrl,
      timeout: devConfig.timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this._httpClient.interceptors.request.use(function (config) {
      // if (token) {
      //   config.headers.Authorization = 'Bearer ' + token;
      // }
      return config;
    });

    this._httpClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // all error codes use cases
        if (!error || (error.response && error.response.status === 401)) {
        }
        return Promise.reject(error);
      }
    );
  }

  get httpClient() {
    return this._httpClient;
  }
}

export const httpClient = new HttpClient();

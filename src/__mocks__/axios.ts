import { AxiosStatic } from "axios";

const mockAxios = jest.genMockFromModule<AxiosStatic>("axios");

// This seems to result in us bypassing axios interceptor logic. But for now
// allows us to test the main functionality.
mockAxios.interceptors = mockAxios.interceptors || {};
mockAxios.interceptors.response = mockAxios.interceptors.response || {};
mockAxios.interceptors.response.use = jest.fn();
mockAxios.create = () => {
  return mockAxios;
};

export default mockAxios;

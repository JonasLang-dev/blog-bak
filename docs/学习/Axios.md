---
id: axios
title: Axios
sidebar_label: Axios
slug: /axios
---

[TOC]

# Axios

## 官方指导

### 创建实例

axios 可以使用自定义配置创建一个新的 axios 实例。

```typescript
const instance = axios.create({
  baseURL, // 配置api服务其地址
  timeout, // 超时时间
  headers: { "custom-heaer": "custom" }, // 自定义header
});
```

### 请求配置

```json
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认值

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理

    return data;
  }],

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求体被发送的数据
  // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // 发送请求体数据的可选语法
  // 请求方式 post
  // 只有 value 会被发送，key 则不会
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，这使测试更加容易。
  // 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值

  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // 默认值

  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认值

  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值

  // `onUploadProgress` 允许为上传处理进度事件
  // 浏览器专属
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  // 浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  maxContentLength: 2000,

  // `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数
  maxBodyLength: 2000,

  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // 则promise 将会 resolved，否则是 rejected。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // `maxRedirects` 定义了在node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向
  maxRedirects: 5, // 默认值

  // `socketPath` 定义了在node.js中使用的UNIX套接字。
  // e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。
  // 只能指定 `socketPath` 或 `proxy` 。
  // 若都指定，这使用 `socketPath` 。
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // see https://axios-http.com/zh/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed
  // automatically. If set to `true` will also remove the 'content-encoding' header
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // 默认值

}
```

### 响应结构

```json
{
  // `data` 由服务器提供的响应
  "data": {},

  // `status` 来自服务器响应的 HTTP 状态码
  "status": 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  "statusText": "OK",

  // `headers` 是服务器响应头
  // 所有的 header 名称都是小写，而且可以使用方括号语法访问
  // 例如: `response.headers['content-type']`
  "headers": {},

  // `config` 是 `axios` 请求的配置信息
  "config": {},

  // `request` 是生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  "request": {}
}
```

### 默认配置

可以指定应用于每个请求的配置默认值

- 全局 axios 配置

```typescript
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
```

- 自定义实例默认配置

```typescript
// 创建实例时配置默认值
const instance = axios.create({
  baseURL: "https://api.example.com",
});

// 创建实例后修改默认值
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
```

- 优先级顺序

```typescript
// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 `0`
const instance = axios.create();

// 重写库的超时默认值
// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时
instance.defaults.timeout = 2500;

// 重写此请求的超时时间，因为该请求需要很长时间
instance.get("/longRequest", {
  timeout: 5000,
});
```

### 拦截器

```typescript
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

- 移除拦截器

```typescript
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

- 自定义 axios 实例添加拦截其

```typescript
const instance = axios.create();
instance.interceptors.request.use(function () {
  /*...*/
});
```

## 实例

```typescript
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export const baseUrl: string = "http://192.168.0.109:5020";

const refreshToken = localStorage.getItem("refreshToken");
let accessToken = localStorage.getItem("accessToken");

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  // API 请求的默认前缀
  baseUrl,
  timeout: 6000, // 请求超时时间
});

// request interceptor
axiosInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (accessToken) {
      requestConfig.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
    return requestConfig;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  (responseConfig: AxiosRequestConfig) => {
    return responseConfig;
  },
  async (err: AxiosError) => {
    if (err.response) {
      if (err.response.status === 403 && refreshToken) {
        try {
          const res = await axios.get(`${baseURL}/api/session/refresh`, {
            headers: {
              "x-refresh": refreshToken,
            },
          });
          localStorage.setItem("accessToken", res.data.accessToken);
          accessToken = res.data.accessToken;
          return axiosInstance.request(err.response.config);
        } catch (error: any) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
```

1. 创建 axios instance 实例，并配置 baseUrl 和超时时间。(在此我将 baseUrl 导出，以便在项目中使用)
2. 配置请求拦截器: 当检测到从 localStorage 中读取到 token 的局部变量存在的时候,就将 header Bear Authorization 设置为该 token
3. 配置响应拦截器: 在此是使用 refeshToken 调用接口获取新的 accessToken 的操作: 服务端定义的是 403 作为 accessToken 过期 forbidden 访问，当检测到 status 为 403 并有 refreshToken 的时候嗲用 refresh 接口获取新的 token,并将 localStorage 的 accessToken 进行更新,并更改 accessToken 局部变量,当该请求失败才抛出 reject
4. 可在响应拦截器中对自定义的 code 进行拦截

```typescript
instance.interceptors.response.use(
  (respose) => {
    if (respose.data.code === 200) {
      ElMessage.success(respose.data.msg);
      return respose;
    } else if (respose.data.code === 401) {
      localStorage.clear();
      store.commit(actions.setUser, null);
      ElMessage.error(respose.data.msg);
      return Promise.reject(respose.data.msg);
    } else if (respose.data.code === 404) {
      return respose;
    } else {
      ElMessage.error(respose.data.msg);
      return Promise.reject(respose.data.msg);
    }
  },
  (error) => {
    ElMessage.error(error.response?.data.msg || error.message);
    return Promise.reject(error);
  }
);
```

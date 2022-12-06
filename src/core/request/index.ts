import Request from './request';
import * as middlewares from './middlewares';

const request = new Request(
  {
    mode: 'cors',
    type: 'json',
    errorHander: true
  },
  [
    middlewares.timeout,
    middlewares.http,
    middlewares.httpError,
    middlewares.json,
    middlewares.baseUrl,
    middlewares.authToken,
    middlewares.params,
    middlewares.type,
  ],
);

export { Request, request };

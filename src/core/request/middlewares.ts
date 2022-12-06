/*
 * Copyright (c) 2018 Wind4 <puxiaping@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { stringify } from 'query-string';
import { isAbsoluteUrl, methodWithBody, TimeoutError } from './utils';
import { Context, Middleware, NextFunction, KeyValuePair } from './typings';

export const baseUrl: Middleware = (context: Context, next: NextFunction) => {
  if (context.baseUrl && !isAbsoluteUrl(context.url)) {
    context.url = context.baseUrl + context.url;
  }

  return next();
};

export const params: Middleware = (context: Context, next: NextFunction) => {
  if (context.params) {
    const queryString = stringify(context.params);
    const concatSymbol = context.url.indexOf('?') > -1 ? '&' : '?';

    if (queryString) {
      context.url = context.url + concatSymbol + queryString;
    }
  }

  return next();
};

export const type: Middleware = (
  context: Context<{ type: 'form' | 'json' | 'raw' | 'file' }>,
  next: NextFunction,
) => {
  if (methodWithBody(context.method)) {
    context.headers = context.headers || {};
    switch (context.type) {
      case 'form':
        context.headers['Content-Type'] =
          'application/x-www-form-urlencoded;charset=utf-8';
        context.body = stringify(context.body as KeyValuePair<any>);
        break;
      case 'json':
        context.headers['Content-Type'] = 'application/json;charset=utf-8';
        context.body = JSON.stringify(context.body as KeyValuePair<any>);
        break;
      case 'raw':
      default:
        break;
    }
  }

  return next();
};

export const http: Middleware<Response> = (
  _: Context,
  next: NextFunction<Response>,
) => {
  return next().then<Response>((response) =>
    response.status >= 200 && response.status <= 299
      ? response
      : Promise.reject(response),
  );
};

export const json: Middleware = (
  context: Context<{ json: boolean }>,
  next: NextFunction<Response>,
) => {
  return context.json === false
    ? next()
    : next().then<any>((response) => response.json());
};

export const timeout: Middleware = (
  context: Context<{ timeout?: number }>,
  next: NextFunction,
) => {
  const interval = context.timeout;

  if (interval && interval > 0 && interval < Infinity) {
    let controller: AbortController;
    if (!context.signal && typeof AbortController === 'function') {
      controller = new AbortController();
      context.signal = controller.signal;
    }

    return Promise.race([
      next(),
      new Promise<never>((_, reject) => {
        setTimeout(() => {
          reject(new TimeoutError());
          if (controller) controller.abort();
        }, interval);
      }),
    ]);
  }

  return next();
};

export const authToken: Middleware = (
  context: Context<{ authToken?: string | false }>,
  next: NextFunction,
) => {
  if (context.authToken !== false) {
    const authToken = context.authToken ?? sessionStorage.getItem('authToken');
    if (authToken) {
      context.headers = context.headers || {};
      context.headers['Authorization'] = `Bearer ${authToken}`;
    }
  }

  return next();
};

export const httpResultMiddleware = (
  context: Context<{ httpResult: boolean }>,
  next: NextFunction,
) => {
  if (context.httpResult) {
    return next().then((res) => {
      if (res.status === 1) {
        return res.data;
      }
      return Promise.reject(res);
    });
  }
  return next();
};

export const httpError: Middleware<Response> = (
  context: Context<{ errorHander?: boolean }>,
  next: NextFunction<Response>,
) => {
  return next().catch<Response>((response) =>
    context.errorHander
      ? response.json().then((res: any) => Promise.reject(res))
      : Promise.reject(response),
  );
};

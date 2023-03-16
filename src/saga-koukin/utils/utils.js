export const isFun = (f) => typeof f === 'function';
export const isPromise = (p) => p && isFun(p.then);
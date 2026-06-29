// Mock for formdata-polyfill to prevent it from redefining window.fetch in sandboxed environments.
export const FormData = typeof window !== 'undefined' ? window.FormData : (typeof globalThis !== 'undefined' ? globalThis.FormData : null);
export function formDataToBlob(fd: any) {
  return fd;
}

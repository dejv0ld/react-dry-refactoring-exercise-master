export {};
/* import { User } from './User';
import { Product } from './Product';

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json() as T;
}

// Användning
const users = await fetchData<User[]>('https://example.com/api/users');
const productDetails = await fetchData<Product>
('https://example.com/api/products/1');
 */

enum ResponseStatus {
  Success = 'success',
  Error = 'error'
}

type APIResponse<T> = {
  status: ResponseStatus;
  data: T | null;
};

async function fetchData<T>(url: string): Promise<APIResponse<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { status: ResponseStatus.Error, data: null };
    }
    const data = await response.json();
    return { status: ResponseStatus.Success, data: data as T };
  } catch (error) {
    console.log(error);
    return { status: ResponseStatus.Error, data: null };
  }
}

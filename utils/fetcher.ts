export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  // Fetch data as an unknown type first to avoid unsafe type assertions
  const data: unknown = await response.json();

  // Returning data as type T without additional checks assumes T is correct.
  // If T validation is needed, a separate validation function should be implemented.
  return data as T;
};

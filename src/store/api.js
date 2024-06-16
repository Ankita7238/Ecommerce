// api.js
const CRUCRUD_API_ENDPOINT = 'https://crudcrud.com/api/ed71aa94f45b44c2a40004f6dd87b490';

export const sanitizeEmail = (email) => email.replace(/[@.]/g, '');

export const getCartItems = async (email) => {
  const sanitizedEmail = sanitizeEmail(email);
  const url = `${CRUCRUD_API_ENDPOINT}/cart${sanitizedEmail}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch cart items.');
  }
  const data = await response.json();
  return data;
};

export const addProductToCart = async (email, product) => {
  const sanitizedEmail = sanitizeEmail(email);
  const url = `${CRUCRUD_API_ENDPOINT}/cart${sanitizedEmail}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Failed to add product to cart.');
  }
};

export const updateProductInCart = async (email, product) => {
  const sanitizedEmail = sanitizeEmail(email);
  const url = `${CRUCRUD_API_ENDPOINT}/cart${sanitizedEmail}/${product._id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Failed to update product in cart.');
  }
};

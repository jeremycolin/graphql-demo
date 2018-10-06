const DELAY = 100; // network and processing in ms

const PRODUCTS = [
  {
    id: "0",
    name: "black t-shirt",
    brand: "Zal",
    price: 10.5,
    image: ""
  },
  {
    id: "1",
    name: "white t-shirt",
    brand: "Zal",
    price: 20.5,
    image: ""
  }
];

interface Outfits {
  id: string;
  products: Array<string>;
}

const OUTFITS = [
  {
    id: "0",
    products: ["0", "1"]
  },
  {
    id: "1",
    products: []
  }
];

interface Cart {
  products: Array<string>;
}

const cart: Cart = {
  products: []
};

const user = {
  id: "0",
  name: "Jeremy"
};

const wrapInPromise = (wrappedReturn: any) => new Promise(resolve => setTimeout(() => resolve(wrappedReturn), DELAY));

export const getProducts = () => wrapInPromise(PRODUCTS);
export const getProduct = (productId: string) => wrapInPromise(PRODUCTS.find(product => product.id === productId));

export const getOutfits = () => wrapInPromise(OUTFITS);
export const getOutfit = (outfitId: string) => wrapInPromise(OUTFITS.find(outfit => outfit.id === outfitId));

export const getCart = () => wrapInPromise(cart);
export const getUser = () => wrapInPromise(user);

export const addToCart = (productId: string) => {
  cart.products.push(productId);
  return wrapInPromise(cart);
};

export const removeFromCart = (productId: string) => {
  const productIndex = cart.products.indexOf(productId);
  if (productIndex > -1) {
    cart.products.splice(productIndex, 1);
  }
  return wrapInPromise(cart);
};

export const updateUserName = (name: string) => {
  user.name = name;
  return wrapInPromise(user);
};

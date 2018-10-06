import * as db from "./database";

interface Product {
  id: string;
  name: String;
  brand: String;
  price: number;
  image: string;
  recommendations?: Array<any>;
}

interface Recommendation {
  id: string;
  typename: "Product" | "Outfit";
}

export const typeDefs = `
    type Product {
      id: ID!
      name: String!
      brand: String!
      price: Float!
      image: String!
      recommendations: [Recommendation]
    }

    type Outfit {
      id: ID!
      image: String!
    }

    union Recommendation = Product | Outfit

    type Cart {
      products: [Product]!
    }

    type User {
      id: ID!
      name: String!
    }

    type Query {
      product(id: ID!): Product
      products: [Product]!
      outfit(id: ID!): Outfit
      outfits: [Outfit]!
      cart: Cart
      user: User
    }

    type Mutation {
      add_to_cart(productId: ID!): Cart
      remove_from_cart(productId: ID!): Cart
      change_name(name: String!): User
    }
`;

export const resolvers = {
  Query: {
    product: (_: undefined, productId: string) => db.getProduct(productId),
    products: () => db.getProducts(),
    outfit: (_: undefined, outfitId: string) => db.getOutfit(outfitId),
    outfits: () => db.getOutfits(),
    cart: () => db.getCart(),
    user: () => db.getUser()
  },

  Mutation: {
    add_to_cart: (_: undefined, { productId }: { productId: string }) => db.addToCart(productId),
    remove_from_cart: (_: undefined, { productId }: { productId: string }) => db.removeFromCart(productId),
    change_name: (_: undefined, { name }: { name: string }) => db.updateUserName(name)
  },

  Cart: {
    products: ({ products }: { products: Array<string> }) => products.map(productId => db.getProduct(productId))
  },

  Product: {
    name: (product: Product) => product.name, // this is the default resolver
    brand: (product: Product) => product.brand.toUpperCase(),
    recommendations: ({ recommendations }: { recommendations: Array<Recommendation> }) =>
      recommendations
        ? recommendations.map(recommendation => {
            if (recommendation.typename === "Product") return db.getProduct(recommendation.id);
            if (recommendation.typename === "Outfit") return db.getOutfit(recommendation.id);
          })
        : null
  },

  Recommendation: {
    __resolveType(obj: { name: string }) {
      if (obj.name) {
        return "Product";
      }
      return "Outfit";
    }
  }
};

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProductCard from "./ProductCard";
import ProductRecommendation from "./ProductRecommendation";
import OutfitRecommendation from "./OutfitRecommendation";
import "./ProductCarousel.scss";

const productsQuery = gql`
  {
    products {
      id
      name
      brand
      price
      image
      recommendations {
        __typename
        ... on Outfit {
          id
          image
        }
        ... on Product {
          id
          brand
          image
        }
      }
    }
  }
`;

export default () => (
  <div className="ProductView">
    <Query query={productsQuery}>
      {({ loading, error, data }) => {
        if (loading || error) return "";
        return (
          <div className="ProductCarousel">
            {data.products.map(product => (
              <div key={product.id}>
                <ProductCard {...product} />
                {(product.recommendations || []).map(
                  recommendation =>
                    recommendation.__typename === "Product" ? (
                      <ProductRecommendation key={recommendation.id} product={recommendation} />
                    ) : (
                      <OutfitRecommendation key={recommendation.id} outfit={recommendation} />
                    )
                )}
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);

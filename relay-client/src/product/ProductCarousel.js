import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import ProductCard from "./ProductCard";
import ProductRecommendation from "./ProductRecommendation";
import OutfitRecommendation from "./OutfitRecommendation";
import "./ProductCarousel.scss";

const productsQuery = graphql`
  query ProductCarouselQuery {
    products {
      id
      ...ProductCard_product
      recommendations {
        __typename
        ... on Outfit {
          id
        }
        ... on Product {
          id
        }
        ...ProductRecommendation_product
        ...OutfitRecommendation_outfit
      }
    }
  }
`;

export default () => (
  <div className="ProductView">
    <QueryRenderer
      environment={environment}
      query={productsQuery}
      render={({ error, props }) => {
        if (error || !props) return "";
        return (
          <div className="ProductCarousel">
            {props.products.map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
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
    />
  </div>
);

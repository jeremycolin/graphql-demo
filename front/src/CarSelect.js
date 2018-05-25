import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { carEmoji } from "./CarCard";

export const carsQuery = gql`
  query {
    cars {
      id
      brand
    }
  }
`;

export default ({ onChange }) => (
  <Query query={carsQuery}>
    {({ loading, error, data }) => {
      const cars = data.cars || [];
      return (
        <select onChange={onChange}>
          {cars.map(car => (
            <option key={car.id} value={car.id}>
              {carEmoji(car.brand)}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

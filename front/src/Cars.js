import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import CarCard from "./CarCard";

export const carsQuery = gql`
  query {
    cars {
      id
      name
      brand
      drivers {
        id
        lastname
      }
    }
  }
`;

export default () => (
  <Query query={carsQuery}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error: ${error}`;
      return data.cars.map(car => <CarCard key={car.id} car={car} />);
    }}
  </Query>
);

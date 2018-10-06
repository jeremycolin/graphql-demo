import React from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import DriverCard from "./DriverCard";
import { carsQuery } from "./Cars";
import CarSelect from "./CarSelect";

const updateCache = (cache, { data: { add_driver } }) => {
  console.log("update cache");
  const { drivers } = cache.readQuery({ query: driversQuery });
  cache.writeQuery({
    query: driversQuery,
    data: { drivers: drivers.concat([add_driver]) }
  });

  const { cars } = cache.readQuery({ query: carsQuery });
  cache.writeQuery({
    query: carsQuery,
    data: {
      cars: cars.map(car => {
        if (add_driver.cars.findIndex(addDriverCar => addDriverCar.id === car.id) !== -1) {
          return {
            ...car,
            drivers: [...car.drivers, add_driver]
          };
        }
        return car;
      })
    }
  });
};

const optimisticResponse = data =>
  console.log("opti") || {
    __typename: "Mutation",
    add_driver: {
      id: "new driver",
      firstname: data.driver.firstname,
      lastname: null,
      cars: [],
      __typename: "Driver"
    }
  };

const driverFragment = gql`
  fragment Driver on Driver {
    id
    firstname
    lastname
    cars {
      id
      brand
    }
  }
`;

const driversQuery = gql`
  query {
    drivers {
      ...Driver
    }
  }
  ${driverFragment}
`;

const addDriver = gql`
  mutation addDriver($driver: DriverInput!) {
    add_driver(driver: $driver) {
      ...Driver
    }
  }
  ${driverFragment}
`;

export default () => {
  let firstname = "Mysterious driver";
  let car = "0";
  return (
    <React.Fragment>
      <Query query={driversQuery}>
        {({ loading, error, data }) => {
          console.log("data now: ", data);
          if (loading) return "Loading...";
          if (error) return `Error: ${error}`;
          return (
            <React.Fragment>
              <Mutation mutation={addDriver} update={updateCache} optimisticResponse={optimisticResponse}>
                {add_driver => (
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        add_driver({ variables: { driver: { firstname, cars: [car] } } });
                      }}
                    >
                      <input
                        onChange={event => {
                          firstname = event.target.value;
                        }}
                      />
                      <CarSelect
                        onChange={event => {
                          car = event.target.value;
                        }}
                      />
                      <button type="submit">
                        <span role="img" aria-label="race-finish-flag">
                          🏁
                        </span>
                      </button>
                    </form>
                  </div>
                )}
              </Mutation>
              {(data.drivers || []).map(driver => (
                <DriverCard key={driver.id} driver={driver} />
              ))}
            </React.Fragment>
          );
        }}
      </Query>
    </React.Fragment>
  );
};

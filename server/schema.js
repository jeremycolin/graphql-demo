const db = require("./database");

const typeDefs = `
    type Car {
      id: ID!
      brand: String!
      name: String!
      drivers: [Driver]!
    }

    type Driver {
      id: ID!
      firstname: String!
      lastname: String
      cars: [Car]!
    }

    type Query {
        cars: [Car]!
        drivers: [Driver]!
    }

    input CarInput {
      name: String!
      brand: String!
      drivers: [ID!]!
    }

    input DriverInput {
      firstname: String!
      lastname: String
      cars: [ID!]!
    }

    type Mutation {
      add_car(car: CarInput!): Car
      add_driver(driver: DriverInput!): Driver
    }
`;

const resolvers = {
  Query: {
    cars: () => db.getCars(),
    drivers: () => db.getDrivers()
  },

  Mutation: {
    add_car: (_, { car }) => db.addCar(car),
    add_driver: (_, { driver }) => db.addDriver(driver)
  },

  Car: {
    // brand: car => car.brand, // This is the default resolver, it is not needed
    drivers: car => db.getDriversDetails(car.drivers)
  },

  Driver: {
    cars: driver => db.getCarsDetails(driver.cars)
  }
};

module.exports = {
  typeDefs,
  resolvers
};

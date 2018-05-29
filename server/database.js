const TIMEOUT = 1500;

let carIds = 0;
let driverIds = 0;

let CARS = [
  {
    id: (carIds++).toString(),
    name: "RE40",
    brand: "Renault",
    drivers: ["0"]
  },
  {
    id: (carIds++).toString(),
    name: "M30",
    brand: "McLaren",
    drivers: ["0", "2"]
  },
  {
    id: (carIds++).toString(),
    name: "F2001",
    brand: "Ferrari",
    drivers: ["1"]
  },
  {
    id: (carIds++).toString(),
    name: "99T",
    brand: "Lotus",
    drivers: ["2"]
  }
];

let DRIVERS = [
  {
    id: (driverIds++).toString(),
    firstname: "Alain",
    lastname: "Prost",
    cars: ["0", "1"]
  },
  {
    id: (driverIds++).toString(),
    firstname: "Michael",
    lastname: "Schumacher",
    cars: ["2"]
  },
  {
    id: (driverIds++).toString(),
    firstname: "Ayrton",
    lastname: "Senna",
    cars: ["1", "3"]
  }
];

const getDrivers = async () => {
  console.log("Getting DRIVERS");
  return new Promise(resolve => setTimeout(() => resolve(DRIVERS), TIMEOUT));
};

const getCars = async () => {
  console.log("Getting CARS");
  return new Promise(resolve => setTimeout(() => resolve(CARS), TIMEOUT));
};

const getCarDetails = async carId => {
  console.log("Getting details for CAR: ", carId);
  return new Promise(resolve => setTimeout(() => resolve(CARS.find(car => car.id === carId)), TIMEOUT));
};

const getCarsDetails = async carIds => {
  console.log("Getting details for CARS: ", carIds.join(", "));
  return new Promise(resolve =>
    setTimeout(() => resolve(carIds.map(carId => CARS.find(car => car.id === carId))), TIMEOUT)
  );
};

const getDriverDetails = async driverId => {
  console.log("Getting details for DRIVER: ", driverId);
  return new Promise(resolve => setTimeout(() => resolve(DRIVERS.find(driver => driver.id === driverId)), TIMEOUT));
};

const getDriversDetails = async driverIds => {
  console.log("Getting details for DRIVERS: ", driverIds.join(", "));
  console.log(DRIVERS);
  console.log(driverIds);
  return new Promise(resolve =>
    setTimeout(() => resolve(driverIds.map(driverId => DRIVERS.find(driver => driver.id === driverId))), TIMEOUT)
  );
};

const addCar = async car => {
  console.log("Adding car: ", car);
  return new Promise(resolve =>
    setTimeout(() => {
      const id = (carIds++).toString();
      const newCar = {
        ...car,
        id
      };
      newCar.drivers.forEach(driverId => {
        DRIVERS.find(driver => driver.id === driverId).cars.push(id);
      });
      CARS = [...CARS, newCar];
      resolve(newCar);
    }, TIMEOUT)
  );
};

const addDriver = async driver => {
  console.log("Adding driver: ", driver);
  return new Promise(resolve =>
    setTimeout(() => {
      const id = (driverIds++).toString();
      const newDriver = {
        id,
        ...driver
      };
      newDriver.cars.forEach(carId => {
        CARS.find(car => car.id === carId).drivers.push(id);
      });
      DRIVERS = [...DRIVERS, newDriver];
      resolve(newDriver);
    }, TIMEOUT)
  );
};

// getCars().then(cars => console.log(cars));
// getDrivers().then(drivers => console.log(drivers));
// getCarDetails(0).then(car => console.log(car));
// getCarsDetails([0, 2, 3]).then(cars => console.log(cars));
// getDriverDetails([0, 2]).then(drivers => console.log(drivers));
// getDriverDetails(0).then(driver => console.log(driver));
// addCar({ name: "206", brand: "Peugeot", drivers: [0] });
// addDriver({ firstname: "Jeremy", lastname: "Colin", cars: [0, 2] });

module.exports = {
  addCar,
  addDriver,
  getCars,
  getDrivers,
  getCarDetails,
  getDriverDetails,
  getCarsDetails,
  getDriversDetails
};

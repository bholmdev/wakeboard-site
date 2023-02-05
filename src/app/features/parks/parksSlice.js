import { PARKS } from "../../shared/PARKS";

export const selectAllParks = () => {
    return PARKS;
};

export const selectRandomPark = () => {
    return PARKS[Math.floor(PARKS.length * Math.random())]
};
import { PARKS } from "../../shared/PARKS";

export const selectAllParks = () => {
    return PARKS;
};

export const selectParkById = (id) => {
    return PARKS.find(park => park.id === parseInt(id));
};

export const selectFeaturedPark = () => {
    return PARKS.find(park => park.featured);
};
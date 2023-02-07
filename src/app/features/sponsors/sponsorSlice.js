import { SPONSORS } from "../../shared/SPONSORS";

export const selectAllSponsors = () => {
    return SPONSORS;
};

export const selectFeaturedSponsor = () => {
    return SPONSORS.find(sponsor => sponsor.featured);
};
import { PROMOTIONS } from "../../shared/PROMOTIONS";

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find(promotion => promotion.featured);
};
import wakeboardkid from "../assets/img/wakeboardkid.jpg"
import beginner from "../assets/img/beginner.jpg";
import intermediate from "../assets/img/intermediate.jpg";
import advanced from "../assets/img/advanced.jpg";

export const PROMOTIONS = [
    {
        id: 0,
        name: 'New Guy Adventure',
        image: wakeboardkid,
        featured: true,
        description:
            'COMING SOON!!!  Book a 5-day course with a pro! Wakeboard, park time, and lessons provided.'
    },
    {
        id: 1,
        name: 'Beginner Teardown',
        image: beginner,
        featured: false,
        description: `COMING SOON!!!  In this weekend course, we'll build your fundamentals, so you're ready for next-level wakes.`
    },
    {
        id: 2,
        name: 'Into The Depths',
        image: intermediate,
        featured: false,
        description:
            'COMING SOON!!!  Intermediate level adventure with ramps and freestyle park.  Limited time only!'
    },
    {
        id: 3,
        name: 'Advanced Training',
        image: advanced,
        featured: false,
        description:
            'COMING SOON!!!  Meet with experts from around the globe to test your body and board to their limits!'
    }
];

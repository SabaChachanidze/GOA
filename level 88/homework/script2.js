const hotel = {
    hotelName: "Grand Palace",
    stars: 5,
    location: "Paris, France",
    guestReviews: {
        review1: "Excellent service and friendly staff.",
        review2: "Very clean and comfortable rooms.",
        review3: "Great location and Service."
    }
};

console.log(hotel);

console.log("Has spa:", 'spa' in hotel);

hotel.roomsCount = 120;
console.log("Rooms Count:", hotel.roomsCount);

Object.freeze(hotel);

hotel.stars = 4;
console.log("Stars after modification attempt:", hotel.stars);

console.log("Is hotel object frozen:", Object.isFrozen(hotel));

const academy = {
    name: "Goa Academy",
    courses: ["game development", "design", "web development"],
    socialLink: "GoaAcademy.com",
    reviews: {
        p1: {
            name: "random",
            status: "parent",
            review: "my child loved the classes!"
        },
        p2: {
            name: "random",
            status: "child",
            review: "i learned a lot from this course"
        },
        p3: {
            name: "random",
            status: "parent",
            review: "my kid enjoyed learning!."
        }
    }
};

console.log("ობიექტის თვისება-მნიშვნელობები:", Object.entries(academy));

console.log("ობიექტის თვისებები:", Object.keys(academy));

console.log("ობიექტის მნიშვნელობები:", Object.values(academy));

console.log("აქვს თუ არა 'courses' თვისება:", Object.hasOwn(academy, "courses"));
console.log("აქვს თუ არა 'members' თვისება:", Object.hasOwn(academy, "members"));

const newAcademy = { ...academy, member: "Premium" };
console.log("გაერთიანებული ობიექტი:", newAcademy);

Object.freeze(newAcademy);

console.log("გაყინულია თუ არა ობიექტი:", Object.isFrozen(newAcademy));

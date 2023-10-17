const orange = [
    {
        firstname: "Corange",
        lastname: "Porange",
        age: 12,
        city: "Cleveland",
        hometown: "Bed-Stuy, NY",
        cool: false,
        favoritenumbers: ["1","3"],
    },
    {
        firstname: "Pyeorange",
        lastname: "Smorange",
        age: 93,
        city: "Oakland",
        hometown: "Portland, ME",
        cool: true,
        favoritenumbers: ["1","7"],
    },
    {
        firstname: "Torange",
        lastname: "Morange",
        age: 31,
        city: "Dallas",
        hometown: "Orlando, FL",
        cool: false,
        favoritenumbers: ["1","9"],
    },
    {
        firstname: "OrangeOrange",
        lastname: "OrangeOrange",
        age: 2, 
        city: "Macau",
        hometown: "Hong-Kong, SAR",
        cool: true,
        favoritenumbers: ["1","6"],
    },
    {
        firstname: "Jorange",
        lastname: "Gregorius-Oranges",
        age: 5,
        city: "Quito",
        hometown: "Guernsey, UK",
        cool: true,
        favoritenumbers: ["1","4"],
    },
];

orange.forEach((orange) => {
    console.log(orange.firstname);
});
orange.forEach((orange) => {
    orange.favoritenumbers.forEach((favoritenumbers) => console.log(favoritenumbers));
})
const orangecool = orange.filter(orange => orange.cool ===true);
console.log(orangecool);

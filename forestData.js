let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

// Task 1
parks.find(park => park.name === "Riverside Park").name = "Riverside Greenspace";

// Task 2
let centralPark = parks.find(park => park.name === "Central Park");
centralPark.trees.find(tree => tree.species === "Maple").species = "Sugar Maple";

// Task 3
centralPark.trees.push({ species: "Birch", age: 7, health: "Good", height: 18 });

// Task 4
let centralParkTrees = centralPark.trees.map(tree => tree.species);

// Task 5
let totalAge = parks.flatMap(park => park.trees).reduce((total, tree) => total + tree.age, 0);
let totalCount = parks.flatMap(park => park.trees).length;
let averageTreeAge = totalAge / totalCount;

// Task 6
let tallestTree = parks.flatMap(park => park.trees).reduce((tallest, current) => current.height > tallest.height ? current : tallest);

// Task 7
centralPark.facilities = centralPark.facilities.filter(facility => facility !== "playground");

// Task 8
let parksJSON = JSON.stringify(parks);

// Task 9
console.log(`Name: ${parks[0].name}, Facilities: ${parks[0].facilities.join(", ")}`);

// Task 10
console.log(`Species in Hilltop Park: ${parks.find(park => park.name === "Hilltop Park").trees.map(tree => tree.species).join(", ")}`);

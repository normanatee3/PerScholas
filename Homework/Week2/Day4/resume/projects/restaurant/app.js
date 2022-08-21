let menu= {
    brunch: [
        {
            name: "Pancakes",
            smPrice: "$6",
            txtMod: "Extra Pancake",
            lgPrice: "$7"
        },
        {
            name: "Omelette",
            smPrice: "$7",
            txtMod: "Extra Egg",
            lgPrice: "$8"
        },
        {
            name: "Waffles",
            smPrice: "$6",
            txtMod: "Extra Waffle",
            lgPrice: "$7"
        },
        {
            name: "Home Fries",
            smPrice: "$5",
            txtMod: "Lg",
            lgPrice: "$6"
        },
        {
            name: "Hash Browns",
            smPrice: "$5",
            txtMod: "Lg",
            lgPrice: "$6"
        },
        {
            name: "Fruit Cup",
            smPrice: "$4",
            txtMod: "Lg",
            lgPrice: "$5"
        },
    ],
    lunch: [
        {
            name: "Grilled Cheese",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "Turkey Sandwich",
            smPrice: "$7",
            txtMod: "w/ fries or salad",
            lgPrice: "$8"
        },
        {
            name: "Hamburger",
            smPrice: "$8",
            txtMod: "w/ fries or salad",
            lgPrice: "$9"
        },
        {
            name: "Cheeseburger",
            smPrice: "$8.50",
            txtMod: "w/ fries or salad",
            lgPrice: "$9.50"
        },
        {
            name: "Chicken Sandwich",
            smPrice: "$7",
            txtMod: "w/ fries or salad",
            lgPrice: "$8"
        },
        {
            name: "Meatball Sandwich",
            smPrice: "$7",
            txtMod: "w/ fries or salad",
            lgPrice: "$8"
        },
    ],
    dinner:[ 
        {
            name: "Alfredo",
            smPrice: "$9",
            txtMod: "Large",
            lgPrice: "$10"
        },
        {
            name: "Pesto",
            smPrice: "$9",
            txtMod: "Large",
            lgPrice: "$10"
        },
        {
            name: "Spaghetti",
            smPrice: "$9",
            txtMod: "Large",
            lgPrice: "$10"
        },
        {
            name: "Garlic Shrimp",
            smPrice: "$10",
            txtMod: "Large",
            lgPrice: "$12"
        },
        {
            name: "Lemon Chicken",
            smPrice: "$10",
            txtMod: "Large",
            lgPrice: "$12"
        },
        {
            name: "Honey Salmon",
            smPrice: "$11",
            txtMod: "Large",
            lgPrice: "$12"
        },
    ],
    dessert:[ 
        {
            name: "Lava Cake",
            smPrice: "$3",
            txtMod: "w/ Ice cream",
            lgPrice: "$5"
        },
        {
            name: "Cheesecake",
            smPrice: "$3",
            txtMod: "w/ Caramel topping",
            lgPrice: "$5"
        },
        {
            name: "Apple Pie",
            smPrice: "$3",
            txtMod: "w/ Ice cream",
            lgPrice: "$5"
        },
        {
            name: "Fried Dough",
            smPrice: "$4",
            txtMod: "Large",
            lgPrice: "$6"
        },
        {
            name: "Tiramisu",
            smPrice: "$6",
            txtMod: "w/ Ice cream",
            lgPrice: "$8"
        },
        {
            name: "Cast Iron Cookie",
            smPrice: "$6",
            txtMod: "w/ Ice cream",
            lgPrice: "$8"
        },
    ],
    beverages: [
        {
            name: "Seltzer",
            smPrice: "$1",
            txtMod: "Large",
            lgPrice: "$2"
        },
        {
            name: "Lemonade",
            smPrice: "$2",
            txtMod: "Large",
            lgPrice: "$3"
        },
        {
            name: "Soda",
            smPrice: "$2",
            txtMod: "Large",
            lgPrice: "$3"
        },
        {
            name: "Coffee",
            smPrice: "$2",
            txtMod: "Large",
            lgPrice: "$3"
        },
        {
            name: "Fresh OJ",
            smPrice: "$3",
            txtMod: "Large",
            lgPrice: "$4"
        },
        {
            name: "Milk Shake",
            smPrice: "$5",
            txtMod: "Large",
            lgPrice: "$6"
        },
    ],
    entrees: [
        {
            name: "Steak",
            smPrice: "$12",
            txtMod: "w/ fries or salad",
            lgPrice: "$13"
        },
        {
            name: "Pork Chop",
            smPrice: "$10",
            txtMod: "w/ fries or salad",
            lgPrice: "$11"
        },
        {
            name: "Fish & Chips",
            smPrice: "$12",
            txtMod: "w/ fries or salad",
            lgPrice: "$13"
        },
        {
            name: "Fried Clams",
            smPrice: "$15",
            txtMod: "w/ fries or salad",
            lgPrice: "$16"
        },
        {
            name: "Salmon Cakes",
            smPrice: "$10",
            txtMod: "w/ fries or salad",
            lgPrice: "$11"
        },
        {
            name: "Roasted Chicken",
            smPrice: "$9",
            txtMod: "w/ fries or salad",
            lgPrice: "$10"
        },
    ],
    appetizers: [
        {
            name: "Fried Wings",
            smPrice: "$8",
            txtMod: "Large",
            lgPrice: "$10"
        },
        {
            name: "Buffalo Wings",
            smPrice: "$9",
            txtMod: "Large",
            lgPrice: "$11"
        },
        {
            name: "Mozzarella Sticks",
            smPrice: "$6",
            txtMod: "Large",
            lgPrice: "$8"
        },
        {
            name: "Jalapeno Poppers",
            smPrice: "$6",
            txtMod: "Large",
            lgPrice: "$8"
        },
        {
            name: "Calamari",
            smPrice: "$9",
            txtMod: "Large",
            lgPrice: "$11"
        },
        {
            name: "Nachos",
            smPrice: "$8",
            txtMod: "w/ meat",
            lgPrice: "$11"
        }
    ]


}



let changeItems = (evt) => {
    let foodItems = document.querySelectorAll(".foodItem")
    for(let i = 0; i <foodItems.length; i++ ){
        foodItems[i].innerHTML = `<h3 class="item${i+1}">${menu[evt][i].name}</h3>
        <h4 class="item${i+1}">${menu[evt][i].smPrice}</h4>
        <h6 class="item${i+1}">${menu[evt][i].txtMod}</h6>
        <h5 class="item${i+1}">${menu[evt][i].lgPrice}</h5>`
    }
}
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
            txtMod: "Lg",
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
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
    ],
    dinner:[ 
        {
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "w/ fries or salad",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
    ],
    dessert:[ 
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
    ],
    beverages: [
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
    ],
    entrees: [
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
    ],
    appetizers: [
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        },
        {
            name: "",
            smPrice: "$6",
            txtMod: "Lg",
            lgPrice: "$7"
        }
    ]


}



let changeItems = (evt) => {
    let foodItems = document.querySelectorAll(".foodItem")
    for(let i = 0; i <foodItems.length; i++ ){
        foodItems[i].innerHTML = `<h1 class="item${i+1}">${menu[evt][i].name}</h1>
        <h4 class="item${i+1}">${menu[evt][i].smPrice}</h4>
        <h6 class="item${i+1}">${menu[evt][i].txtMod}</h6>
        <h5 class="item${i+1}">${menu[evt][i].lgPrice}</h5>`
    }
}
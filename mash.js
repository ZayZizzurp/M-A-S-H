function getHome() {
    const userHome = process.argv[2];
    if (userHome) {

    } 

    const homes = ["Mansion", "Apartment", "Shack", "House", process.argv[2], "cave"];
    
    const decimal = Math.random();
    const timesLength = decimal * homes.length;
    const randomHomes = Math.floor(timesLength)
    const homesValue = homes[randomHomes];
    return homesValue;
}

function getChildrenCount() {
    if(userChildren){
        
    }
    const userChildren = process.argv[3];
    let childrenChance = Math.random();

    const decimal = Math.random();
    const times100 = decimal * 100;
    const randomChildren = Math.floor(times100) + 1;

    if(childrenChance = 0){
        return userChildren
    }else{
        return randomChildren;
    }
    
}

function getCar(){
    if(userCar){
        
    }
    const userCar = process.argv[4];
    const cars = ["Ferrari", "BMW", "Toyota", "Clown Car", "Batmobile", process.argv[4]];

    const decimal = Math.random();
    const timesLength = decimal * cars.length;
    const randomCars = Math.floor(timesLength)
    const carsValue = cars[randomCars];
    return carsValue;
}

function mash() {
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids" + " and you'll drive a " + getCar(); 
}

console.log(mash());

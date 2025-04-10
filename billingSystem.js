let VehicleType 
let Duration 

function lotBillingSystem(VehicleType, Duration) {
    let firstHourPrice = 0
    let nextHourPrice = 0
    let extraCharge = 0

    switch (VehicleType) {
        case 'Car':
            firstHourPrice = 5000
            nextHourPrice = 3000
            extraCharge = 50000
            break;
        case 'Bike':
            firstHourPrice = 2000
            nextHourPrice = 1000
            extraCharge = 20000
            break;
        default:
            return "Invalid Vehicle Type"
    }

    let totalCost
    const oneDay = 24 
    if (Duration < 1) {
        totalCost = `Total Tagihan = ${firstHourPrice}`
    }else if (Duration < oneDay){
        totalCost = `Total Tagihan = ${firstHourPrice + (Math.floor(Duration - 1) * nextHourPrice)}`
    }
    else {
        totalCost = `Total Tagihan = ${firstHourPrice + (Math.floor(Duration - 1) * nextHourPrice + extraCharge)}`
    }

    return totalCost
}

console.log(lotBillingSystem('Car', 3))
console.log(lotBillingSystem('Bike', 1))
console.log(lotBillingSystem('Car', 27))

module.exports = lotBillingSystem;
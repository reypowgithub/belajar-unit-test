const lotBillingSystem = require('./billingSystem.js')

describe('lotBillingSystem', () => {
    it('should return the correct billing for Car with duration 3 hours', () => {
        //given
        const vehicleType = 'Car'
        const duration = 3

        //when
        const result = lotBillingSystem(vehicleType, duration)

        //then
        const expected = 'Total Tagihan = 11000'
        expect(result).toBe(expected)
    });

    it('should return the correct billing for invalid vehicle type', () => {
        //given
        const vehicleType = 'Truck'
        const duration = 1

        //when
        const result = lotBillingSystem(vehicleType, duration)

        //then
        const expected = 'Invalid Vehicle Type'
        expect(result).toBe(expected)
    });
    it('should return the correct billing for Bike with duration less than 1 hour', () => {
        //given
        const vehicleType = 'Bike'
        const duration = 30/60

        //when
        const result = lotBillingSystem(vehicleType, duration)

        //then
        const expected = 'Total Tagihan = 2000'
        expect(result).toBe(expected)
    });
});
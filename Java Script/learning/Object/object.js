var car={
    car_brand:"Tesla",
    car_model:"Model 3",
    price: 35000,
    teslaAutoPilot: function()
    {
        document.write("<h2>This car has a Auto ilot</h2>");
    }
}
car.fuelType="petrol";
car.price="35000";
document.write("<h2>"+typeof(car.price)+"</h2>");
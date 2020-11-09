// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)

// Add variable for tbody
var tbody = d3.select("tbody");

// Add Data to HTML Site
tableData.forEach(ufoSighting => {
    // console.log(ufoSighting);
    

    var row = tbody.append("tr");

    Object.values(ufoSighting).forEach(value => {
    row.append('td').text(value)

    })
})

var showData = (dataInput) => dataInput.forEach(ufoSighting => {
    var row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {
        row.append('td').text(value);
    });
});

// Connect button as an event/listener to filter the data
var button = d3.select("#filter-btn");


// When button is clicked do the following
button.on("click", function() {

    var dataCheck = 1

    // Select data in datetime box
    var inputFieldDate = d3.select("#datetime");
    var inputFieldCity = d3.select("#city");
    var inputFieldState = d3.select("#state");
    var inputFieldCountry = d3.select("#country");
    var inputFieldShape = d3.select("#shape");

    // grab the value property from the datetime box content
    var inputDate = inputFieldDate.property("value");
    // console.log(inputDate);
    var inputCity = inputFieldCity.property("value").toLowerCase();
    // console.log(inputCity);
    var inputState = inputFieldState.property("value").toLowerCase();
    // console.log(inputState);
    var inputCountry = inputFieldCountry.property("value").toLowerCase();
    var inputShape = inputFieldShape.property("value").toLowerCase();

    // filter and add the data 

    // ADD THE REST OF THE CRITERIA AS WELL AS BELOW (COMBINED) - THEN APPEND TO TD USE CITY AS EXAMPLE
    var filterDate = tableData.filter(ufoSighting => ufoSighting.datetime === inputDate);
    // console.log(filterDate);
    var filterCity = tableData.filter(ufoSighting => ufoSighting.city === inputCity);
    // console.log(filterCity);
    var filterState = tableData.filter(ufoSighting => ufoSighting.state === inputState);
    var filterCountry = tableData.filter(ufoSighting => ufoSighting.Country === inputCountry);
    var filterShape = tableData.filter(ufoSighting => ufoSighting.shape === inputShape);

    var filterCombined = tableData.filter(ufoSighting => ufoSighting.datetime === inputDate && ufoSighting.city === inputCity && ufoSighting.state === inputState && ufoSighting.country === inputCountry && ufoSighting.shape === inputShape);
    console.log(filterCombined)
    if (dataCheck == 1) {
        delTable = tbody.html("");
    };

    let response = {
            filterDate, filterCity, filterState, filterCountry, filterShape, filterCombined}

    if(response.filterCombined.length !==0){

        showData(filterCombined)
    }

    else if (response.filterCombined.length == 0 && ((response.filterDate.length !==0 || response.filterCity.length !==0 || response.filterState.length !==0 || response.filterCountry.length !==0 || response.filterShape.length !==0))){
    showData(filterDate) || showData(filterCity) || showData(filterState) || showData(filterCountry) || showData(filterShape);
    }; 

    
});
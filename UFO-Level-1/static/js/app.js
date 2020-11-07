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

// Connect button as an event/listener to filter the data
var button = d3.select("#filter-btn");


// When button is clicked do the following
button.on("click", function() {

    var dataCheck = 1

    // Select data in datetime box
    var inputFieldDate = d3.select("#datetime")

    // grab the value property from the datetime box content
    var inputDate = inputFieldDate.property("value");
    // console.log(inputDate)

    // filter and add the data
    var filterDate = tableData.filter(ufoSighting => ufoSighting.datetime === inputDate);
    console.log(filterDate);

    if (dataCheck == 1) {
        delTable = tbody.html("");
    };

    filterDate.forEach(ufoFiltered => {
        var row = tbody.append('tr');
        Object.values(ufoFiltered).forEach(value => {
            row.append('td').text(value);
        });

    });
    
})
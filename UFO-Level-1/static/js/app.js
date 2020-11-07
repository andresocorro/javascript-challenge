// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)

// Add Data to HTML Site
tableData.forEach(ufoSighting => {
    console.log(ufoSighting);


    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

    Object.values(ufoSighting).forEach(value => {
    row.append('td').text(value)

    })
})

// Connect button as an event/listener to filter the data
var button = d3.select("#filter-btn");


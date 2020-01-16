// Create function to add table row and table datas for each object 
function addRow(row) {
    var selectTablebody = d3.select("tbody")
    var appendTablerow = selectTablebody.append("tr")
    var values = Object.values(row)
    values.forEach(value => {
        var appendTabledata = appendTablerow.append("td")
        appendTabledata.text(value)
    })
}
// Add table data for each value
data.forEach(value => addRow(value))
// Select button
var button = d3.select("#filter-btn")
// Function to filter data according to input value
button.on("click", function() {
    var selectTablebody = d3.select("tbody")
    selectTablebody.remove("tr")

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = data.filter(record => record.datetime === inputValue);

    function addRow(row) {
        var selectTable = d3.select("table")
        var appendTablebody = selectTable.append("tbody")
        var selectTablebody = d3.select("tbody")
        var appendTablerow = selectTablebody.append("tr")
        var values = Object.values(row)
        values.forEach(value => {
            var appendTabledata = appendTablerow.append("td")
            appendTabledata.text(value)
        })
    }

    filteredData.forEach(value => addRow(value));

});

// 




/*               
<tr>
<td>2/2/2002</td>
<td>dubai</td>
<td>dubai</td>
<td>uae</td>
<td>circle</td>
<td>2 days</td>
<td>comment</td>
</tr> */
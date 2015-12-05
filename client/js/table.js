function loadXMLDoc() {
    // Create a table row variable
    var tr;
    // Create an AJAX request to get a JSON file and render it as inside a table
    $.getJSON('/get/json', function(result) {
        // Loop throgh JSON file to determine top-level objects (country array in our case)
        $.each(result, function(key, data) {
            // Loop throgh each object inside country array
            $.each(data, function(index, field) {
                // Build a table row and append to the only existing table
                tr = $('<tr/>');
                //tr.attr('class', field.title);
                tr.append("<td>" + field.adTitle + "</td>");
                tr.append("<td>" + field.adDescription + "</td>");
                tr.append("<td>" + field.adCategory + "</td>");
                tr.append("<td>" + field.adPrice + "</td>");
                tr.append("<td>" + field.adLocation + "</td>");
                tr.append("<td>" + field.adSeller + "</td>");
                tr.append("<td>" + field.adDate + "</td>");
                $('table').append(tr);
            });
        });
    });
};
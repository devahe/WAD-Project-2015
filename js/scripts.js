
//code from W3Schools -> http://www.w3schools.com/xml/tryit.asp?filename=tryxml_display_table
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "database/classifieds.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Title</th><th>Description</th><th>Category</th><th>Price</th><th>Location</th><th>Seller</th><th>Date</th></tr>";
  var x = xmlDoc.getElementsByTagName("advert");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("seller")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
function printFlower(data) {
    let flowerHTML;
    for (let i=0; i<data.length; i++) {
        flowerHTML += "<div class=\"col-3 col-6-medium col-12-small\">";
        flowerHTML += "<section class=\"box feature\">";
        flowerHTML += "<a class=\"image featured\"><img src=" + data[i]["images"]["feature"] + " alt=\"\" /></a>";
        flowerHTML += "<h3>" + data[i]["strain"] + "</h3>";
        flowerHTML += "<div style=\"display:flex; align-items: center;\">"
        flowerHTML += "<div class=\"custom-select\" style=\"width:200px;flex:1;\">";
        flowerHTML += "<select><option value=\"0\">See Prices:</option>";
        flowerHTML += "<option value=\"1\">3.5g / " + data[i]["prices"]["eigth"] + "</option>";
        flowerHTML += "<option value=\"2\">7g / " + data[i]["prices"]["quarter"] + "</option>";
        flowerHTML += "<option value=\"3\">14g / " + data[i]["prices"]["half"] + "</option>";
        flowerHTML += "<option value=\"4\">28g / " + data[i]["prices"]["full"] + "</option></select></div>";

        if (data[i]["sale?"]) {
            flowerHTML += "<h4 class=\"pricing\" style=\"flex:1;\"></a>28g/<a class=\"strike-through\">$140<a class=\"sale</a></h4>"
        }

        flowerHTML += "</div><h4 class=\"details\"><b class=\"label\">Variety: </b>" + data[i]["variety"] + "</h4>";

        document.getElementById("flower-menu").innerHTML = flowerHTML;
    }
}

function printProduct(name) {
    if (name === "flower") {
        fetch("./data/flower.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                printFlower(data);
            })
            .catch( (error) => {
                console.error(error);
            });
    }
}
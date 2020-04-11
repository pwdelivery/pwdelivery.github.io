function printFlower(data) {
    let flowerHTML;
    for (let i=0; i<data.length; i++) {
        flowerHTML += "<div class=\"col-3 col-6-medium col-12-small\">";
        flowerHTML += "<section class=\"box feature\">";
        flowerHTML += "<a class=\"image featured\"><img src=" + data[i]["images"]["feature"] + " alt=\"\" /></a>";
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
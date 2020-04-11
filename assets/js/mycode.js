function printFlower() {

}

function printProduct(name) {
    if (name === "flower") {
        fetch("./data/flower.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch( (error) => {
                console.error(error);
            });
    }
}
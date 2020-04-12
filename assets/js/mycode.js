function customSelectMain() {
    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    console.log(x);
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  }

/*
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
}*/

function printFlower(data) {
    let flowerHTML;
    for (let i=0; i<data.length; i++) {
        flowerHTML = "\
        <!-- Feature -->\
            <section class=\"box feature\">\
                <a class=\"image featured\"><img src=" + data[i]["images"]["feature"] + " alt=\"\" /></a>\
                <h3>" + data[i]["strain"] + "</h3>\
                <div style=\"display:flex; align-items: center;\">\
                    <div class=\"custom-select\" style=\"width:200px;flex:1;\">\
                        <select>\
                        <option value=\"0\">See Prices:</option>\
                        <option value=\"1\">3.5g / " + data[i]["prices"]["eigth"] + "</option>\
                        <option value=\"2\">7g / " + data[i]["prices"]["quarter"] + "</option>\
                        <option value=\"3\">14g / " + data[i]["prices"]["half"] + "</option>\
                        <option value=\"4\">28g / " + data[i]["prices"]["full"] + "</option>\
                        </select>\
                    </div>";
       
        if (data[i]["sale?"]) {
            flowerHTML += "\
                    <h4 class=\"pricing\" style=\"flex:1;\"></a>28g/<a class=\"strike-through\">$140<a class=\"sale\"> $120</a></h4>";
        }

        flowerHTML += "\
                </div>\
                <h4 class=\"details\"><b class=\"label\">Variety: </b>" + data[i]["variety"] + "</h4>\
                <h4 class=\"details\"><b class=\"label\">Bud Size: </b>" + data[i]["budsize"] + "</h4>\
                <h4 class=\"details\"><b class=\"label\">Texture: </b>" + data[i]["texture"] + "</h4>\
                <h4 class=\"details\"><b class=\"label\">Flavour: </b>" + data[i]["flavour"] + "</h4>\
                <h4 class=\"details\"><b class=\"label\">Medical: </b>" + data[i]["medical"] + "</h4>\
                <h4 class=\"details\"><b class=\"label\">THC: </b>" + data[i]["thc"] + "<b class=\"label\"> CBD: </b>" + data[i]["cbd"] + "</h4>\
            </section>";

    let product = document.createElement("div");
    product.className = "col-3 col-6-medium col-12-small";
    product.innerHTML = flowerHTML;
    document.getElementById("flower-menu").insertBefore(product, document.getElementById("action-buttons"));
    }
    customSelectMain();
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
window.onload = manipulateTable;

let array = [];
let index = 0;



function manipulateTable() {

    document.getElementById("clickAdd").onclick = function () {
        index++;
        let itemName = document.getElementById("itemName");
        let category = document.getElementById("category");
        let quantity = document.getElementById("quantity");
        let itemObj = {
            id: index, iteName: itemName.value, iteCategory: category.value,
            iteQuantity: quantity.value
        }
        array.push(itemObj);


        let table = document.getElementById("tableId");
        let tr = document.createElement("tr");
        tr.setAttribute("id", "trId");
        table.append(tr);

        let nameTd = document.createElement("td");
        nameTd.innerText = itemName.value;
        tr.append(nameTd);
        nameTd.style.paddingRight = "100px";

        let categoryTd = document.createElement("td");
        categoryTd.innerText = category.value;
        tr.append(categoryTd);
        categoryTd.style.paddingRight = "100px";

        let quantityTd = document.createElement("td");
        quantityTd.innerText = quantity.value;
        tr.append(quantityTd);
        quantityTd.style.paddingRight = "100px";

        // 2a.
        let editTd = document.createElement("td");
        let editButton = document.createElement("button")
        editButton.innerText = "Edit";
        editButton.setAttribute("myId", index)
        editButton.onclick = function () {

            let childNodes = this.parentNode.parentNode.childNodes;
            itemName.value = childNodes[0].innerHTML;
            category.value = childNodes[1].innerHTML;
            quantity.value = childNodes[2].innerHTML;

            let myId = this.getAttribute("myId");
            array.forEach(function (item) {
                if (item.id == myId) {
                    item.iteName = itemName.value;
                    item.iteCategory = category.value;
                    item.iteQuantity = quantity.value;

                }
            })
        }
        editTd.append(editButton);
        tr.append(editTd);

        // 2b.
        let removeTd = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.setAttribute("myId", index)
        removeButton.onclick = function () {
            let myId = this.getAttribute("myId");
            array.filter(item => item.id != myId);

            this.parentNode.parentNode.remove();
        }
        removeTd.append(removeButton);
        tr.append(removeTd);

        // 3a. Filter and sort
    let opt = document.getElementsByName("sort")[0];
    opt.onclick = function(){
        for (let each of opt.options){
            if(each.selected){
                
                if(each.value == "productName"){
                    array.sort((a,b) => a.iteName > b.iteName? 1:-1);

                }
                
                if(each.value == "itemCategory"){
                    array.sort((a,b) => a.iteCategory > b.iteCategory? 1: -1);
                }
                
                if(each.value == "itemQuantity"){
                    array.sort((a,b) => a.iteQuantity - b.iteQuantity);
                }
            }

        }
    }

    // 3b. 

    document.getElementById("filter").onclick = function () {
        let filteredArray = array.filter((item) => Number(item.iteQuantity) > 100);
        let children = document.getElementById('tableId').childNodes;
        for (let i = 2; i < children.length; i++) {
            let eachTr = children[i];
            console.log(eachTr.children[2]);
            if (Number(eachTr.children[2].innerHTML) < 100) {
                eachTr.style.display = "none";
            }
        }
    }

        // 4. Show an alert when the price is not number and turn the box into red. 
        // alert(typeof +(quantity.value));
        // alert(quantity.value);
        if (!(typeof (quantity.value) === Number)) {
            alert("Quantity should be a number");
            quantity.style.backgroundColor = "red";
        }
        quantity.style.backgroundColor = "none";

        // 5. Alert user when nothing is entered in field
        if (itemName.value == "" || category.value == "" || quantity.value == "") {
            alert("Enter information in order to save");
            document.getElementById("trId").remove();
        }

        // 6. Change row color on hover
        let rows = document.getElementsByTagName("tr");
        for (let each of rows) {
            // if(document.querySelector("tr[class='row0']")) {

            // }
            each.onmouseover = function () {
                each.style.color = "red";
            }
            each.onmouseout = function () {
                each.style.color = "";
            }
        }

       
    }


    document.getElementById("clearFilter").onclick = function () {
        let filteredArray = array.filter((item) => Number(item.quantity) > 100);
        let children = document.getElementById('tableId').childNodes;
        for (let i = 2; i < children.length; i++) {
            let eachTr = children[i];
            console.log(eachTr.children[2]);
            eachTr.style.display = "";
        }
    }
    

}



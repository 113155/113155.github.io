window.onload = addItem;

let array = [];

function addItem(){
    document.getElementById("clickAdd").onclick = function(){
    let table = document.getElementById("tableId");
    let itemName = document.getElementById("itemName");
    let category = document.getElementById("category");
    let quantity = document.getElementById("quantity");
    let tr = document.createElement("tr");
    table.append(tr);
    let td1 = document.createElement("td");
    tr.append(td1);
    td1.innerText = itemName.value;
    td1.style.paddingRight = "100px";

    let td2 = document.createElement("td");
    tr.append(td2);
    td2.innerText = category.value;
    td2.style.paddingRight = "100px";

    let td3 = document.createElement("td");
    tr.append(td3);
    td3.innerText = quantity.value;
    td3.style.paddingRight = "100px";

    alert(itemName.value);

    let obj = {itemName:itemName.value, category:category.value, quantity:quantity.value}
    array.push(obj);
    alert(obj.itemName);
    alert(array+array.length);
    }

    document.getElementById("editButton").onclick = function(){
        let itemName = document.getElementById("itemName");
        let category = document.getElementById("category");
        let quantity = document.getElementById("quantity");
        let ele = array.pop();
        itemName.value = ele.itemName;
         category.value = ele.category;
        quantity.value = ele.quantity;
    } 
    document.getElementById("removeButton").onclick = function(){
        let table = document.getElementById('tableId')
        table.deleteRow(-1)
        array.pop();
    }   
    
}

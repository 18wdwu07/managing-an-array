// console.log("working");
// alert("working");


var list = [];
function addNewItem(){

    console.log(list);
    var question = prompt("What is the item you want to include");
    console.log(question);
    list.push(question);
    console.log(list);

    // document.getElementById("shoppingList").innerHTML += "<li>"+question+"</li>";

    document.getElementById("shoppingList").innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        document.getElementById("shoppingList").innerHTML += "<li>"+list[i]+"</li>";
    }
}

function sortAsc(){
    console.log(list);
    list.sort();
    console.log(list);
    document.getElementById("shoppingList").innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        document.getElementById("shoppingList").innerHTML += "<li>"+list[i]+"</li>";
    }

    // var sortedList = [];
    // for (var i = 0; i < list.length; i++) {
    //     if(sortedList.length == 0){
    //         sortedList.push(list[i]);
    //         continue;
    //     }
    //
    //     for (var j = 0; j < sortedList.length; j++) {
    //         var listFirstChar = list[i][0];
    //         var newListFirstChar = sortedList[j][0];
    //         if(listFirstChar == newListFirstChar){
    //             //check the next character
    //         } else if(listFirstChar > newListFirstChar){
    //             sortedList.push(list[i]);
    //             break;
    //         } else {
    //             sortedList.unshift(list[i]);
    //             break;
    //         }
    //
    //     }
    // }
    // console.log("new List");
    // console.log(sortedList);
    // list = sortedList;
    // document.getElementById("shoppingList").innerHTML = "";
    // for (var i = 0; i < list.length; i++) {
    //     document.getElementById("shoppingList").innerHTML += "<li>"+list[i]+"</li>";
    // }
}


function deleteItem(){
    var itemToDelete = prompt("What item would you like to delete");
    if( (itemToDelete == null) || (itemToDelete.length == 0)  ){
        console.log("You need to add a value");
        deleteItem();
    } else {
        console.log(itemToDelete);
        for (var i = 0; i < list.length; i++) {
            if(itemToDelete == list[i]){
                console.log("delete "+itemToDelete);
                list.splice(i, 1);
                break;
            } else {
                console.log("there is no item with that name in the list");
            }
        }
        console.log(list);
        document.getElementById("shoppingList").innerHTML = "";
        for (var i = 0; i < list.length; i++) {
            document.getElementById("shoppingList").innerHTML += "<li>"+list[i]+"</li>";
        }
    }
}

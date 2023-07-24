import Action from "./clasess/Action.JS";
import ActionsManager from "./clasess/ActionManeger.JS";

let manager = new ActionsManager();
let food = new Action("expense", "fruits", 200);
manager.addAction(food);
manager.addAction(new Action("income", "salary", 10000));
console.log(manager.actions);
// manager.deleteAction(food.id);
// console.log(manager.actions);
manager.updateAction(food.id, 350);
manager.calcBalance();
console.log(manager.balance);

function showActionsInTable() {
    document.getElementById("actions").innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById("actions").innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"}> <td>${action.description} </td> <td>${action.amount} </td><td><i class="fa-regular fa-pen-to-square" onclick="updateAction(${action.id})"></i> </td> <td><i class="fa-regular fa-trash-can" onclick="deleteAction(${action.id})"></i> </td></tr>`;
    }
}
showActionsInTable();

window.addNewAction = () => {
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = +document.getElementById("amount").value;

    let newAction = new Action(type, description, amount);

    manager.addAction(newAction);
    document.getElementById("type").value = "Income";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    console.log(manager.actions);
    showActionsInTable();
    /*  localStorage.setItem("actions2", JSON.stringify(this.actions)) */
};

window.updateAction = (id) => {
    let newAmount = prompt("Enter A New Amount:");
    if (newAmount == null || newAmount == "" || newAmount != +newAmount)
        alert("Sorry Somthing Went Worng");
    else {
        manager.updateAction(id, +newAmount)
        showActionsInTable();
    }
}

/* window.updateAction = (id) => {
    let newAmount = prompt("Enter new amount:");
    if (newAmount == null || newAmount == "" || newAmount != +newAmount)
        alert("Sorry! Something went wrong");
    else {
        manager.updateAction(id, +newAmount);
        showActionsInTable();
    }
}; */

window.deleteAction = (id) => {
    if (confirm("Are You Sure?")) {
        manager.deleteAction(id)
        showActionsInTable();

    }
}

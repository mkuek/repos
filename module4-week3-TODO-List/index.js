let list_item = document.getElementById("todo");
//   console.log(list_item);
let list_count = document.getElementById("todo").childElementCount;
//   console.log(list_count);
function addPendingHeader() {
  let pendHead = document.getElementById("pendingHead");
  //Create "Pending Tasks header"
  let pendingHead = document.createElement("H4");
  pendingHead.classList.add("pendHeader");
  let pendingTxt = document.createTextNode("Pending Tasks");
  pendingHead.appendChild(pendingTxt);
  pendHead.appendChild(pendingHead);
}

function addCompletedHeader() {
  let compHeader = document.getElementById("completedHead");
  let completedHead = document.createElement("H4");
  completedHead.classList.add("compHeader");
  let completeTxt = document.createTextNode("Completed Tasks");
  completedHead.appendChild(completeTxt);
  compHeader.appendChild(completedHead);
}
// // Function called while clicking add button
// function add_item() {
//   // Getting box and ul by selecting id;
//   let item = document.getElementById("box");
//   //   console.log(item.valuesvg);

//   if (item.value != "") {
//     // Creating element and adding value to it
//     let make_li = document.createElement("LI");
//     let input = document.createElement("input");
//     let text = document.createTextNode(item.value);
//     let pendHeadSelect = document.querySelector("h4.pendHeader");

//     if (pendHeadSelect == null) {
//       addPendingHeader();
//     }
//     item.appendChild(make_li).appendChild(input);
//     make_li.appendChild(text);
//     // console.log(make_li);
//     // make_li.appendChild(document.createTextNode(item.value));
//     // Adding li to ul
//     list_item.appendChild(make_li);
//     input.type = "checkbox";
//     make_li.style.listStyle = "none";
//     // Reset the value of box
//     item.value = "";

//     // Delete a li item on click

//     //move li item to completed section
//   } else {
//     // Alert msg when value of box is "" empty.
//     alert("Please enter a todo item to add it to the list");
//   }
// }

let addButton = document.querySelector("#add");
let addInput = document.querySelector("#item");

addButton.addEventListener("click", function () {
  let newItem = document.getElementById("box").value;
  //   console.log(newItem);
  if (newItem) {
    addItemTodo(newItem);
    document.getElementById("box").value = "";
  }
});

function addItemTodo(text) {
  let list = document.getElementById("todo");
  let item = document.createElement("li");
  item.innerText = text;
  let pendHeadSelect = document.querySelector("h4.pendHeader");

  if (pendHeadSelect == null) {
    addPendingHeader();
  }
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  let remove = document.createElement("button");
  remove.classList.add("btn", "btn-primary", "form-control");
  remove.innerText = "Remove";
  remove.addEventListener("click", removeItem);

  let complete = document.createElement("input");
  complete.classList.add("complete");
  complete.id = "checkboxButton";
  complete.type = "checkbox";
  //   complete.innerText = "complete";
  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);

  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}

function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let id = parent.id;
  let compHeadSelect = document.querySelector("h4.compHeader");
  let taskCount = document.getElementById("todo").childElementCount;
  let pendHeadSelect = document.querySelector("h4.pendHeader");

  //   console.log(taskCount);
  let completeCount = document.getElementById("completeItem").childElementCount;

  let target =
    id === "todo"
      ? document.getElementById("completeItem")
      : document.getElementById("todo");
  if (compHeadSelect == null) {
    addCompletedHeader();
  } else if (pendHeadSelect == null) {
    addPendingHeader();
  } else if (taskCount == 1) {
    document.querySelector("h4.pendHeader").remove();
  }
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function removeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let taskCount = document.getElementById("todo").childElementCount;
  let completeCount = document.getElementById("completeItem").childElementCount;
  if (taskCount == 1) {
    document.querySelector("h4.pendHeader").remove();
  } else if (completeCount == 1) {
    document.querySelector("h4.compHeader").remove();
  }
  parent.removeChild(item);
}
// document.getElementById("list_item").addEventListener("click", () => {
//   let list_count = document.getElementById("list_item").childElementCount;
//   let newParent = document.getElementById("completeItem");
//   let oldParent = document.getElementById("list_item");
//   let compHeader = document.getElementById("completedHead");
//   let compCount = document.getElementById("completeItem").childElementCount;
//   console.log("Child Node:" + oldParent.querySelector(".child"));

//   if (compCount == 0 && compHeader.childElementCount < 1) {
//     //Create "Completed Tasks header"
//     console.log("compCount == 0 && compHeader.childElementCount < 1");
//     let completedHead = document.createElement("H4");
//     completedHead.classList.add("compHeader");
//     let completeTxt = document.createTextNode("Completed Tasks");
//     completedHead.appendChild(completeTxt);
//     compHeader.appendChild(completedHead);
//     newParent.appendChild(oldParent.childNodes[0]);
//     return;
//   } //(compCount >= 0 && list_count > 0)// {
//   else {
//     console.log("compCount >= 0 && list_count > 0");
//     newParent.appendChild(oldParent.childNodes[0]);
//   }

//   //   this.parentNode.removeChild(this);
//   //remove "Pending Tasks" header if num in list = 1

//   if (list_count == 1) {
//     document.querySelector("h4.pendHeader").remove();
//   }

//   //   if (
//   //     list_count == 0 &&
//   //     document.getElementById("pendingHead").childElementCount < 1
//   //   ) {
//   //     addPendingHeader();
//   //     document.querySelector("h4.compHeader").remove();
//   //     oldParent.appendChild(newParent.childNodes[0]);
//   //   }

//   //   if (
//   //     document.getElementById("pendingHead").childElementCount > 0 &&
//   //     compCount > 0
//   //   ) {
//   //     oldParent.appendChild(newParent.childNodes[0]);
//   //   }
// });
// document.getElementById("completeItem").addEventListener("click", () => {
//   let newParent = document.getElementById("completeItem");
//   let oldParent = document.getElementById("list_item");
//   let compCount = document.getElementById("completeItem").childElementCount;

//   console.log(compCount);
//   if (compCount == 1) {
//     document.querySelector("h4.compHeader").remove();
//     oldParent.appendChild(newParent.childNodes[0]);
//   } else if (document.getElementById("pendingHead").childElementCount < 1) {
//     addPendingHeader();
//     oldParent.appendChild(newParent.childNodes[0]);
//   } else {
//     oldParent.appendChild(newParent.childNodes[0]);
//   }
// });

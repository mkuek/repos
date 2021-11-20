let list_item = document.getElementById("list_item");
//   console.log(list_item);
let list_count = document.getElementById("list_item").childElementCount;
//   console.log(list_count);
let pendHead = document.getElementById("pendingHead");
function addPendingHeader() {
  if (list_count == 0) {
    //Create "Pending Tasks header"
    let pendingHead = document.createElement("H4");
    pendingHead.classList.add("pendHeader");
    let pendingTxt = document.createTextNode("Pending Tasks");
    pendingHead.appendChild(pendingTxt);
    pendHead.appendChild(pendingHead);
  }
}

// Function called while clicking add button
function add_item() {
  // Getting box and ul by selecting id;
  let item = document.getElementById("box");
  //   console.log(item.value);

  if (item.value != "") {
    // Creating element and adding value to it
    let make_li = document.createElement("LI");
    let input = document.createElement("input");
    let text = document.createTextNode(item.value);
    let pendHeadSelect = document.querySelector("h4.pendHeader");

    if (pendHeadSelect == null) {
      addPendingHeader();
    }
    item.appendChild(make_li).appendChild(input);
    make_li.appendChild(text);
    // console.log(make_li);
    // make_li.appendChild(document.createTextNode(item.value));
    // Adding li to ul
    list_item.appendChild(make_li);
    input.type = "checkbox";
    make_li.style.listStyle = "none";
    // Reset the value of box
    item.value = "";

    // Delete a li item on click
    make_li.onclick = function () {
      let list_count = document.getElementById("list_item").childElementCount;
      console.log("List count:" + list_count);
      let newParent = document.getElementById("completeItem");
      let oldParent = document.getElementById("list_item");
      let compHeader = document.getElementById("completedHead");
      let compCount = document.getElementById("completeItem").childElementCount;
      console.log("comp count:" + compCount);
      if (compCount == 0 && compHeader.childElementCount < 1) {
        //Create "Completed Tasks header"
        let completedHead = document.createElement("H4");
        completedHead.classList.add("compHeader");
        let completeTxt = document.createTextNode("Completed Tasks");
        completedHead.appendChild(completeTxt);
        compHeader.appendChild(completedHead);
        newParent.appendChild(oldParent.childNodes[0]);
      } else if (compCount >= 0 && list_count > 0) {
        newParent.appendChild(oldParent.childNodes[0]);
      }

      //   this.parentNode.removeChild(this);
      //remove "Pending Tasks" header if num in list = 1

      if (list_count == 1 && compCount == 0) {
        document.querySelector("h4.pendHeader").remove();
      }

      if (
        list_count == 0 &&
        document.getElementById("pendingHead").childElementCount < 1
      ) {
        addPendingHeader();
        document.querySelector("h4.compHeader").remove();
        oldParent.appendChild(newParent.childNodes[0]);
      }

      //   if (
      //     document.getElementById("pendingHead").childElementCount > 0 &&
      //     compCount > 0
      //   ) {
      //     oldParent.appendChild(newParent.childNodes[0]);
      //   }
    };

    document.getElementById("completeItem").addEventListener("click", () => {
      let newParent = document.getElementById("completeItem");
      let oldParent = document.getElementById("list_item");

      console.log({ oldParent, newParent });
      oldParent.appendChild(newParent.childNodes[0]);
    });

    //move li item to completed section
  } else {
    // Alert msg when value of box is "" empty.
    alert("Please enter a todo item to add it to the list");
  }
}

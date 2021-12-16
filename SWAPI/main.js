document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("search-form");
  const parentFormSelect = document.getElementById("slideshow");
  if (parentFormSelect.addEventListener) {
    parentFormSelect.addEventListener("click", handler, false);
  } else if (parentFormSelect.attachEvent) {
    parentFormSelect.attachEvent("onclick", handler);
  }
  function handler(e) {
    if (e.target.type == "submit") {
      e.preventDefault();
      const searchString = document.getElementById("search-bar").value;
      if (searchString == "") {
        alert("Please Enter a Search String");
      } else {
        //   loadQuestion(searchString);
        let keywords = findKeywords(searchString);
        if (keywords == "homeworld") {
          let local = localStorage.getItem("local");
          let localJSON = JSON.parse(local);
          let homeworld = localJSON[0].result.properties["homeworld"];
          console.log(homeworld);
          async function test() {
            const test = await fetchHomeworld(homeworld);
            console.log("final output:" + test);
            loadHomeworld(test);
          }
          test();
        } else {
          loadHomeworld("I don't understand");
        }

        // loadHomeworld();
      }
    }
  }
  //   console.log(myForm);
  //   myForm.addEventListener("submit", function (e) {
  //     // event listener code goes here
  //     e.preventDefault();
  //   });
});

function findKeywords(searchString) {
  var keywords = ["homeworld"];
  var results = [];
  for (var i = 0; i < keywords.length; i++) {
    if (new RegExp("\\b" + keywords[i] + "\\b", "i").test(searchString)) {
      results.push(keywords[i]);
    }
  }
  return results;
}

async function start() {
  const response = await fetch(
    "https://www.swapi.tech/api/people?page=1&limit=90"
  );
  const data = await response.json();
  //   console.log(data);
  const data2 = data.results;
  const data3 = data.results;
  createNameList(data3);
  //   //   console.log(data2["Title"]);
  //   const pic = Object.values(data3)[0];
  //   console.log(Object.values(data3));
}
start();

function createNameList(nameData) {
  document.getElementById("nameList").innerHTML = `
    <select id="dropdown" onchange="loadNames(this.value)">
    <option>Choose Your Character</option>
    ${Object.values(nameData)
      .map(function eachKey(k) {
        return `<option>${k["name"]}</option>`;
      })
      .join("")}
  </select>
    `;
}

async function loadNames(name) {
  const dropdownIndex = document.getElementById("dropdown").selectedIndex;
  document.getElementById("movieTitle").innerHTML = ``;
  if (name != "Choose Your Character") {
    const response = await fetch(
      `https://www.swapi.tech/api/people/${dropdownIndex}`
    );
    const data = await response.json();
    const homeworld = data.result.properties["homeworld"];
    // const data3 = data.Search[dropdownIndex - 1];
    // const IMDB = data3["imdbID"];
    document.getElementById("slideshow").innerHTML = `
    <div class="d-flex row justify-content-center">
    <div class="col-4">
      <form id="search-form">
        <div class="input-group input-group-lg">
          <input
            class="form-control" id="search-bar"
            placeholder="Ask me a question..."
          />
          <button class="btn btn-primary input-group-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>   
  </div>`;
    saveToLocal(data);
    // fetchHomeworld(homeworld);
    // loadQuestion(IMDB);
  }
}

async function fetchHomeworld(homeworld) {
  const response = await fetch(homeworld);
  const data = await response.json();
  console.log("fetchHomeworld output=" + data.result.properties["name"]);
  return data.result.properties["name"];
}

function loadHomeworld(homeworld) {
  document.getElementById("movieTitle").innerHTML = `I am from ${homeworld}`;
  localStorage.clear();
}

function saveToLocal(charInfo) {
  let localJSON = localStorage.getItem("local");
  let local = JSON.parse(localJSON);
  if (local == null) {
    local = [];
    // console.log("Empty");
  }
  local.push(charInfo);
  localJSON = JSON.stringify(local);
  localStorage.setItem("local", localJSON);
}

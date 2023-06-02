
//create the refrence elements  elements:
//form tag
let form_tag = allHtmlElements("form");
form_tag.classList.add("row", "brewery-search");
//console.log(form_tag);

//main div 
let div_container = allHtmlElements("div");
div_container.setAttribute("class", "container");

//first div row(sub)
let div_row = allHtmlElements("div");
div_row.setAttribute("class", "row");

//div column 1
let div_col_md_3 = allHtmlElements("div");
div_col_md_3.setAttribute("class", "col-sm-12");

//title innerdiv(div_col_3)
let h2_tag = allHtmlElements("h2");
h2_tag.setAttribute("class", "form-title");
h2_tag.innerHTML = "Find Your Favourite Brewery Type";



//2nd column div
let div_col_md_9 = allHtmlElements("div");
div_col_md_9.setAttribute("class", "col-md-9");

//div_input(div_col_md_9)
let div_input_group = allHtmlElements("div");
div_input_group.setAttribute("class", "input-group");


//search input tag(div_input_group)
let input_tag = allHtmlElements("input");
input_tag.setAttribute("type", "search");
input_tag.setAttribute("id", "search-bar");
input_tag.setAttribute("class", "form-control");
input_tag.setAttribute("placeholder", "Enter your favourite Brewery Type 🍻");


//searchbutton(div_input_group)
let button_tag = allHtmlElements("button");
button_tag.setAttribute("type", "button");
button_tag.setAttribute("id", "search-btn");
button_tag.classList.add("btn", "btn-secondary");
button_tag.innerHTML = "Search  📝";


//eventlistener
button_tag.addEventListener("click", breweryData);


//div_col_md_8(div_row)3rdcolumn div
let div_col_md_8 =allHtmlElements("div");
div_col_md_8.setAttribute("class","col-md-8");
//paragraph tag(div-col-md-8)
// let list_p_tag = allHtmlElements("p");
// list_p_tag.innerHTML = "Lists of Brewery Types =>=>=>";
let list_p_tag = allHtmlElements("p");
list_p_tag.innerHTML = "Lists of Brewery Types for ur refrence💨💨💨";

//list tag(div-col_md_8)
let list_tag = allHtmlElements("ul");
list_tag.setAttribute("id","list-group")


let list_1 = allHtmlElements("li");
list_1.setAttribute("id", "list-group-item");
list_1.innerHTML = "💭micro";

let list_2 = allHtmlElements("li");
list_2.setAttribute("id", "list-group-item");
list_2.innerHTML = "💭nano";

let list_3 = allHtmlElements("li");
list_3.setAttribute("id", "list-group-item");
list_3.innerHTML = "💭large";

let list_4 = allHtmlElements("li");
list_4.setAttribute("id", "list-group-item");
list_4.innerHTML = "💭brewpub";

let list_5 = allHtmlElements("li");
list_5.setAttribute("id", "list-group-item");
list_5.innerHTML = "💭planning";

let list_6 = allHtmlElements("li");
list_6.setAttribute("id", "list-group-item");
list_6.innerHTML = "💭regional";

let list_7 = allHtmlElements("li");
list_7.setAttribute("id", "list-group-item");
list_7.innerHTML = "💭bar";

let list_8 = allHtmlElements("li");
list_8.setAttribute("id", "list-group-item");
list_8.innerHTML = "💭closed";
// breaktag

let br_tag = allHtmlElements("br");

//2nd main div
let div_container_fluid = allHtmlElements("div");
div_container_fluid.setAttribute("class", "container-fluid");
var card_row = allHtmlElements("div");
card_row.setAttribute("class", "row");
card_row.setAttribute("id", "card-3");

//create html elements
function allHtmlElements(tagname) {
  var createElemets = document.createElement(tagname);
  return createElemets;
}

//appending the html elements
div_col_md_3.append(h2_tag);

div_input_group.append(input_tag, button_tag);

div_col_md_9.append(div_input_group);

div_col_md_8.append(list_p_tag,list_tag)

div_row.append(div_col_md_3, div_col_md_9,div_col_md_8);

div_container.append(div_row);

div_container_fluid.append(card_row);

form_tag.append(div_container);
// appending the list
list_tag.append(list_1,list_2,list_3,list_4,list_5,list_6,list_7,list_8);
document.body.append(form_tag, br_tag, div_container_fluid);



//fetch function
async function breweryData() {
  

  try {
    
    var search_input = document.getElementById("search-bar").value;

    //fetching api data

    var micro_DB = await fetch(
      `https://api.openbrewerydb.org/breweries?by_type=${search_input}&per_page=13`
    );
    let JsonFormat = await micro_DB.json();

    var div_row = document.getElementById("card-3");
    div_row.innerHTML = "";
    

    // get  the Brewery data by iteration of json

    for (var i = 1; i < JsonFormat.length; i++) {
      let brew_Type = JsonFormat[i].brewery_type;
      let brew_Name = JsonFormat[i].name;
      let brew_Street = JsonFormat[i].street;
      let brew_Ph_No = JsonFormat[i].phone;
      let brew_Url = JsonFormat[i].website_url;
      

      //micro
      if (search_input === "micro") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
          <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }

      //nano-small
      if (search_input === "nano") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }

      //brewpub

      if (search_input === "brewpub") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }

      //regional
      if (search_input === "regional") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }

     //large brewery
      if (search_input === "large") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light ">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }

      //planning
      if (search_input === "planning") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }
      //bar
      if (search_input === "bar") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }

      //contract brewery
      if (search_input === "contract") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME: ${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }
      //closed
      if (search_input === "closed") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h6 class="card-title  badge-secondary card-head">NAME:${brew_Name}</h6>
          <ul class="list-group list-group-flush">
           <li class="list-group-item list-group-item-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="list-group-item list-group-item-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="list-group-item list-group-item-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>
          <div class="card-body">
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>
    </div>`;
      }
    } 
  } catch (error) {
    console.log(error);
  }
}

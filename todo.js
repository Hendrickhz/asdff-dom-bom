const addBtn = document.querySelector("#addBtn");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#ulList");
const doneList = document.querySelector("#doneList");

const createLi = (text) => {
  const li = document.createElement("li");
  const dynamicId = "check" + Date.now();
  li.className =
    "list-group-item border-dark d-flex justify-content-between align-items-center";
  li.innerHTML = `
  <div class=" form-check">
    <input class="form-check-input" type="checkbox" value="" id="${dynamicId}" onchange= "check(event)">
    <label class="form-check-label" for="${dynamicId}">
      ${text}
  </div>
  <div class="btn-group">
    <button class=" btn btn-sm btn-outline-dark" onclick="del(event)">
      <i class=" bi bi-trash3 pe-none"></i>
    </button>
    <button class=" btn btn-sm btn-outline-dark" onclick="edit(event)">
      <i class=" bi bi-pencil pe-none"></i>
    </button>
  </div>
  `;

  return li;
};

const check = (event) => {
  const text = event.target.nextElementSibling;
  text.classList.toggle("text-decoration-line-through");
  // doneListLength = ulList.querySelectorAll(" .text-decoration-line-through").length;
  // doneListLength = ulList.querySelectorAll("input[type=checkbox]:checked").length;
  // doneListLength = ulList.querySelectorAll(":checked").length;
  doneListCount();
};

const doneListCount = () => {
  const doneListLength = ulList.querySelectorAll(":checked").length;
  if (doneListLength) {
    doneList.innerText = "Done List :" + doneListLength;
  } else {
    doneList.innerText = null;
  }
};

const del = (event) => {
  if (confirm("Are you sure to delete")) {
    // event.target.parentElement.parentElement.remove();
    event.target.closest("li").remove();
    doneListCount();
    listCounter();
  }
};
const edit = (event) => {
  const currentElement =
    // event.target.parentElement.parentElement.childNodes[1].children[1];
    event.target.closest("li").querySelector(".form-check-label");
  // let newText = prompt("Enter new text to update",currentElement.innerText);
  let newText = prompt("Enter new text to update");
  currentElement.innerText = newText;
};

const btnClick = () => {
  // console.log(inputText.value);
  if (inputText.value.trim()) {
    ulList.append(createLi(inputText.value));
    inputText.value = null;
    listCounter();
  }
};

//create p with before
const p = document.createElement("p");
p.innerText = "Your List";
ulList.before(p);

//create list count with after
const listCount = document.createElement("p");
// listCount.innerText = 123;
listCount.classList.add("mt-3");
ulList.after(listCount);

const listCounter = () => {
  const total = ulList.children.length;
  if (total) {
    listCount.innerText = "Count : " + total;
  } else {
    listCount.innerText = null;
  }
};

addBtn.addEventListener("click", btnClick);
inputText.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    btnClick();
    listCounter();
  }
});

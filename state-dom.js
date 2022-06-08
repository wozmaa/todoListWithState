const list = document.getElementById("list");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let arr = [
  {
    text: "опоздать",
    done: false,
  },
  {
    text: "выслушать, что гарантия сгорела",
    done: false,
  },
  {
    text: "смириться",
    done: false,
  },
  {
    text: "пойти на обед",
    done: false,
  },
  {
    text: "стать хокаге",
    done: false,
  },
];

const render = (arrObj) => {
  list.innerHTML = "";
  for (let i = 0; i < arrObj.length; i++) {
    const block = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = arrObj[i].text;
    // list.append(div);
    const checkInput = document.createElement("input");
    const btn1 = document.createElement("button");
    btn1.textContent = "x";

    btn1.addEventListener("click", () => {
      remove(i);
    });

    checkInput.addEventListener("change", (e) => {
      checkTodo(i);
    });

    checkInput.classList.add("item");
    checkInput.type = "checkbox";


    checkInput.checked = arrObj[i].done;


    checkInput.style.width = "20px";
    checkInput.style.height = "20px";

    block.append(checkInput, p, btn1);
    block.style.display = "flex";
    block.classList.add("blockDiv")
    list.append(block);
  }
};

const remove = (index) => {
  arr.splice(index, 1);
  render(arr);
};

const checkTodo = (index) => {
  arr[index].done = !arr[index].done;
  render(arr);
};

const addTodo = (text) => {
  arr.push({
    text: text,
    done: false,
  });
  render(arr);
};

btn.addEventListener("click", () => {
  if (input.value !== "") {
    addTodo(input.value);
    input.value = "";
  }
});

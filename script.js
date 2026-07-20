// ===============================
// EMOJI DATA
// ===============================

const emojis = [

  // 😀 Smileys
  { emoji:"😀", name:"grinning face", category:"smileys"},
  { emoji:"😁", name:"beaming face", category:"smileys"},
  { emoji:"😂", name:"face with tears of joy", category:"smileys"},
  { emoji:"🤣", name:"rolling on the floor laughing", category:"smileys"},
  { emoji:"😃", name:"smiling face", category:"smileys"},
  { emoji:"😄", name:"grinning face with smiling eyes", category:"smileys"},
  { emoji:"😅", name:"grinning face with sweat", category:"smileys"},
  { emoji:"😊", name:"smiling face with smiling eyes", category:"smileys"},
  { emoji:"😍", name:"heart eyes", category:"smileys"},
  { emoji:"🥰", name:"smiling face with hearts", category:"smileys"},
  { emoji:"😘", name:"kiss face", category:"smileys"},
  { emoji:"😎", name:"cool face", category:"smileys"},
  { emoji:"🤩", name:"star struck", category:"smileys"},
  { emoji:"🥳", name:"party face", category:"smileys"},
  { emoji:"🤔", name:"thinking face", category:"smileys"},
  { emoji:"🤯", name:"mind blown", category:"smileys"},
  { emoji:"😭", name:"crying face", category:"smileys"},
  { emoji:"😡", name:"angry face", category:"smileys"},
  { emoji:"😱", name:"screaming face", category:"smileys"},
  { emoji:"🥶", name:"cold face", category:"smileys"},

  // 🐶 Animals
  { emoji:"🐶", name:"dog", category:"animals"},
  { emoji:"🐱", name:"cat", category:"animals"},
  { emoji:"🐭", name:"mouse", category:"animals"},
  { emoji:"🐹", name:"hamster", category:"animals"},
  { emoji:"🐰", name:"rabbit", category:"animals"},
  { emoji:"🦊", name:"fox", category:"animals"},
  { emoji:"🐻", name:"bear", category:"animals"},
  { emoji:"🐼", name:"panda", category:"animals"},
  { emoji:"🦁", name:"lion", category:"animals"},
  { emoji:"🐯", name:"tiger", category:"animals"},
  { emoji:"🐮", name:"cow", category:"animals"},
  { emoji:"🐷", name:"pig", category:"animals"},
  { emoji:"🐸", name:"frog", category:"animals"},
  { emoji:"🐵", name:"monkey", category:"animals"},
  { emoji:"🐧", name:"penguin", category:"animals"},
  { emoji:"🦅", name:"eagle", category:"animals"},
  { emoji:"🦄", name:"unicorn", category:"animals"},
  { emoji:"🐬", name:"dolphin", category:"animals"},
  { emoji:"🦈", name:"shark", category:"animals"},
  { emoji:"🐘", name:"elephant", category:"animals"},

  // 🍔 Food
  { emoji:"🍕", name:"pizza", category:"food"},
  { emoji:"🍔", name:"burger", category:"food"},
  { emoji:"🍟", name:"fries", category:"food"},
  { emoji:"🌭", name:"hot dog", category:"food"},
  { emoji:"🌮", name:"taco", category:"food"},
  { emoji:"🍣", name:"sushi", category:"food"},
  { emoji:"🍩", name:"donut", category:"food"},
  { emoji:"🍪", name:"cookie", category:"food"},
  { emoji:"🍰", name:"cake", category:"food"},
  { emoji:"🍎", name:"apple", category:"food"},
  { emoji:"🍌", name:"banana", category:"food"},
  { emoji:"🍇", name:"grapes", category:"food"},
  { emoji:"🍉", name:"watermelon", category:"food"},
  { emoji:"🥭", name:"mango", category:"food"},
  { emoji:"☕", name:"coffee", category:"food"},
  { emoji:"🍺", name:"beer", category:"food"},

  // ✈️ Travel
  { emoji:"✈️", name:"airplane", category:"travel"},
  { emoji:"🚗", name:"car", category:"travel"},
  { emoji:"🏍️", name:"motorcycle", category:"travel"},
  { emoji:"🚲", name:"bicycle", category:"travel"},
  { emoji:"🚀", name:"rocket", category:"travel"},
  { emoji:"🚢", name:"ship", category:"travel"},
  { emoji:"🚁", name:"helicopter", category:"travel"},
  { emoji:"🚆", name:"train", category:"travel"},
  { emoji:"⛵", name:"boat", category:"travel"},
  { emoji:"🗺️", name:"map", category:"travel"},

  // ⚽ Sports
  { emoji:"⚽", name:"football", category:"sports"},
  { emoji:"🏀", name:"basketball", category:"sports"},
  { emoji:"🏈", name:"american football", category:"sports"},
  { emoji:"⚾", name:"baseball", category:"sports"},
  { emoji:"🎾", name:"tennis", category:"sports"},
  { emoji:"🏏", name:"cricket", category:"sports"},
  { emoji:"🏸", name:"badminton", category:"sports"},
  { emoji:"🥊", name:"boxing", category:"sports"},
  { emoji:"🏊", name:"swimming", category:"sports"},
  { emoji:"🏆", name:"trophy", category:"sports"},

  // 💻 Objects
  { emoji:"💻", name:"laptop", category:"objects"},
  { emoji:"📱", name:"mobile phone", category:"objects"},
  { emoji:"⌚", name:"watch", category:"objects"},
  { emoji:"⌨️", name:"keyboard", category:"objects"},
  { emoji:"🖱️", name:"mouse", category:"objects"},
  { emoji:"🖥️", name:"desktop computer", category:"objects"},
  { emoji:"🎧", name:"headphones", category:"objects"},
  { emoji:"📷", name:"camera", category:"objects"},
  { emoji:"💡", name:"light bulb", category:"objects"},
  { emoji:"🔑", name:"key", category:"objects"},

  // ❤️ Hearts
  { emoji:"❤️", name:"red heart", category:"hearts"},
  { emoji:"🩷", name:"pink heart", category:"hearts"},
  { emoji:"🧡", name:"orange heart", category:"hearts"},
  { emoji:"💛", name:"yellow heart", category:"hearts"},
  { emoji:"💚", name:"green heart", category:"hearts"},
  { emoji:"💙", name:"blue heart", category:"hearts"},
  { emoji:"💜", name:"purple heart", category:"hearts"},
  { emoji:"🖤", name:"black heart", category:"hearts"},
  { emoji:"🤍", name:"white heart", category:"hearts"},
  { emoji:"🤎", name:"brown heart", category:"hearts"}

];

// ===============================
// ELEMENTS
// ===============================

const searchInput = document.getElementById("searchInput");
const emojiContainer = document.getElementById("emojiContainer");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");
const categoryButtons = document.querySelectorAll(".category");

let currentCategory = "all";

// ===============================
// RENDER EMOJIS
// ===============================

function renderEmojis(list) {

    emojiContainer.innerHTML = "";

    resultCount.textContent = `${list.length} Emojis Found`;

    if(list.length === 0){
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    list.forEach(item => {

        const card = document.createElement("div");
        card.className = "emoji-card";

        card.innerHTML = `
            <div class="emoji">${item.emoji}</div>
            <div class="name">${item.name}</div>
        `;

        card.addEventListener("click",()=>copyEmoji(item.emoji));

        emojiContainer.appendChild(card);

    });

}

// ===============================
// SEARCH
// ===============================

searchInput.addEventListener("input", filterEmojis);

function filterEmojis(){

    const keyword = searchInput.value.toLowerCase();

    const filtered = emojis.filter(item=>{

        const matchName = item.name.includes(keyword);

        const matchCategory =
            currentCategory === "all" ||
            item.category === currentCategory;

        return matchName && matchCategory;

    });

    renderEmojis(filtered);

}

// ===============================
// CATEGORY
// ===============================

categoryButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        currentCategory = button.dataset.category;

        filterEmojis();

    });

});

// ===============================
// COPY EMOJI
// ===============================

function copyEmoji(emoji){

    navigator.clipboard.writeText(emoji);

    toast.classList.add("show");

    setTimeout(()=>{
        toast.classList.remove("show");
    },1800);

}

// ===============================
// INITIAL LOAD
// ===============================

renderEmojis(emojis);

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const themeText = themeToggle.querySelector("span");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeIcon.className = "fa-solid fa-sun";
    themeText.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeIcon.className = "fa-solid fa-sun";
        themeText.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");

    } else {

        themeIcon.className = "fa-solid fa-moon";
        themeText.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");

    }

});
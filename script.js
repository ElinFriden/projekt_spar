const products = [
  {
    image: [
      "images/Media/Desktop storbilder/Desktop storbild glajjor röd.png",
      "images/Media/Desktop storbilder/Desktop storbild glajjor orange.png",
    ],
    colors: ["#FF5200", "#E8FF75"],
    title: "Glasögon",
    sizes: "onesize",
    prize: "799",
    text: "Solglasögon med en omslutande design och tonad lins. Den breda skärmen ger god täckning och UV-skydd skyddar ögonen mot solens strålar. ",
  },
  {
    image: [
      "images/Media/Desktop storbilder/Desktop storbild jacka grön.png",
      "images/Media/Desktop storbilder/Desktop storbild jacka röd.png",
      "images/Media/Desktop storbilder/Desktop storbild jacka svart.png",
    ],
    colors: ["#B5B8A6", "#FF5200", "#1D1C1A"],
    title: "Jacka",
    sizes: "34, 36, 38, 40, 42",
    prize: "1399",
    text: "En bekväm och funktionell jacka som passar lika bra på cykeln som till vardags. Tillverkad i ett andningsbart material med fokus på komfort och rörelsefrihet.",
  },
  {
    image: [
      "images/Media/Desktop storbilder/Desktop storbild hjälm silver.png",
      "images/Media/Desktop storbilder/Desktop storbild hjälm gul.png",
      "images/Media/Desktop storbilder/Desktop storbild hjälm orange.png",
    ],
    colors: ["#B5B8A6", "#E8FF75", "#FF5200"],
    title: "Hjälm",
    sizes: "S, M, L, XL",
    prize: "1299",
    text: "Hjälm med ventilationsöppningar som skapar luftgenomströmning och hjälper till att transportera bort värme under användning.",
  },
  {
    image: ["images/Media/Desktop storbilder/Desktop storbild cykeldator.png"],
    colors: ["#1D1C1A"],
    title: "Kartan",
    sizes: "14 x 16 cm",
    prize: "2599",
    text: "En cykeldator som samlar viktig information direkt på styret. Håll koll på hastighet, navigering och rutt i realtid. ",
  },
  {
    image: [
      "images/Media/Desktop storbilder/Desktop storbild keps röd.png",
      "images/Media/Desktop storbilder/Desktop storbild keps blå.png",
      "images/Media/Desktop storbilder/Desktop storbild keps grön.png",
    ],
    colors: ["#FF5200", "#7EA1A3", "#B5B8A6"],
    title: "Keps",
    sizes: "One size",
    prize: "349",
    text: "Keps med vinklad skärm, utformad för att bäras bekvämt under cykelhjälmen. Ett funktionellt komplement till hjälmen med ett extra skydd mot solen.",
  },
];

const items = document.querySelectorAll(".carouselItem");
const card = document.querySelector(".productCard");
const buttons = document.querySelectorAll(".btn");

let currentIndex = null;
let buttonIndex = null;

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (currentIndex === index) {
      card.classList.remove("open");
      currentIndex = null;
      return;
    }
    const p = products[index];

    document.querySelector(".productImg").src = p.image[0];
    document.querySelector(".productTitle").textContent = p.title;
    document.querySelector(".productSizes").textContent = "Storlek: " + p.sizes;
    document.querySelector(".productPrizes").textContent = p.prize + "kr";
    document.querySelector(".productText").textContent = p.text;

    buttons.forEach((button, i) => {
      if (p.colors[i]) {
        button.style.display = "";
        button.style.backgroundColor = p.colors[i];
      } else {
        button.style.display = "none";
      }
    });

    card.classList.add("open");
    currentIndex = index;
  });
});

buttons.forEach((button, buttonIndex) => {
  button.addEventListener("click", () => {
    const p = products[currentIndex];
    document.querySelector(".productImg").src = p.image[buttonIndex];
  });
});

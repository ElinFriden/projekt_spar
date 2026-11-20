const products = [
  {
    image: "images/Bilder för webben/Cykeldator/Cykeldator_45grader.png",
    title: "Cykeldator",
    sizes: "36, 37, 38, 39, 40",
    colors: ["#bdbdbd", "#eaff80", "#f0602d", "#86a0a4", "#b5b8a8"],
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    image: "images/Bilder för webben/Jacka_Black/Jacka_black_45.png",
    title: "Jacka",
    sizes: "S, M, L, XL",
    colors: ["#5b6652", "#1d1d1b"],
    text: "Lorem ipsum dolor sit amet consectetur..",
  },
  {
    image: "images/Bilder för webben/Jacka_Green/Jacka_green_front.png",
    title: "Jacka",
    sizes: "One size",
    colors: ["#f0602d", "#86a0a4"],
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const items = document.querySelectorAll(".carouselItem");
const card = document.querySelector(".productCard");

let currentIndex = null;

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (currentIndex === index) {
      card.classList.remove("open");
      currentIndex = null;
      return;
    }
    const p = products[index];

    document.querySelector(".productImg").src = p.image;
    document.querySelector(".productTitle").textContent = p.title;
    document.querySelector(".productSizes").textContent = "Storlek: " + p.sizes;
    document.querySelector(".productText").textContent = p.text;

    card.classList.add("open");
    currentIndex = index;
  });
});

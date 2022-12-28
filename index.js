// Task 1
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "Saurabh Singh Negi"
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I am passionate about building products that make a difference in real world"

// Task 2
const arr = [];
let product = document.querySelectorAll(".as-imagegrid-item-title");
product.forEach((element) => {
    let res = element.innerText.replace("\nSupport","")
    arr.push(res)
})
console.log(arr)
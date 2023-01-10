# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./images/Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./images/Pic2.png)

### Solution

![Result](./result/task1.png)

### Code
```javascript
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "Saurabh Singh Negi"
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I am passionate about building products that make a difference in real world"
```

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./images/Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Solution

![Result](./result/task2.png)

### Code

```javascript
const arr = [];
let product = document.querySelectorAll(".as-imagegrid-item-title");
product.forEach((element) => {
    let res = element.innerText.replace("\nSupport","")
    arr.push(res)
})
console.log(arr)
```

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./images/Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./images/Pic5.png)

### Solution

![Result](./result/task3.png)

### Code
```javascript
const faq = document.createElement("h3");
const section = document.createElement("section");
section.classList.add("parent");
faq.innerText = "My New FAQ - added by Saurabh";
const container = document.querySelector(".accordion-homepage");
container.appendChild(section);
section.appendChild(faq);
```

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./images/Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./images/Pic7.png)

### Solution

![Result](./result/task4.png)

### Code
```javascript
const phone = document.querySelector(".one-tel-number");
phone.innerText = "1111111122";
```


5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./images/Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./images/Pic9.png)

### Solution

![Result](./result/task5.png)

### Code
```javascript
const btn = document.querySelector(".diwali-deals-product-sale-btn");
btn.innerText = "Check out";
```

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./images/Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./images/Pic11.png)

### Solution

![Result](./result/task6.png)

### Code
```javascript
const search = document.querySelector(".searchinput___19uW0");
search.addEventListener("mouseover", () => {
    search.style.backgroundColor = "red";
})
const search_out = document.querySelector(".searchinput___19uW0");
search.addEventListener("mouseout", () => {
    search.style.backgroundColor = "white";
})
```

7. Webiste Name: [MDN Web Docs](https://developer.mo zilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./images/Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./images/Pic13.png)

### Solution

![Result](./result/task7.png)

### Code
```javascript
const inp = document.querySelector("#hp-search-input");
inp.value = "css";

const btn = document.querySelector("#hp-search-form");
btn.submit();
```

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./images/Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./images/Pic15.png)

### Solution

![Result](./result/task8.png)

### Code
```javascript
const items = document.getElementById("SIvCob");
let langArr = items.innerText;
langArr = langArr.split(" ");

for(let i=3 ; i<langArr.length; i++) {
    if(i%2 != 0) {
        langArr.splice(i, 1);
    }
}
langArr = langArr.join(" ");
items.innerText = langArr;
```

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./images/Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

### Output

![Output](./images/Pic17.png)

### Solution

![Result](./result/task9.png)

### Code
```javascript
const text = document.querySelector("h1.text-color-white");
text.style.color = "#FF4D4D"
text.style.fontFamily = 'monospace'
```

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./images/Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./images/Pic19.png)

### Solution

![Result](./result/task10.png)

### Code
```javascript
const text = document.querySelector(".btn-cta-big.btn-block.signup-btn.btn-cta.btn.btn-default .login-btn-text");
console.log(text.innerText);
text.addEventListener("mouseover", () => {
    text.style.backgroundColor = "red";
})
text.addEventListener("mouseout", () => {
    text.style.backgroundColor = "#FFB439"
})
```

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./images/Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./images/Pic21.png)

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./images/Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

![Output](./images/Pic23.png)

### Solution

![Result](./result/task12.png)

### Code
```javascript
const container = document.querySelector(".js-repos-container a");
container.style.backgroundColor = "blue"
container.style.color = "white"
container.innerText = "Create a new repository"
```

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./images/Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

### Output

![Output](./images/Pic25.png)

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./images/Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

### Output

![Output](./images/Pic27.png)

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./images/Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

### Output

![Output](./images/Pic29.png)

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./images/Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

### Output

![Output](./images/Pic31.png)

17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./images/Pic33.png)

### Tasks

     change the button text To current Date.

### Output

![Output](./images/Pic32.png)

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./images/Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

![Output](./images/Pic35.png)

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./images/Pic36.png)

### Tasks

    extract the canon logo

### Output

![Output](./images/Pic37.png)

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./images/Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

![Output](./images/Pic39.png)

import "./styles.css";
import logo from "./assets/image.svg";

const app = document.getElementById("app");
app.innerHTML = `
  <section class="container">
    <h1>Webpack: Hashing, Fonts, Images, CSS, Externals</h1>
    <img src="${logo}" alt="Logo" class="logo" />
    <p>Тут демонструється локальне підключення шрифтів та оптимізація бандлу.</p>
    <p id="result"></p>
  </section>
`;

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
const message = `Сума чисел ${numbers.join(", ")} = ${sum}`;

document.getElementById("result").textContent = message;

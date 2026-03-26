(() => {
  "use strict";
  document.getElementById("app").innerHTML =
    '\n  <section class="container">\n    <h1>Webpack: Hashing, Fonts, Images, CSS, Externals</h1>\n    <img src="images/image.5e37401e.svg" alt="Logo" class="logo" />\n    <p>Тут демонструється локальне підключення шрифтів та оптимізація бандлу.</p>\n    <p id="result"></p>\n  </section>\n';
  const e = [1, 2, 3, 4, 5],
    n = _.sum(e),
    t = `Сума чисел ${e.join(", ")} = ${n}`;
  document.getElementById("result").textContent = t;
})();

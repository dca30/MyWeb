const target = document.getElementById("elemento");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    startNumberAnimation();
  }
  clearInterval(it);
  resetRandomDiv();
});

observer.observe(target);

let it;

const startNumberAnimation = () => {
  $(document).ready(function () {
    const randomnbr = $(".nbr");
    const timer = 30;
    let data = 0;
    let index;
    let change;
    const letters = [
      "d",
      "i",
      "e",
      "g",
      "o",
      "c",
      "a",
      "l",
      "v",
      "o",
      "a",
      "l",
      "e",
      "g",
      "r",
      "e",
    ];

    setChangeAttribute(randomnbr, change);

    function random() {
      return Math.round(Math.random() * 9);
    }
    function select() {
      return Math.round(Math.random() * randomnbr.length + 1);
    }
    function value() {
      setRandomNumber(randomnbr, select, random, data);
      data++;

      replaceNumbersWithLetters(randomnbr, letters, index);
    }
    it = setInterval(value, timer);
  });
};

const setChangeAttribute = (elements, change) => {
  elements.each(function () {
    change = Math.round(Math.random() * 100);
    $(this).attr("data-change", change);
  });
};

const setRandomNumber = (elements, selectFunction, randomFunction, data) => {
  const selectedElement = elements.eq(selectFunction() - 1);
  selectedElement.html("" + randomFunction() + "");
  selectedElement.attr("data-number", data);
};

const replaceNumbersWithLetters = (elements, letters, index) => {
  elements.each(function () {
    if (
      parseInt($(this).attr("data-number")) >
      parseInt($(this).attr("data-change"))
    ) {
      index = $(".ltr").index(this);
      const letter = letters[index];
      const html = letter === " " ? "<br/>" : letter;
      $(this).html(letters[index]);
      $(this).removeClass("nbr");
    }
  });
};

const resetRandomDiv = () => {
  const randomDiv = document.querySelector(".random");
  randomDiv.innerHTML = `<span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <br/>                        
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <br/>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>
                        <span class="nbr ltr h2">0</span>`;
};

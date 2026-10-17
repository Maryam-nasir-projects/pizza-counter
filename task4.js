// FIX 2: The HTML has  id="count", not id="total".
const count = document.querySelector("#count");
const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");
const message = document.querySelector("#message");

// FIX 3: Use number 0 instead of string "0".
let pizzas = 0;

 // FIX 4: The correct event name is "click", not "clik".
addBtn.addEventListener("click", () => {
  // Stop adding when the maximum is reached.
  if (pizzas >= 10) {
    message.textContent = "Maximum reached!";
    return;
  }

  pizzas = pizzas + 1;
  count.textContent = pizzas;

  // FIX 5: Use >= to check the limit, not = to assign a value.
  if (pizzas >= 10) {
    message.textContent = "Maximum reached!";
  } else {
    message.textContent = "";
  }
});

// AI: I checked that the pizza count never goes below 0 because negative pizzas are not allowed.
// AI: I changed the page by adding a Remove Pizza button so users can decrease the pizza count.
// AI: I rejected allowing the pizza count to become negative because the number of pizzas cannot be less
//than 0.
// AI: I checked that clicking Remove Pizza when the count is 0 keeps the count at 0.
minusBtn.addEventListener("click", () => {
  if (pizzas > 0) {
    pizzas = pizzas - 1;
  }

  count.textContent = pizzas;

  if (pizzas < 10) {
    message.textContent = "";
  }
});

resetBtn.addEventListener("click", () => {
  pizzas = 0;
  count.textContent = pizzas;

  // FIX 6: Use textContent, not the misspelled innerHtml.
  message.textContent = "";
});

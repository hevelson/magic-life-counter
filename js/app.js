if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./sw.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  });
}

const changePlayerLife = (player, operation, amount) => {
  amount = parseInt(amount);
  let playerLifeInput = document.getElementById(`player-${player}-life`);
  const life = parseInt(playerLifeInput.value);
  if (operation === "plus") {
    playerLifeInput.value = life + amount;
  } else {
    playerLifeInput.value = life - amount;
  }
}

const btnPlusLife = document.querySelectorAll('.update-life');

for (const button of btnPlusLife) {
  button.addEventListener('click', function() {
    const { player, operation, amount } = button.dataset;
    changePlayerLife(player, operation, amount);
  });
}

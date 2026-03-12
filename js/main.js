console.log("Garden Design Planner Loaded");


/* ---------- Section Buttons ---------- */

const foodBtn = document.getElementById("foodSectionBtn");
const flowerBtn = document.getElementById("flowerSectionBtn");
const fenceBtn = document.getElementById("fenceSectionBtn");


/* ---------- Navigation Handlers ---------- */

if (foodBtn) {
  foodBtn.addEventListener("click", () => {
    alert("Food Garden section coming next.");
  });
}

if (flowerBtn) {
  flowerBtn.addEventListener("click", () => {
    alert("Flower Garden section coming next.");
  });
}

if (fenceBtn) {
  fenceBtn.addEventListener("click", () => {
    alert("Fencing section coming next.");
  });
}


/* ---------- Garden Container ---------- */

const gardenContainer = document.getElementById("gardenContainer");


function displaySavedGarden() {

  const savedGarden = JSON.parse(localStorage.getItem("gardenPlan")) || [];

  if (savedGarden.length === 0) {
    gardenContainer.innerHTML = "<p>No plants saved yet.</p>";
    return;
  }

  gardenContainer.innerHTML = "";

  savedGarden.forEach(plant => {

    const plantCard = document.createElement("div");

    plantCard.innerHTML = `
      <strong>${plant.name}</strong>
      <p>Water: ${plant.water}</p>
      <p>Sun: ${plant.sun}</p>
    `;

    gardenContainer.appendChild(plantCard);

  });

}


/* ---------- Initialize App ---------- */

displaySavedGarden();
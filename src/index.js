
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function populate() {
  const cardList = document.getElementById("cards")
  cardList.className = "cards"
  
  data.forEach((e) => {
    const card= document.createElement("li")
    card.className = "card"

    const title = document.createElement("h2")
    title.className = "card--title"
    title.textContent = e.name

    const img = document.createElement("img")
    img.className = "card--img"
    img.src = e.sprites.front_default

    const statsList = document.createElement("ul")
    statsList.className = "card--text"

    const stats = [
      `HP: ${e.stats[0].base_stat}`,
      `ATTACK: ${e.stats[1].base_stat}`,
      `DEFENSE: ${e.stats[2].base_stat}`,
      `SPECIAL-ATTACK: ${e.stats[3].base_stat}`,
      `SPECIAL-DEFENCE: ${e.stats[4].base_stat}`,
      `SPEED: ${e.stats[5].base_stat}`,

    ]

    stats.forEach(stat => {
      const statItem = document.createElement("li");
      statItem.textContent = stat;
      statsList.appendChild(statItem);
    });

    const gameappearences = document.createElement("ul");
    gameappearences.className = "card--appearence";
    const games = e.game_indices.map(a => a.version.name).join(", ");
    const gItem = document.createElement("li");
    gItem.textContent = `Appeared in: ${games}`;
    gameappearences.appendChild(gItem);


    card.appendChild(title)
    card.appendChild(img)
    card.appendChild(statsList)
    card.appendChild(gameappearences)

    cardList.appendChild(card)
  })
}

populate()

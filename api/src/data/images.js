const fs = require("fs");

const cardsData = fs.readFileSync("./src/data/cardsB.json");
const cards = JSON.parse(cardsData);

// const card = cards.commands[0];

// const imageUrl = `https://tabletopadmiral.com/static/legion/images/${card.Pack}/${card.Name}.png`
// console.log(imageUrl);

const getImages = () => {
    cards.commands.forEach((card, i) => {
        cards.commands[i].imageUrl = `https://tabletopadmiral.com/static/legion/images/${card.Pack}/${card.Name}.png`
    })
    cards.units.forEach((card, i) => {
        cards.units[i].imageUrl = `https://tabletopadmiral.com/static/legion/images/${card.Pack}/${card.Name}.png`
    })
    cards.upgrades.forEach((card, i) => {
        cards.upgrades[i].imageUrl = `https://tabletopadmiral.com/static/legion/images/${card.Pack}/${card.Name}.png`
    })
}

getImages();
fs.writeFileSync("src/data/cardsB.json", JSON.stringify(cards));

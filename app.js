const images = [
  '/images/img1.jpg','/images/img2.jpg','/images/img3.jpg',
  '/images/img4.jpg','/images/img5.jpg','/images/img6.jpg'
];

// Prewritten fallback interpretations
const fallback = {
  '/images/img1.jpg': {
    interpretation: "This Warli circle depicts unity and community life.",
    symbols: ["Circle: harmony", "Figures: togetherness", "Tree: nature"],
    place: "Living room — reminds family of unity"
  },
  '/images/img2.jpg': {
    interpretation: "This Madhubani painting of Lord Krishna highlights divine love, joy, and harmony in life.",
    symbols: ["Flute: music of the soul and spiritual connection", "Peacock feathers: beauty and divine grace", "Lotus motifs: purity and devotion"],
    place: "Pooja room or living room — to invite peace, devotion, and positive vibrations"
  },
  '/images/img3.jpg': {
    interpretation: "This weaving scene captures the tradition of basketry and mat-making in rural India, where craft is deeply tied to daily life and community identity.",
    symbols: ["Basket: livelihood", "Hands: skill and heritage", "Colors: cultural vibrancy"],
    place: "Study room — as a reminder of patience and handcraft"
  },
  '/images/img4.jpg': {
    interpretation: "A Warli wall mural depicting scenes of village life, rituals, and cosmic cycles, symbolizing the community’s harmony with nature.",
    symbols: ["Circles: continuity of life", "Figures: collective living", "Animals: balance with nature"],
    place: "Hallway — invites visitors into the story of tradition"
  },
  '/images/img5.jpg': {
    interpretation: "This Gond art celebrates animals under a sacred tree, reflecting coexistence and the interconnection of all life forms.",
    symbols: ["Tree: shelter and sacredness", "Deer: grace", "Birds: freedom and vitality"],
    place: "Bedroom — adds peace and a sense of nature’s embrace"
  },
  '/images/img6.jpg': {
    interpretation: "These Dhokra brass elephants are traditional tribal metalwork, symbolizing strength, wisdom, and prosperity.",
    symbols: ["Elephants: guardianship", "Brass: endurance", "Family grouping: protection and lineage"],
    place: "Entrance or foyer — for strength and auspicious welcome"
  }
};

const gallery = document.getElementById('gallery');

// Build cards
images.forEach((src, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${src}" alt="art ${i+1}" />
    <button data-src="${src}">Interpret</button>
    <div class="result" id="r${i}">—</div>
  `;
  gallery.appendChild(card);
});

// Button click shows fallback instantly
gallery.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const imgUrl = e.target.dataset.src;
  const resultEl = e.target.nextElementSibling;

  const json = fallback[imgUrl];
  resultEl.innerHTML = `
    <b>Interpretation:</b> ${json.interpretation}<br/>
    <b>Symbols:</b><ul>${json.symbols.map(s => `<li>${s}</li>`).join('')}</ul>
    <b>Place:</b> ${json.place}
  `;
});

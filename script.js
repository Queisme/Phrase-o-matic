function makePhrases() {
    const words1 = ['Blue sky thinking', '24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'think outside the box', 'win-win', 'drill down', 'actionable items', 'brain dump', 'core competencies', 'get on board', 'hearding cats', 'move the goalposts', 'make hay while the sun shines', 'park it', 'push the envelope', 'traction', 'trim the fat', 'white paper', 'silver bullet'];
    const words2 = ['circle-back', 'empowered', 'drink the kool-aid', 'value-added', 'oriented', 'deep dive', 'baked in', 'focused', 'give 110', 'aligned', 'balls in the air', 'break down the silos', 'bleeding edge', 'evangelist', 'ducks in a row', 'hard stop', 'headwinds', 'leverage', 'one-pager', 'over the wall', 'pain point', 'paradigm shift', 'reinvent the wheel', 'run up the flagpole'];
    const words3 = ['bring to the table', 'low-hanging fruit', 'process', 'solution', 'tipping-point', 'deliverable', 'strategy', 'vision', 'going forward', 'buy-in', 'ASAP', 'boil the ocean', 'ducks in a row', 'game changer', 'good-to-go', 'jump the shark', 'move the needle', 'ninja', 'resonate', 'skin in the game', 'synergy', 'touch base', 'throw under the bus'];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);

    const phrase = `${words1[rand1]} ${words2[rand2]} ${words3[rand3]}`;
    console.log(phrase);
};

makePhrases();
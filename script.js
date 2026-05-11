const productData = {
    food: {
      score: 68,
      summary: "Usually made from a base ingredient, flavoring, sweeteners or salt, preservatives, and texture helpers.",
      what: "A packaged food or drink designed for convenience, flavor, and shelf life.",
      watch: "Check sodium, added sugar, caffeine, artificial colors, and common allergens.",
      ingredients: [
        ["Base ingredients", "Corn, wheat, milk, water, or another main ingredient gives the product its body."],
        ["Flavoring", "Seasonings, extracts, acids, or spices create the recognizable taste."],
        ["Preservatives", "Help the product last longer before opening."],
        ["Color or texture helpers", "Make the product look and feel consistent."]
      ],
      notes: ["Watch sugar and sodium", "Check allergens", "Processed food signals"]
    },
  
    skin: {
      score: 82,
      summary: "Usually built from water, active ingredients, texture helpers, preservatives, and sometimes fragrance.",
      what: "A personal-care product made to cleanse, moisturize, treat, or protect skin.",
      watch: "Fragrance, strong acids, retinoids, and essential oils can irritate sensitive skin.",
      ingredients: [
        ["Base", "Water, oils, or silicones carry the rest of the formula."],
        ["Actives", "Ingredients like niacinamide, salicylic acid, or ceramides do the main job."],
        ["Emulsifiers", "Keep water and oil parts mixed together."],
        ["Preservatives", "Help stop bacteria and mold from growing in the bottle."]
      ],
      notes: ["Patch test first", "Watch fragrance", "Sensitive skin friendly depends on formula"]
    },
  
    cleaning: {
      score: 74,
      summary: "Usually contains surfactants, solvents, fragrance, preservatives, and sometimes disinfecting agents.",
      what: "A home product made to lift grease, dirt, stains, or germs from surfaces or fabrics.",
      watch: "Avoid mixing cleaners. Fragrance, bleach, ammonia, and strong acids can be irritating.",
      ingredients: [
        ["Surfactants", "Help loosen dirt and oil so they can be rinsed or wiped away."],
        ["Solvents", "Help dissolve grease or sticky residue."],
        ["Fragrance", "Adds scent, but can bother asthma, allergies, or sensitive skin."],
        ["Preservatives", "Keep the product stable while stored."]
      ],
      notes: ["Do not mix cleaners", "Ventilate the room", "Keep away from kids and pets"]
    }
  };
  
  const products = [
    {
      name: "CeraVe Foaming Cleanser",
      aliases: ["cerave", "cleanser", "face wash"],
      category: "skin",
      summary: "A gentle face wash usually built around water, mild cleansing agents, ceramides, niacinamide, and texture helpers.",
      what: "A cleanser made to remove oil and dirt without stripping the skin barrier.",
      watch: "May bother very dry or reactive skin if used too often.",
      score: 82,
      ingredients: [
        ["Mild cleansers", "Help lift oil and daily buildup from the skin."],
        ["Ceramides", "Support the skin barrier."],
        ["Niacinamide", "Can calm redness and support an even feel."]
      ],
      notes: ["Fragrance-free option", "Sensitive skin friendly", "Check for dryness"]
    },
  
    {
      name: "Takis Blue Heat",
      aliases: ["takis", "blue heat", "spicy chips"],
      category: "food",
      summary: "A salty, spicy snack usually made from corn masa, vegetable oil, seasoning acids, color, and flavor enhancers.",
      what: "A crunchy rolled chip built for strong flavor and shelf stability.",
      watch: "Often high in sodium and may include artificial colors, acidity regulators, and processed oils.",
      score: 61,
      ingredients: [
        ["Corn masa", "Creates the rolled chip structure."],
        ["Vegetable oil", "Adds crunch and richness."],
        ["Seasoning blend", "Usually brings salt, spice, acidity, and flavor boosters."],
        ["Colors", "Make the snack look bold and consistent."]
      ],
      notes: ["High sodium likely", "Artificial color possible", "Spicy acidity"]
    },
  
    {
      name: "Tide Pods Original",
      aliases: ["tide", "pods", "detergent", "laundry"],
      category: "cleaning",
      summary: "A laundry product usually made from cleaning surfactants, enzymes, water softeners, fragrance, and stabilizers.",
      what: "A cleaner designed to remove oils, stains, sweat, and odor from fabric.",
      watch: "Fragrance and concentrated detergent can irritate skin. Keep pods away from children.",
      score: 76,
      ingredients: [
        ["Surfactants", "Pull dirt and oil away from fabric fibers."],
        ["Enzymes", "Break down stains like food, sweat, and grass."],
        ["Builders", "Help the cleaner work better in hard water."],
        ["Fragrance", "Adds scent, but can bother sensitive skin."]
      ],
      notes: ["Concentrated formula", "Skin sensitivity possible", "Store safely"]
    },
  
    {
      name: "Red Bull Energy Drink",
      aliases: ["red bull", "energy drink", "caffeine"],
      category: "food",
      summary: "An energy drink commonly built around carbonated water, sugar or sweeteners, caffeine, taurine, B vitamins, and flavoring.",
      what: "A caffeinated drink made for a quick energy boost.",
      watch: "Watch caffeine, added sugar, and combining it with other stimulants.",
      score: 64,
      ingredients: [
        ["Caffeine", "Provides the main stimulant effect."],
        ["Sugar or sweeteners", "Adds sweetness and body."],
        ["Taurine", "A common energy-drink ingredient used for formula identity."],
        ["B vitamins", "Often included for energy-positioning, though they do not replace sleep or food."]
      ],
      notes: ["Contains caffeine", "Sugar can be high", "Avoid too late in day"]
    },
  
    {
      name: "Haagen-Dazs Vanilla Milk Chocolate Almond Bar",
      aliases: ["hagen", "haagen", "haagen dazs", "häagen-dazs", "ice cream bar", "vanilla chocolate almond"],
      category: "food",
      summary: "An ice cream bar commonly built around cream, milk, sugar, chocolate coating, almonds, stabilizers, and vanilla flavor.",
      what: "A frozen dessert bar with dairy ice cream covered in chocolate and almonds.",
      watch: "Contains dairy and tree nuts. It is also likely high in saturated fat and added sugar.",
      score: 70,
      ingredients: [
        ["Cream and milk", "Create the rich ice cream base."],
        ["Sugar", "Sweetens the ice cream and helps its texture stay smooth."],
        ["Chocolate coating", "Adds the hard shell around the bar."],
        ["Almonds", "Add crunch, flavor, and a tree-nut allergen."]
      ],
      notes: ["Contains dairy", "Contains tree nuts", "High sugar likely"]
    },
  
    {
      name: "Haagen-Dazs Vanilla Bean Ice Cream",
      aliases: ["hagen", "haagen", "haagen dazs", "häagen-dazs", "vanilla bean", "ice cream"],
      category: "food",
      summary: "A dairy ice cream usually made with cream, skim milk, cane sugar, egg yolks, and vanilla bean.",
      what: "A rich frozen dessert with a short dairy-based ingredient list.",
      watch: "Contains milk and egg. It can be high in saturated fat and added sugar.",
      score: 78,
      ingredients: [
        ["Cream", "Provides richness and the classic dense texture."],
        ["Milk", "Balances the dairy base."],
        ["Sugar", "Adds sweetness and helps control iciness."],
        ["Egg yolks", "Help thicken the ice cream and improve texture."]
      ],
      notes: ["Contains dairy", "Contains egg", "Simple ingredient list"]
    },
  
    {
      name: "Haagen-Dazs Dulce de Leche Ice Cream",
      aliases: ["hagen", "haagen", "haagen dazs", "häagen-dazs", "dulce de leche", "caramel ice cream"],
      category: "food",
      summary: "A caramel-style ice cream usually made with cream, milk, sugar, egg yolks, and sweetened milk caramel swirl.",
      what: "A rich dairy ice cream flavored with caramelized milk sweetness.",
      watch: "Contains milk and egg, and it is likely higher in added sugar than simpler flavors.",
      score: 72,
      ingredients: [
        ["Cream and milk", "Create the smooth dairy base."],
        ["Sugar", "Sweetens the ice cream and caramel elements."],
        ["Egg yolks", "Add body and a custard-like texture."],
        ["Dulce de leche swirl", "Adds caramel flavor from sweetened milk."]
      ],
      notes: ["Contains dairy", "Contains egg", "Caramel sugar boost"]
    },
  
    {
      name: "Haagen-Dazs Strawberry Ice Cream",
      aliases: ["hagen", "haagen", "haagen dazs", "häagen-dazs", "strawberry ice cream"],
      category: "food",
      summary: "A fruit ice cream usually made with cream, milk, sugar, strawberries, egg yolks, and fruit flavor support.",
      what: "A dairy frozen dessert with strawberry flavor and a creamy base.",
      watch: "Contains milk and egg. Fruit does not make it low-sugar, so check serving size.",
      score: 76,
      ingredients: [
        ["Cream and milk", "Create the rich ice cream texture."],
        ["Strawberries", "Provide fruit flavor and color."],
        ["Sugar", "Sweetens the base and helps keep it scoopable."],
        ["Egg yolks", "Help the texture feel smooth and dense."]
      ],
      notes: ["Contains dairy", "Contains egg", "Added sugar likely"]
    },
  
    {
      name: "The Ordinary Niacinamide 10% + Zinc 1%",
      aliases: ["ordinary", "niacinamide", "zinc serum"],
      category: "skin",
      summary: "A lightweight serum usually centered on niacinamide, zinc PCA, water, humectants, texture helpers, and preservatives.",
      what: "A skincare serum aimed at oiliness, uneven tone, and the look of blemishes.",
      watch: "Can sting or pill for some users, especially if layered with many other products.",
      score: 84,
      ingredients: [
        ["Niacinamide", "Supports a calmer, more even-looking skin barrier."],
        ["Zinc PCA", "Often used for oil-control positioning."],
        ["Humectants", "Help hold water in the formula and on skin."],
        ["Preservatives", "Keep the serum safe while stored."]
      ],
      notes: ["Patch test first", "Avoid over-layering", "Good for oily skin goals"]
    },
  
    {
      name: "Windex Original Glass Cleaner",
      aliases: ["windex", "glass cleaner", "window spray"],
      category: "cleaning",
      summary: "A glass cleaner commonly made with water, solvents, surfactants, fragrance, color, and ammonia-based cleaning chemistry.",
      what: "A spray cleaner made to cut fingerprints, haze, and light grime on glass.",
      watch: "Use ventilation and avoid mixing with bleach or other cleaners.",
      score: 72,
      ingredients: [
        ["Solvents", "Help dissolve smudges and evaporate quickly."],
        ["Surfactants", "Loosen dirt so it wipes away."],
        ["Fragrance and color", "Make the product smell and look recognizable."],
        ["Ammonia-based cleaner", "Can help with glass shine but may irritate lungs or eyes."]
      ],
      notes: ["Ventilate while using", "Do not mix cleaners", "Avoid eye contact"]
    }
  ];
  
  const form = document.querySelector("#product-form");
  const input = document.querySelector("#product-name");
  const suggestions = document.querySelector("#suggestions");
  const title = document.querySelector("#result-title");
  const score = document.querySelector("#score-number");
  const summary = document.querySelector("#summary");
  const whatItIs = document.querySelector("#what-it-is");
  const watchOuts = document.querySelector("#watch-outs");
  const list = document.querySelector("#ingredient-list");
  const notes = document.querySelector("#notes");
  
  function detectCategory(name) {
    const lower = normalizeText(name);
  
    if (/(cleaner|detergent|pods|soap|bleach|spray|tide|lysol|windex)/.test(lower)) {
      return "cleaning";
    }
  
    if (/(cleanser|lotion|cream|serum|shampoo|conditioner|sunscreen|cerave|dove|niacinamide)/.test(lower)) {
      return "skin";
    }
  
    return "food";
  }
  
  function normalizeText(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }
  
  function matchProduct(query) {
    const lower = normalizeText(query);
  
    return products.find((product) => {
      const searchable = normalizeText([product.name, ...product.aliases].join(" "));
      return searchable.includes(lower) || lower.includes(normalizeText(product.name));
    });
  }
  
  function getSuggestions(query) {
    const lower = normalizeText(query);
  
    if (!lower) {
      return products.slice(0, 4);
    }
  
    return products
      .filter((product) => {
        const searchable = normalizeText([product.name, ...product.aliases].join(" "));
        return searchable.includes(lower);
      })
      .slice(0, 5);
  }
  
  function renderSuggestions(matches) {
    suggestions.innerHTML = "";
    input.setAttribute("aria-expanded", matches.length ? "true" : "false");
    suggestions.classList.toggle("is-open", matches.length > 0);
  
    matches.forEach((product) => {
      const button = document.createElement("button");
      button.className = "suggestion-button";
      button.type = "button";
      button.setAttribute("role", "option");
      button.dataset.product = product.name;
  
      const name = document.createElement("span");
      name.className = "suggestion-name";
      name.textContent = product.name;
  
      const type = document.createElement("span");
      type.className = "suggestion-type";
      type.textContent = product.category === "cleaning" ? "home" : product.category;
  
      button.append(name, type);
      suggestions.append(button);
    });
  }
  
  function closeSuggestions() {
    suggestions.classList.remove("is-open");
    input.setAttribute("aria-expanded", "false");
  }
  
  function renderResult(result, query) {
    title.textContent = query;
    score.textContent = result.score;
    summary.textContent = result.summary;
    whatItIs.textContent = result.what;
    watchOuts.textContent = result.watch;
  
    list.innerHTML = "";
  
    result.ingredients.forEach(([name, description]) => {
      const item = document.createElement("li");
      const strong = document.createElement("strong");
  
      strong.textContent = `${name}:`;
      item.append(strong, ` ${description}`);
      list.append(item);
    });
  
    notes.innerHTML = "";
  
    result.notes.forEach((note) => {
      const chip = document.createElement("span");
      chip.textContent = note;
      notes.append(chip);
    });
  }
  
  function explainProduct(productName) {
    const query = productName.trim();
  
    if (!query) {
      return;
    }
  
    const exact = products.find((product) => normalizeText(product.name) === normalizeText(query));
    const matched = exact || matchProduct(query);
    const category = matched?.category || detectCategory(query);
    const fallback = productData[category];
    const result = matched || { ...fallback, category };
  
    input.value = matched?.name || query;
    renderResult(result, input.value);
    closeSuggestions();
  }
  
  input.addEventListener("input", () => {
    renderSuggestions(getSuggestions(input.value));
  });
  
  input.addEventListener("focus", () => {
    renderSuggestions(getSuggestions(input.value));
  });
  
  suggestions.addEventListener("click", (event) => {
    const button = event.target.closest(".suggestion-button");
  
    if (!button) {
      return;
    }
  
    explainProduct(button.dataset.product);
  });
  
  document.querySelector(".quick-picks").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-product]");
  
    if (!button) {
      return;
    }
  
    explainProduct(button.dataset.product);
  });
  
  document.addEventListener("click", (event) => {
    if (!form.contains(event.target)) {
      closeSuggestions();
    }
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    explainProduct(input.value);
  });
  
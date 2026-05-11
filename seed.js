import "dotenv/config";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "productplain";

if (!mongoUri) {
  throw new Error("Missing MONGODB_URI. Copy .env.example to .env and add your MongoDB connection string.");
}

const seedProducts = [
  {
    slug: "cerave-foaming-cleanser",
    name: "CeraVe Foaming Cleanser",
    brand: "CeraVe",
    aliases: ["cerave", "cleanser", "face wash"],
    category: "skin",
    popularity: 95,
    score: 82,
    summary: "A gentle face wash usually built around water, mild cleansing agents, ceramides, niacinamide, and texture helpers.",
    what: "A cleanser made to remove oil and dirt without stripping the skin barrier.",
    watch: "May bother very dry or reactive skin if used too often.",
    ingredients: [
      ["Mild cleansers", "Help lift oil and daily buildup from the skin."],
      ["Ceramides", "Support the skin barrier."],
      ["Niacinamide", "Can calm redness and support an even feel."]
    ],
    notes: ["Fragrance-free option", "Sensitive skin friendly", "Check for dryness"]
  },
  {
    slug: "takis-blue-heat",
    name: "Takis Blue Heat",
    brand: "Takis",
    aliases: ["takis", "blue heat", "spicy chips"],
    category: "food",
    popularity: 92,
    score: 61,
    summary: "A salty, spicy snack usually made from corn masa, vegetable oil, seasoning acids, color, and flavor enhancers.",
    what: "A crunchy rolled chip built for strong flavor and shelf stability.",
    watch: "Often high in sodium and may include artificial colors, acidity regulators, and processed oils.",
    ingredients: [
      ["Corn masa", "Creates the rolled chip structure."],
      ["Vegetable oil", "Adds crunch and richness."],
      ["Seasoning blend", "Usually brings salt, spice, acidity, and flavor boosters."],
      ["Colors", "Make the snack look bold and consistent."]
    ],
    notes: ["High sodium likely", "Artificial color possible", "Spicy acidity"]
  },
  {
    slug: "haagen-dazs-vanilla-bean-ice-cream",
    name: "Haagen-Dazs Vanilla Bean Ice Cream",
    brand: "Haagen-Dazs",
    aliases: ["hagen", "haagen", "haagen dazs", "häagen-dazs", "vanilla bean", "ice cream"],
    category: "food",
    popularity: 88,
    score: 78,
    summary: "A dairy ice cream usually made with cream, skim milk, cane sugar, egg yolks, and vanilla bean.",
    what: "A rich frozen dessert with a short dairy-based ingredient list.",
    watch: "Contains milk and egg. It can be high in saturated fat and added sugar.",
    ingredients: [
      ["Cream", "Provides richness and the classic dense texture."],
      ["Milk", "Balances the dairy base."],
      ["Sugar", "Adds sweetness and helps control iciness."],
      ["Egg yolks", "Help thicken the ice cream and improve texture."]
    ],
    notes: ["Contains dairy", "Contains egg", "Simple ingredient list"]
  }
];

const client = new MongoClient(mongoUri);
await client.connect();

const db = client.db(dbName);
const products = db.collection("products");

await products.createIndex({ name: "text", aliases: "text", brand: "text" });
await products.createIndex({ slug: 1 }, { unique: true });

for (const product of seedProducts) {
  await products.updateOne({ slug: product.slug }, { $set: product }, { upsert: true });
}

await client.close();

console.log(`Seeded ${seedProducts.length} ProductPlain products.`);
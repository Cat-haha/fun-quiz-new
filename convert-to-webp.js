const fs = require("fs");
const path = require("path");
const axios = require("axios");
const sharp = require("sharp");
const questions = require("./questions");

const BASE_DIR = "./webp";

const sections = [
  { name: "warmup", end: 19 },
  { name: "math", end: 34 },
  { name: "reading", end: 49 },
  { name: "brain-teasers", end: 63 },
  { name: "colors", end: 85 },
  { name: "geography", end: 107 },
  { name: "animals", end: Infinity },
];

function getSection(index) {
  const questionNumber = index + 1;
  return sections.find((s) => questionNumber <= s.end).name;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const downloaded = new Set();

async function downloadAndConvert(url, section) {
  if (!url || downloaded.has(url)) return;
  downloaded.add(url);

  const filename = path.basename(url).split(".")[0] + ".webp";
  const outputDir = path.join(BASE_DIR, section);
  const outputPath = path.join(outputDir, filename);

  ensureDir(outputDir);

  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });

    await sharp(response.data).webp({ quality: 80 }).toFile(outputPath);

    console.log(`✔ ${section}/${filename}`);
  } catch (err) {
    console.error("✖ Failed:", url);
  }
}

(async () => {
  ensureDir(BASE_DIR);

  for (let i = 0; i < questions.length; i++) {
    const section = getSection(i);
    const q = questions[i];

    await downloadAndConvert(q.image, section);
    await downloadAndConvert(q.feedbackImage, section);
    await downloadAndConvert(q.hintImage, section);
  }

  console.log("\n✅ All images converted and organized by section.");
})();

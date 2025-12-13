const fs = require("fs");
const path = require("path");
const axios = require("axios");
const sharp = require("sharp");

const questions = require("./questions");

const BASE_DIR = "webp";

const sections = [
  { name: "warmup", end: 19 },
  { name: "math", end: 34 },
  { name: "reading", end: 49 },
  { name: "brain-teasers", end: 63 },
  { name: "colors", end: 85 },
  { name: "geography", end: 107 },
  { name: "animals", end: Infinity },
];

function getSection(qNum) {
  return sections.find((s) => qNum <= s.end).name;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function convert(url, outputPath) {
  if (!url) return false;

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 15000,
    });

    await sharp(response.data, { animated: false })
      .webp({ quality: 80 })
      .toFile(outputPath);

    return true;
  } catch {
    return false;
  }
}

(async () => {
  ensureDir(BASE_DIR);

  const updatedQuestions = [];

  for (let i = 0; i < questions.length; i++) {
    const qNum = i + 1;
    const section = getSection(qNum);
    const q = { ...questions[i] };

    const sectionDir = path.join(BASE_DIR, section);
    ensureDir(sectionDir);

    async function handle(key, type) {
      if (!q[key]) return;

      const filename = `q${qNum}-${type}.webp`;
      const outputPath = path.join(sectionDir, filename);

      const success = await convert(q[key], outputPath);
      if (success) {
        q[key] = `${BASE_DIR}/${section}/${filename}`;
        console.log(`✔ q${qNum} ${type}`);
      } else {
        console.log(`✖ q${qNum} ${type}`);
      }
    }

    await handle("image", "image");
    await handle("feedbackImage", "feedback");
    await handle("hintImage", "hint");

    updatedQuestions.push(q);
  }

  const output = `window.questionsArray = ${JSON.stringify(
    updatedQuestions,
    null,
    2
  )};`;

  fs.writeFileSync("questions.local.js", output);

  console.log("\n✅ questions.local.js created with local WebP paths");
})();

import { LoremIpsum } from "lorem-ipsum";
import uuid from "uuid";

export default function handle(req, res) {
  res.json(contentsData);
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const contentsData = [];
for (let i = 0; i < 10; i++) {
  contentsData.push({
    id: uuid(),
    href: "http://ant.design",
    name: "นายชูพงศ์ ภู่ภมร",
    avatar: "00367183.jpg",
    description: "พปค.7",
    content: lorem.generateParagraphs(Math.floor(Math.random() * 3) + 1),
    liked: Math.floor(Math.random() * 100) + 1,
    comments: Math.floor(Math.random() * 10) + 1,
    createdAt: Math.floor(Math.random() * 60) + 1,
    view: Math.floor(Math.random() * 1000) + 1
  });
}

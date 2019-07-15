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

const topRankData = [
  {
    key: uuid(),
    avatar: "00367183.jpg",
    name: "นายชูพงศ์ ภู่ภมร",
    description: "พปค.7"
  },
  {
    key: uuid(),
    avatar: "01000062.jpg",
    name: "นายประจวบ ไกลถิ่น",
    description: "วศก.7"
  },
  {
    key: uuid(),
    avatar: "00242318.jpg",
    name: "นายกฤษณะ มีสมบูรณ์",
    description: "พฝอ.6"
  },
  {
    key: uuid(),
    avatar: "00277419.jpg",
    name: "นายกู้เกียรติ สุริยาวงษ์",
    description: "ผส.7"
  },
  {
    key: uuid(),
    avatar: "00333447.jpg",
    name: "น.ส.ลาวัลย์ สุขยิ่ง",
    description: "วทก.7"
  },
  {
    key: uuid(),
    avatar: "00274386.jpg",
    name: "นายณรงค์ศักดิ์ นาคสุขปานย์",
    description: "พธก.7"
  },
  {
    key: uuid(),
    avatar: "00368713.jpg",
    name: "นายธีระพงษ์ แสงประเสริฐ",
    description: "นบง.7"
  },
  {
    key: uuid(),
    avatar: "00241005.jpg",
    name: "ว่าที่ ร.ต. ณัฐวุฒิ โสภฐิติ",
    description: "ผส.8"
  },
  {
    key: uuid(),
    avatar: "00305556.jpg",
    name: "นาย พรศักดิ์ นัสธีทอง",
    description: "นบง.7"
  },
  {
    key: uuid(),
    avatar: "00310606.jpg",
    name: "พ.ต.หญิง บษกร เทียมศักดิ์",
    description: "ฝ.10"
  },
  {
    key: uuid(),
    avatar: "00237637.jpg",
    name: "นาง พัชรพร หัตถกิจธาตรี",
    description: "ชฝ.9"
  }
];

const contentsData = [];
for (let i = 0; i < 10; i++) {
  let user = topRankData[Math.floor(Math.random() * 10)];
  contentsData.push({
    id: uuid(),
    href: "http://ant.design",
    name: user.name,
    avatar: user.avatar,
    description: user.description,
    content: lorem.generateParagraphs(Math.floor(Math.random() * 3) + 1),
    liked: Math.floor(Math.random() * 100) + 1,
    comments: Math.floor(Math.random() * 10) + 1,
    createdAt: Math.floor(Math.random() * 60) + 1,
    view: Math.floor(Math.random() * 1000) + 1
  });
}

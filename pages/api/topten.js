import uuid from "uuid";

export default function handle(req, res) {
  res.json(topRankData);
}

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

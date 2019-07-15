import { LoremIpsum } from "lorem-ipsum";
import uuid from "uuid";

export default function handle(req, res) {
  res.json(categoriesData);
}

const categoriesData = [
  "การเข้าอบรมภายในและภายนอก",
  "เข้าร่วมกิจกรรม Self-learning",
  "รายงานผลการฝึกอบรม",
  "การเป็นวิทยากร",
  "Job Enlargement",
  "Job Rotation",
  "เข้าร่วมเสวนา/สัมมนา",
  "งานวิจัย",
  "การไปเป็นวิทยากร",
  "ผลงานโครงการ",
  "คิดค้นนวัตกรรม",
  "ความรู้เกี่ยวกับ Process",
  "ความรู้เกี่ยวกับ Product"
];

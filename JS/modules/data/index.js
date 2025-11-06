import { studentcounter, students } from "./data.js";
import logger from "./utils.js";

logger(`Total students: ${studentcounter}`);
students.forEach((student) => {
  logger(`Student Name: ${student}`);
});

import { schoolName } from "./extra.js";
logger(`School Name: ${schoolName}`);

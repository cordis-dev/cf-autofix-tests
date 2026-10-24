import { readFile } from "fs";
import { writeFile } from "fs";

export function copy(from, to) {
    writeFile(to, readFile(from));
}

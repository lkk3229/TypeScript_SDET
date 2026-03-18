/*
import { appname } from "./Module";
import { add } from "./Module";
import { Formatter } from "./Module";   
*/

import { appname, add, Formatter } from "./Module"; // Importing multiple entities from the same module

console.log(appname);

console.log(add(5, 10));

console.log(new Formatter().toUpperCase("Welcome")); // Output: WELCOME

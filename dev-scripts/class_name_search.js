const fs = require("fs");
const glob = require("glob");

let classes = new Set();

// get all HTML files recursively
const files = glob.sync("**/*.html");

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(/class=["'`]([^"'`]+)["'`]/g);
  if (matches) {
    matches.forEach(m => {
      m.replace(/class=["'`]([^"'`]+)["'`]/, (_, cls) => {
        cls.split(/\s+/).forEach(c => classes.add(c));
      });
    });
  }
});

console.log([...classes]); // all classes found
console.log(`Total unique classes found: ${classes.size}`);
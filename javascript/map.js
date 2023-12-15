const rest = new Map();
rest
  .set("name", "sardar ji ka dhaba")
  .set("location", "east market")
  .set("menu", "chillichicken,nun,roti,chicken lolipop")
  .set("open", 7)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are close");
console.log(rest.get("name"));
const arrival = 12;
console.log(
  rest.get(rest.get("open") <= arrival && rest.get("close") >= arrival)
);

const questions = new Map([
  ["question", "what is the best language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "java script"],
  ["correct", 3],
  [true, "success"],
  [false, "try again"],
]);

console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") {
    console.log(value);
  }
}
const answer = 3;
console.log(questions.get(questions.get("correct") == answer));

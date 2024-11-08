function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  for (const key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}
const personInfo = { name: "Dr Yunus", age: 2500, email: "dryunus@abc.com" };
console.log(validateKeys(personInfo, ["name", "age"]));

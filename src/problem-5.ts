
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const userInfo = getProperty({ name: "Jhankar Mahbub", age: 500 }, "name");
console.log(userInfo);

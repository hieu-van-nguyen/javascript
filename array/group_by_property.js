const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 30 }
];

// Group users by age
const grouped = users.reduce((acc, user) => {
  acc[user.age] = acc[user.age] || [];
  acc[user.age].push(user);
  return acc;
}, {});

console.log(grouped);
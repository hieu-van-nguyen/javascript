const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 3;
console.log(original);  // Output: { a: 1, b: { c: 2 } }
console.log(deepCopy);  // Output: { a: 1, b: { c: 3 } }

function deepCopyObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(deepCopyObject);
    }
    const copiedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copiedObj[key] = deepCopyObject(obj[key]);
        }
    }
    return copiedObj;
}

function deepCopyV2(item) {
    if (item === null || typeof item !== 'object') {
        return item;
    }
    const copy = Array.isArray(item) ? [] : {};
    for (const key in item) {
        // Ensure we only copy the object's own properties, not inherited ones
        if (item.hasOwnProperty(key)) {
            copy[key] = deepCopyV2(item[key]);
        }
    }
    return copy;
}

// Example Usage:
const user = {
  id: 1,
  profile: {
    username: "dev_guru",
    tags: ["javascript", "coding"]
  }
};

const newUser = deepCopyObject(user);

// Prove it's a deep copy
newUser.profile.tags.push("recursive");
console.log(user.profile.tags);    // ["javascript", "coding"]
console.log(newUser.profile.tags); // ["javascript", "coding", "recursive"]

const anotherUser = deepCopyV2(user);
anotherUser.profile.tags.push("deep copy");
console.log(user.profile.tags);    // ["javascript", "coding"]
console.log(anotherUser.profile.tags); // ["javascript", "coding", "deep copy"]
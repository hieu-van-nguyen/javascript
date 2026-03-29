const groupAnagramsV1 = (strs) => {
  const anagramMap = new Map();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!anagramMap.has(sorted)) {
      anagramMap.set(sorted, []);
    }
    anagramMap.get(sorted).push(str);
  }
  return Array.from(anagramMap.values());
};

const groupAnagramsV2 = (strs) => {
    const map = {};
    for (const str of strs) {
        const sorted = str.split('').sort().join('');  
        if (!map[sorted]) {
            map[sorted] = [];
        }  
        map[sorted].push(str);
    }  
    return Object.values(map);
}

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagramsV1(input));
console.log(groupAnagramsV2(input));
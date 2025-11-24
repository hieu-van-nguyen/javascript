const sentence = "the quick brown fox jumped over the lazy dog";
const words = sentence.split(" ");
for (let i = 0; i < words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
}
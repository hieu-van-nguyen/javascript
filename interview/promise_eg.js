let userLeft = true;
let userWatchingCatMeme = false;
function samplePromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":("
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat"
      });
    } else {
      resolve("Thumbs up and running");
    }
  });
}

samplePromise()
  .then((result) => {
    console.log("Promise Resolved: ", result);
  })
  .catch((error) => {       
    console.log(error.name + " " + error.message);
  });

const p1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved");
});

const p2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolved");
});

const p3 = new Promise((resolve, reject) => {
  resolve("Promise 3 resolved");
});

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });   

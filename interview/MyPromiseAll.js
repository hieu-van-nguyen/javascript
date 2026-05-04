function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    
    promises.forEach((p, index) => {
      Promise.resolve(p).then(val => {
        results[index] = val;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
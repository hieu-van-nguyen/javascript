var myModule = (function () {
  var privateVar = 'I am private';

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

myModule.publicMethod(); // Logs: I am private

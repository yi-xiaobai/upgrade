function demo() {
  console.log("==>Get this", this);
  console.log("==>Get arguments", arguments);
  this.a = 1314;
  return function () {
    console.log("==>Get this333", this);
    console.log("==>Get this333", arguments);
    setTimeout(() => {
      console.log("==>Get this111", this);
      console.log("==>Get this111aaaa", this.a);
      console.log("==>Get this111", arguments);
    }, 1000);

    setTimeout(function () {
      this.a = 1;
      console.log("==>Get this222", this);
      console.log("==>Get this222aaaa", this.a);
      console.log("==>Get this222", arguments);
    });
  };
}

const d = demo(1, 2, 3);
d();

function sumofnumber() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        var sum = 0;
        for (var i = 1; i <= 4; i++) {
          sum += i;
        }
        resolve(sum);
      }, 1000);
    });
  }
  
  async function calculateSum() {
    try {
      var result = await sumofnumber();
      console.log("Sum of given number is:", result);
    } catch (error) {
      console.log(error);
    }
  }
  
  calculateSum();
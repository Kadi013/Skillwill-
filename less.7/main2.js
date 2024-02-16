// დავალება მეორე (პირველი ვარიანტი)

function makeToys(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve('Undefected');
        } else {
          reject('Defected');
        }
      }, delay);
    });
  }
  
  function deliverToys(status, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(status);
      }, delay);
    });
  }
  
  function sellToys(status, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 'Undefected' && Math.random() > 0.7) {
          resolve('Toy has been sold');
        } else {
          reject('Toy was unsuccessful');
        }
      }, delay);
    });
  }
  
  makeToys(3000)
  .then((toyStatus) => deliverToys(toyStatus, 2000))
  .then((deliveredStatus) => sellToys(deliveredStatus, 1000))
  .then((result) => console.log(result))
  .catch((error) => {
    if (error === 'Defected') {
      console.error('We encountered a problem with the toy quality. Please contact customer support.');
    } else {
      console.error('An unexpected error occurred:', error);
    }
  });

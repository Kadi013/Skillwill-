// დავალება მეორე (მეორე ვარიანტი)

async function makeToys(delay) {
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
  
  async function deliverToys(status, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(status);
      }, delay);
    });
  }
  
  async function sellToys(status, delay) {
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
  
  async function toyBusiness() {
    try {
      const toyStatus = await makeToys(3000);
      console.log(`Toy status: ${toyStatus}`);
  
      const deliveredStatus = await deliverToys(toyStatus, 2000);
      console.log(`Delivered status: ${deliveredStatus}`);
  
      const result = await sellToys(deliveredStatus, 1000);
      console.log(result);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  toyBusiness();
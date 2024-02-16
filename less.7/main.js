// დავალება პირველი 
function mySetTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  mySetTimeout(1000).then(() => {
    console.log('After 1 second');
  });
   
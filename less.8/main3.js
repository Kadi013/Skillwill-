const deepCopyAsync = (obj) => {
  return new Promise((resolve, reject) => {
    // შემოწმება არის თუ არა არგუმენტი ობიექტი
    if (typeof obj !== "object" || obj === null) {
      reject("არგუმენტი არ არის ობიექტი");
      return;
    }
    // კოპირებული ობიექტი
    const copiedObj = JSON.parse(JSON.stringify(obj));
    // რეზოლვი
    resolve(copiedObj);
  });
};

// ორიგინალი ობიქეტი
const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

deepCopyAsync(originalObject)
  .then((copiedObject) => {
    console.log("ორიგინალი ობიექტი:", originalObject);
    console.log("კოპირებული ობიექტი:", copiedObject);
  })
  .catch((error) => {
    console.error("შეცდომა:", error);
  });

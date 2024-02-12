 
 // დავალება პირველი 
 
 // შავი ფონი
 const overlay = document.createElement("div");
 overlay.classList.add("overlay");

 // ღილაკი რომელზეც ჩნდება კონტენტი
 const confirmBtn = document.createElement("button");
 confirmBtn.innerText = "დარეგისტრირდი";
 confirmBtn.classList.add("confirmBtn");

 // დივი
 const container = document.createElement("div");
 container.classList.add("container");

 // სურათი
 const image = document.createElement("img");
 image.src =
   "https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png";
 image.classList.add("image");

 // სათაური
 const topText = document.createElement("h1");
 topText.innerText = "SkillWill React";
 topText.classList.add("topText");

 // ქვეტექსტი "აღწერა"
 const bottomText = document.createElement("p");
 bottomText.innerText =
   "ამდენ წვალებას რატომ არ შეიძლება უბრალოდ ფუნქციიაში რეთარნით დავაბრუნოთ კონტენტი დოლარის ნიშნის დახმარებით? ((";
 bottomText.classList.add("bottomText");

 // ინფუთი "მეილი"
 const modalInfo = document.createElement("input");
 modalInfo.placeholder = "Enter Your Email";
 modalInfo.type = "email";
 modalInfo.classList.add("modalInfo");

 // ღილაკი
 const btn = document.createElement("button");
 btn.innerText = "დაადასტურეთ მეილი";
 btn.classList.add("btn");

 // ელემენტების დამატება 
 container.append(image, topText, bottomText, modalInfo, btn);
 document.body.append(confirmBtn, container, overlay);

 // მოდალის გამოსახვა
 confirmBtn.addEventListener("click", () => {
   container.style.display = "flex";
   overlay.style.display = "block";
 });
 
 // ინფუთის პირობე
 btn.addEventListener("click", () => {
   if (modalInfo.value === "") {
     alert("ნელა ნელაა");
     return;
   }

   if (!modalInfo.value.includes("@")) {
     alert("მეილი მასე არ იწერება ბროსკი");
   } else {
     modalInfo.value = "";
   }
 });
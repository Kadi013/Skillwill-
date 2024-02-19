// მეორე დავალება

// ლინკი
const URL = "https://jsonplaceholder.typicode.com/posts";

// მიღება
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // მაპის გამყენებით მონაცემების გადმოტანა კონტენტში
    const postContainers = data.map((post) => {
      const container = document.createElement("div");
      container.classList.add("container");
      container.innerHTML = `
        <div class="title_text">${post.title}</div>
        <div class="body_text">${post.body}</div>
      `;
      return container;
    });

    // კონტენტში დამატება
    document.body.append(...postContainers);
  })
  .catch((error) => console.error("Error:", error));

// პირველი დავალება

let content = document.createElement('div');
content.classList.add('active');
content.innerHTML = 'Show-Hide';

let btn = document.createElement('button');
btn.classList.add('btn');
btn.innerHTML = 'Toggle';
document.body.append(content,btn);

btn.addEventListener("click", () => {
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
});


// დავალება მეორე 

const data = {
    name: 'Gandalf',
    link: 'https://www.skillwill.ge/'
  };
  
  const parentContainer = document.querySelector("#parent_container");
  parentContainer.innerHTML = `
    <div id="card">
        <p class="commit">მეორე დავალება</p>
      <h2 class="top-text">${data.name}</h2>
      <a href="${data.link}" target="_blank" >SkillWill</a>
    </div>
  `;

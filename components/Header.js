const template = document.createElement("template");

template.innerHTML = `
  <nav class="nav-container">
    <ul class="list-links nav-links">
      <li class="list-link margin-list-link">
        <a href="./index.html">Home</a>
      </li>
      <li class="list-link margin-list-link">
        <a href="https://github.com/1ns4w?tab=repositories">Projects</a>
      </li>
    </ul>
  </nav>
`;

document.getElementById("header").appendChild(template.content);

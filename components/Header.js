const template = document.createElement("template");

template.innerHTML = `
  <nav>
    <ul class="list-links nav-links">
      <li class="list-link margin-list-link">
        <a href="./index.html">Home</a>
      </li>
      <li class="list-link margin-list-link">
        <a href="./projects.html">Projects</a>
      </li>
      <li class="list-link margin-list-link">
        <a href="./events.html">Events</a>
      </li>
      <li class="list-link">
        <a href="./contact.html">Contact</a>
      </li>
    </ul>
  </nav>
`;

document.getElementById("header").appendChild(template.content);
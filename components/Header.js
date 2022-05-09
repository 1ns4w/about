const template = document.createElement("template");

template.innerHTML = `
  <nav>
    <ul class="nav-links">
      <li>
        <a href="./index.html">Home</a>
      </li>
      <li>
        <a href="./projects.html">Projects</a>
      </li>
      <li>
        <a href="./events.html">Events</a>
      </li>
      <li>
        <a href="./contact.html">Contact</a>
      </li>
    </ul>
  </nav>
`;

document.getElementById("header").appendChild(template.content);
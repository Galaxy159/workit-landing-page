export default class HeaderEl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    fetch("./components/header/header.html")
      .then((response) => response.text())
      .then((html) => {
        const template = document.createElement("template");
        template.innerHTML = html;
        this.shadowRoot.appendChild(
          document.importNode(template.content, true)
        );
      });
  }
}

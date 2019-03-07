export default class Component {
    constructor(host, props = {}) {
        this.host = host;
        this.props = props;
        this._render();
    }
    _render(dataR) {
        this.host.innerHTML = "";
        const content = this.render(dataR);

        if (typeof content === 'string') {
            this.host.innerHTML = content;
        } else {
            content.map(item => this._vDomPrototypeElementToHtmlElement(item))
                .forEach(htmlElement => {
                    this.host.appendChild(htmlElement);
                });
        }
    }

    render() {
        return 'OMG! They wanna see me!';
    }

    _vDomPrototypeElementToHtmlElement(element) {
        if (typeof element === 'string') {
            const htmlElement = document.createElement('div');
            htmlElement.innerHTML = element;
            return htmlElement;
        } else {
            if (element.tag) {
                if (typeof element.tag === 'function') {
                    const container = document.createElement('div');
                    new element.tag(container, element.props);
                    return container;
                } else {
                    // string
                    const container = document.createElement(element.tag);
                    if (element.content) {
                        container.innerHTML = element.content;
                    }

                    // ensure following element properties are Array
                    ['classList', 'attributes', 'children'].forEach(item => {
                        if (element[item] && !Array.isArray(element[item])) {
                            element[item] = [element[item]];
                        }
                    });
                    if (element.classList) {
                        container.classList.add(...element.classList);
                    }
                    if (element.attributes) {
                        element.attributes.forEach(attributeSpec => {
                            container.setAttribute(attributeSpec.name, attributeSpec.value);
                        });
                    }

                    // process children
                    if (element.children) {
                        element.children.forEach(el => {
                            const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
                            container.appendChild(htmlElement);
                        });
                    }

                    if (element.eventHandlers){
                        element.eventHandlers.forEach(attributeSpec => {
                            container.addEventListener(attributeSpec.eventType, attributeSpec.eventMethod);
                        });
                    }

                    return container;
                }
            }
            return element;
        }
    }
}

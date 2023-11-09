
// read file data - doubtful that this will be needed but who knows
/*
const [file] = document.querySelector("input[type=file]").files;
const reader = new FileReader();
reader.addEventListener(
    "load", 
    () => {
        console.log(reader.result.length);
    },
    false,
);

if (file) {
    reader.readAsText(file);
}
*/

// Get the path element
const path = document.getElementById('myPath');
document.querySelector("svg").setAttribute("width", 2000);
console.log(document.querySelector("svg").getAttribute("width"));


// Get the total length of the path
const pathLength = path.getTotalLength();

// Set the stroke-dasharray and stroke-dashoffset initially
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;
path.style.fill = "none";

// Animate the drawing using JavaScript
function drawPath() {
    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
    path.style.strokeDashoffset = 0;
    //path.style.fill = "#123fff";
}


// Call the drawPath function after a delay (e.g., 1 second)
setTimeout(drawPath, 1000);

class SvgPath extends HTMLElement {
    // Define observed attributes (attributes to monitor for changes)
    static get observedAttributes() {
        return ['path'];
    }

    // Constructor: called when the element is created
    constructor() {
        super();
        // Create a Shadow DOM
        this.attachShadow({mode: 'open'});
    }

    // Called when the element is added to the DOM
    connectedCallback() {
        this.render();
    }

    // Called when observed attributes change
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'path' && oldValue !== newValue) {
            this.render();
        }
    }

    // Render the SVG based on the 'path' attribute
    render() {
        // Get the 'path' attribute value
        const pathString = this.getAttribute('path') || ''; 

        // Create SVG and path elements
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        // Set the path attribute based on the 'path' attribute value
        path.setAttribute('d', pathString);

        // Append the path to the SVG
        svg.appendChild(path);

        // Append the SVG to the Shadow DOM
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(svg);
    }
}

// Define the custom element 'svg-path'
customElements.define('svg-path', SvgPath);

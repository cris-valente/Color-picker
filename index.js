let pickedColor = ""
let colorScheme = ""
let url = ""

const colorPalette = document.getElementById('color-palette')

colorPalette.addEventListener('click', copyColor)
document.getElementById('get-color-scheme').addEventListener('click', getColorScheme)

function getColorScheme(){
    pickedColor = document.getElementById('color-picker').value
    colorScheme = document.getElementById('color-schemes').value
    url = `
    https://www.thecolorapi.com/scheme?hex=${pickedColor.slice(1)}&mode=${colorScheme}&count=4`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('color-palette').innerHTML = `
            <div 
                class="color" 
                style="background-color:${data.colors[0].hex.value};">
            </div>
            <div 
                class="color" 
                style="background-color:${data.colors[1].hex.value};">
            </div>
            <div 
                class="color" 
                style="background-color:${pickedColor};">
            </div>
            <div 
                class="color" 
                style="background-color:${data.colors[2].hex.value};">
            </div>
            <div 
                class="color" 
                style="background-color:${data.colors[3].hex.value};">
            </div>
            <div class="hex">${data.colors[0].hex.value}</div>
            <div class="hex">${data.colors[1].hex.value}</div>
            <div class="hex">${pickedColor}</div>
            <div class="hex">${data.colors[2].hex.value}</div>
            <div class="hex">${data.colors[3].hex.value}</div>`
        })
}

// In progress...
function copyColor() {
    
    // Copy the text inside the text field
    
    let  parent = document.getElementById('color-palette');
    let children = parent.querySelectorAll('.hex');
    console.log(parent.children[0].style.backgroundColor)
    console.log(children[0].textContent)
    // navigator.clipboard.writeText(children.textContent);
    // // Alert the copied text
    // alert("Copied the text: " + children.textContent);
}
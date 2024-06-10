var form = document.getElementById("userForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearspan(); 
    if(validateform()){
        createTable()

    }
});

function validateform(){
    let isValid=true;
    const items=["firstname","lastname","email"]
    items.forEach((id)=>{
        const input=document.getElementById(id);
        if(!input.value){
            displayspan(`${id} is required`, input);
        isValid=false;
        }
    })
    return isValid;
}
 function displayspan(m,input){
    const span= document.createElement("span");
    span.textContent=m;
    span.className="error";
    input.parentNode.insertBefore(span,input.nextSibling);
 }


function clearspan(){
const spans=document.querySelectorAll(".error");
spans.forEach((span) => {
    span.remove()
})

}


function clearform(){
    form.reset();
    

}

function createTable() {
    const table = document.createElement("table");
    const data = {
        "First Name": document.getElementById("firstname").value,
        "Last Name": document.getElementById("lastname").value,
        "Email": document.getElementById("email").value,
        "Checkbox": document.getElementById("checkbox").checked ? "Checked" : "Unchecked",
        "Radio": document.querySelector('input[name="radio"]:checked') ? document.querySelector('input[name="radio"]:checked').value : "Not selected",
        "Comment": document.getElementById("comment").value,
        "Dropdown": document.getElementById("dropdown").value
    };

const headers=["field", "value"];
const headerRow=table.insertRow(0);
headers.forEach((header,index)=> {
    const col=headerRow.insertCell(index);
    col.textContent=header;
})
Object.entries(data).forEach(([field,value], index)=>{
    const row=table.insertRow(index+1);
    const fieldcell=row.insertCell(0);
    const valuecell=row.insertCell(1);
fieldcell.textContent=field;
valuecell.textContent=value;

});
document.body.appendChild(table);
}  
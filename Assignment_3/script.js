//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

const table = document.getElementById("myTable");
 
let countBoxPresent = 0;
 
const checkRows = table.getElementsByTagName("input");
hideOnStart();
 
function hideOnStart() {
  var count = 0;
  let submitBtn = document.getElementById("button");
  for (var i = 0; i < checkRows.length; i++) {
    var row = checkRows[i].parentNode.parentNode;
 
    if (!checkRows[i].checked) {
      count++;
      row.querySelectorAll("td")[8].classList.add("columnHide");
      row.querySelectorAll("td")[9].classList.add("columnHide");
    }
 
    if (checkRows.length === count) {
 
      submitBtn.style.backgroundColor = "gray";
      submitBtn.style.border = "";
      submitBtn.style.cursor = "initial";
      submitBtn.disabled = true;
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
    }
  }
}
 
 
selectRow();
 
let boolean = true;
let mainRetoric = true;
 
function rowOne(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling;
  if (mainRetoric) {
    descRow.style.display = "table-cell";
    mainRetoric = false;
  } else {
    descRow.style.display = "none";
    mainRetoric = true;
  }
}
 
 
function rowTwo(r) {
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling;
  if (boolean) {
    descRow.style.display = "table-cell";
    boolean = false;
  } else {
    descRow.style.display = "none";
    boolean = true;
  }
}
 
function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const studentName = document.getElementById("myTable").rows[i].cells[1].innerHTML;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`${studentName} Record deleted successfully`);
  reorderStudents();
  hideOnStart();
  selectRow();
}
 
function reorderStudents() {
  const rows = document.getElementById("myTable").rows;
  for (let i = 1; i < rows.length; i += 2) {
    const studentNumber = Math.ceil(i / 2);
    rows[i].cells[1].innerHTML = `Student ${studentNumber}`;
    rows[i].cells[2].innerHTML = `Student ${studentNumber}`;
    rows[i + 1].cells[0].innerHTML = rows[i + 1].cells[0].innerHTML.replace(/Student \d+/, `Student ${studentNumber}`);
  }
}
 
function editRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const studentName = document.getElementById("myTable").rows[i].cells[1].innerHTML;
 
  // Create modal elements
  const modal = document.createElement('div');
  modal.style.cssText = `
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
  `;
 
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
  `;
 
  const title = document.createElement('h2');
  title.textContent = `Edit details of ${studentName}`;
 
  const textBox = document.createElement('input');
  textBox.type = 'text';
  textBox.style.width = '100%';
  textBox.style.marginBottom = '10px';
 
  const okButton = document.createElement('button');
  okButton.textContent = 'OK';
  okButton.onclick = function () {
    if (textBox.value.trim() !== '') {
      alert(`${studentName} data updated successfully`);
    }
    document.body.removeChild(modal);
  };
 
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.onclick = function () {
    document.body.removeChild(modal);
  };
 
  // Append elements
  modalContent.appendChild(title);
  modalContent.appendChild(textBox);
  modalContent.appendChild(okButton);
  modalContent.appendChild(cancelButton);
  modal.appendChild(modalContent);
 
  // Display the modal
  document.body.appendChild(modal);
}
 
function addRow() {
  const row = table.insertRow(table.rows.length);
 
  const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);
 
  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="rowOne(this)" src="down.png" width="25px" /></td>`;
 
  student.innerHTML = `Student ${Math.ceil(rowCount / 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount / 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";
 
  try {
    setTimeout(() => { alert(`Student ${Math.ceil(rowCount / 2)} Record added successfully`) }, 100);
  } catch (error) {
    alert("Error: Record Addition Failed!");
  }
 
  selectRow();
 
  nextRowAddition();
  hideOnStart();
}
 
window.addEventListener("click", () => {
 
  let submitBtn = document.getElementById("button");
 
  if (countBoxPresent > 0) {
    submitBtn.style.backgroundColor = "orange";
    submitBtn.style.border = "2px solid orange";
    submitBtn.style.cursor = "pointer";
    submitBtn.disabled = false;
  } else {
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
  }
}
)
 
function nextRowAddition() {
  const rowCount = table.rows.length;
  const studentNumber = Math.ceil(rowCount / 2);
  const studentName = `Student ${studentNumber}`;
 
  const newRow = table.insertRow(rowCount);
  newRow.classList.add("dropDownTextArea");
 
  newRow.innerHTML = `
    <td rowspan="2">
      ${studentName} Details:<br><br>
      Award Details: Honors Student<br>
      Fall 1-2024(TA)<br />
      Comments: Outstanding<br>
      Award Status: A<br>
    </td>
  `;
 
  selectRow();
}
 
var rowname;
// selectRow();
 
function selectRow() {
  for (let i = 0; i < checkRows.length; i++) {
    const row = checkRows[i].parentNode.parentNode;
    rowname = checkRows;
 
    checkRows[i].addEventListener("click", () => {
      if (checkRows[i].checked) {
        countBoxPresent++;
        row.style.backgroundColor = "yellow";
        row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit Row</button></td>";
        row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("columnHide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("columnHide");
        row.querySelectorAll("td")[8].classList.remove("columnHide");
        row.querySelectorAll("td")[9].classList.remove("columnHide");
      } else {
        countBoxPresent--;
        row.style.backgroundColor = "white";
        row.lastElementChild.innerHTML = "";
        row.lastElementChild.previousElementSibling.innerHTML = "";
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
        row.querySelectorAll("td")[8].classList.add("columnHide");
        row.querySelectorAll("td")[9].classList.add("columnHide");
      }
    })
  }
}
 
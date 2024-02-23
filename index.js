const btnSave = document.getElementById("btn-save");
const textNote = document.getElementById("text-note");
const notas = document.getElementById("notas");

textNote.focus();
btnSave.addEventListener("click", () => {
  saveNote();
});

function saveNote() {
  const id = getId();
  const noteCard = document.createElement("div");

  noteCard.innerHTML = `<div id='note-${id}' class="content-card">
    <p>${textNote.value}</p>
    <button onclick='deleteNote(${id})'>Borrar</button>
  </div>`;

  if (textNote.value.trim() === "") {
    alert("Por favor, ingresa tu nota");
    return;
  }

  notas.appendChild(noteCard);
  textNote.value = "";
  textNote.focus();
}

function deleteNote(id) {
  const noteToRemove = document.getElementById(`note-${id}`);
  noteToRemove.outerHTML = "";
}

function getId() {
  return Math.floor(Math.random());
}
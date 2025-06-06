const form = document.getElementById("reminderForm");
const input = document.getElementById("reminderInput");
const list = document.getElementById("reminderList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    input.value = "";
  }
});

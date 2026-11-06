function showAlert() {
  alert("Halo! Selamat datang di web PKL Nuril Fatonah - Telkom Akses Magelang");
  document.getElementById("jurnal").scrollIntoView({ behavior: "smooth" });
}

function tambahJurnal() {
  let input = document.getElementById("inputJurnal");
  let list = document.getElementById("listJurnal");
  if (input.value === "") {
    alert("Isi dulu jurnalnya, Nuril!");
    return;
  }
  let li = document.createElement("li");
  let tanggal = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  li.textContent = tanggal + " - " + input.value;
  li.style.margin = "8px 0";
  list.appendChild(li);
  input.value = "";
}

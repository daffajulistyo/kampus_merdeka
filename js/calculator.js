function tambah() {
  let frm = document.getElementById("formulir");
  let a1 = frm.a1.value;
  let a2 = frm.a2.value;

  if (isNaN(a1) || a1 == "") {
    alert("Harap isi data berupa angka");
  } else if (isNaN(a2) || a2 == "") {
    alert("Harap isi data berupa angka");
  } else {
    let hasil = +a1 + +a2;
    frm.hasil.value = hasil;
  }
}

function kurang() {
  let frm = document.getElementById("formulir");
  let a1 = frm.a1.value;
  let a2 = frm.a2.value;

  if (isNaN(a1) || a1 == "") {
    alert("Harap isi data berupa angka");
  } else if (isNaN(a2) || a2 == "") {
    alert("Harap isi data berupa angka");
  } else {
    let hasil = a1 - a2;
    frm.hasil.value = hasil;
  }
}

function kali() {
  let frm = document.getElementById("formulir");
  let a1 = frm.a1.value;
  let a2 = frm.a2.value;

  if (isNaN(a1) || a1 == "") {
    alert("Harap isi data berupa angka");
  } else if (isNaN(a2) || a2 == "") {
    alert("Harap isi data berupa angka");
  } else {
    let hasil = a1 * a2;
    frm.hasil.value = hasil;
  }
}
function bagi() {
  let frm = document.getElementById("formulir");
  let a1 = frm.a1.value;
  let a2 = frm.a2.value;

  if (isNaN(a1) || a1 == "") {
    alert("Harap isi data berupa angka");
  } else if (isNaN(a2) || a2 == "") {
    alert("Harap isi data berupa angka");
  } else {
    let hasil = a1 / a2;
    frm.hasil.value = hasil;
  }
}

function pangkat() {
  let frm = document.getElementById("formulir");
  let a1 = frm.a1.value;
  let a2 = frm.a2.value;

  if (isNaN(a1) || a1 == "") {
    alert("Harap isi data berupa angka");
  } else if (isNaN(a2) || a2 == "") {
    alert("Harap isi data berupa angka");
  } else {
    let hasil = Math.pow(a1, a2);
    frm.hasil.value = hasil;
  }
}

function kosong1() {
  let frm = document.getElementById("formulir");
  frm.a1.value = "";
}
function kosong2() {
  let frm = document.getElementById("formulir");
  frm.a2.value = "";
}

function kosongAll() {
  let frm = document.getElementById("formulir");
  frm.a1.value = "";
  frm.a2.value = "";
  frm.hasil.value = "";
}

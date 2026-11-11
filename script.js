const output = document.getElementById("output");


let mode = "";

function update()
{
    const input = document.getElementById("angka").value;
    const input2 = document.getElementById("angka2").value;
    const input3 = document.getElementById("angka3").value;
    if (mode == "ganjilgenap")
    {
        console.log(ganjilgenap(input));
        output.innerHTML = ganjilgenap(input);
    }
    else if (mode == "cf")
    {
        console.log(C_ke_F(input));
        output.innerHTML = C_ke_F(input);
    }
    else if (mode == "big")
    {
        console.log(nilaiTerbesar(input, input2, input3));
        output.innerHTML = nilaiTerbesar(input, input2, input3);
    }
    else if (mode == "k")
    {
        console.log(tahunKabisat(input));
        output.innerHTML = tahunKabisat(input);
    }
    else if (mode == "diskon")
    {
        console.log(hargaSetelahDiskon(input));
        output.innerHTML = hargaSetelahDiskon(input);
    }
}
function mode_h(i)
{
    if (i == "ganjilgenap")
    {
        mode = "ganjilgenap";
    }
    else if (i == "cf")
    {
        mode = "cf";
    }
    else if (i == "big")
    {
        mode = "big";
    }
    else if (i == "k")
    {
        mode = "k";
    }
    else if (i == "diskon")
    {
        mode = "diskon";
    }
    update();
}

function ganjilgenap(nilai) 
{
    let data = nilai % 2;
    if (data == 1)
    {
        return "itu ganjil";
    }
    else
    {
        return "itu genap";
    }
}
function C_ke_F(nilai)
{
    let data = nilai * 9 / 5;
    data = data + 32;
    return data;
}
function nilaiTerbesar(w, a, s) {
    if (w >= a && w >= s) {
        return w;
    } else if (a >= w && a >= s) {
        return a;
    } else {
        return s;
    }
}
function tahunKabisat(nilai) {
    if (nilai % 400 === 0) {
        return true;
    } else if (nilai % 100 === 0) {
        return false;
    } else if (nilai % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
function hargaSetelahDiskon(nilai) {
    if (nilai >= 200000) {
        return nilai * 0.8;
    } else if (nilai >= 100000) {
        return nilai * 0.9;
    } else {
        return nilai;
    }
}
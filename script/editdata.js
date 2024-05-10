var namaIsValid = false;
var tipePropertiIsValid = false;
var idListingIsValid = false;
var sertifikatIsValid = false;
var developerIsValid = false;
var tahunDibuatIsValid = false;
var listrikIsValid = false;
var hargaMulaiIsValid = false;
var perkiraanBayarIsValid = false;
var kamarTidurIsValid = false;
var kamarMandiIsvalid = false;
var unitIsValid = false;
var lokasiIsValid = false;

function valNama(){
    let nama = document.forms['createform']['nama'].value

    if(nama.length == 0){
        alert('Field nama properti harus diisi!')
    }
    else if(nama.length < 3 || nama.length > 50){
        alert('Nama properti tidak boleh kurang dari 3 huruf atau lebih dari 50 huruf')
    }
    else{
        namaIsValid = true;
        return namaIsValid
    }
}

function valTipeProperti(){
    let tipeProperti = document.forms['createform']['tipe-properti']

    if(!tipeProperti.value){
        alert('Field tipe properti belum dipilih')
    }
    else{
        tipePropertiIsValid = true;
        return tipePropertiIsValid
    }
}

function valSertifikat(){
    let sertifikat = document.forms['createform']['sertifikat']

    if(!sertifikat.value){
        alert('Field sertifikat belum dipilih')
    }
    else{
        sertifikatIsValid = true;
        return sertifikatIsValid
    }
}

function valIdListing(){
    let idListing = document.forms['createform']['idlist'].value

    if(idListing.length == 0){
        alert('Field ID listing belum diisi')
    }
    else if(idListing.length != 8){
        alert('ID Listing harus terdiri dari 8 digit angka')
    }
    else{
        idListingIsValid = true;
        return idListingIsValid
    }
}

function valDeveloper(){
    let developer = document.forms['createform']['developer'].value

    if(developer.length == 0){
        alert('Field nama developer harus diisi!')
    }
    else if(developer.length < 5 || developer.length > 100){
        alert('Nama developer tidak boleh kurang dari 5 huruf atau lebih dari 100 huruf')
    }
    else{
        developerIsValid = true;
        return developerIsValid
    }
}

function valTahunDibuat(){
    let tahunDibuat = document.forms['createform']['tahun-dibuat']

    if(!tahunDibuat.value){
        alert('Field tahun dibuat belum dipilih')
    }
    else{
        tahunDibuatIsValid = true;
        return tahunDibuatIsValid
    }
}

function valListrik(){
    let listrik = document.forms['createform']['listrik']

    if(!listrik.value){
        alert('Field listrik belum dipilih')
    }
    else{
        listrikIsValid = true;
        return listrikIsValid
    }
}

function valHargaMulai(){
    let hargaMulai = document.forms['createform']['mulaidari'].value

    if(hargaMulai.length == 0){
        alert("Field harga mulai harus diisi!")
    }
    else if(hargaMulai < 1 || hargaMulai > 10000000000){
        alert("Harga mulai tidak boleh IDR 0 atau lebih dari IDR 10M!")
    }
    else{
        hargaMulaiIsValid = true;
        return hargaMulaiIsValid
    }
}

function valPerkiraanBayar(){
    let perkiraanBayar = document.forms['createform']['perkiraanbayar'].value

    if(perkiraanBayar.length == 0){
        alert("Field harga bulanan harus diisi!")
    }
    else if(perkiraanBayar < 1 || perkiraanBayar > 100000000){
        alert("Perkiraan harga bulanan tidak boleh IDR 0 atau lebih dari IDR 100 juta!")
    }
    else{
        perkiraanBayarIsValid = true;
        return perkiraanBayarIsValid
    }
}

function valKamarTidur(){
    let kamarTidur = document.forms['createform']['kamartidur'].value

    if(kamarTidur.length == 0){
        alert('Field jumlah kamar tidur harus diisi!')
    }
    else if(kamarTidur < 1){
        alert('Jumlah kamar tidur tidak bisa dibawah 0')
    }
    else{
        kamarTidurIsValid = true;
        return kamarTidurIsValid
    }
}

function valKamarMandi(){
    let kamarMandi = document.forms['createform']['kamarmandi'].value

    if(kamarMandi.length == 0){
        alert('Field jumlah kamar mandi harus diisi!')
    }
    else if(kamarMandi < 1){
        alert('Jumlah kamar mandi tidak bisa dibawah 0')
    }
    else{
        kamarMandiIsvalid = true;
        return kamarMandiIsvalid
    }
}

function valUnit(){
    let unit = document.forms['createform']['unit'].value

    if(unit.length == 0){
        alert('Ukuran unit properti harus diisi!')
    }
    else{
        unitIsValid = true;
        return unitIsValid
    }
}

function valLokasi(){
    let lokasi = document.forms['createform']['alamat'].value

    if(lokasi.length == 0){
        alert('Alamat properti harus diisi!')
    }
    else if(lokasi.length < 5 || lokasi.length > 100){
        alert('Lokasi properti tidak boleh kurang dari 5 huruf atau lebih dari 100 kata')
    }
    else{
        lokasiIsValid = true;
        return lokasiIsValid
    }
}

let form = document.getElementById('createform')
form.addEventListener('submit', function(e){
    e.preventDefault(); 

    valNama()
    valTipeProperti()
    valSertifikat()
    valIdListing()
    valDeveloper()
    valTahunDibuat()
    valListrik()
    valHargaMulai()
    valPerkiraanBayar()
    valKamarTidur()
    valKamarMandi()
    valUnit()
    valLokasi()
    
    if(namaIsValid == true && tipePropertiIsValid == true && idListingIsValid == true && sertifikatIsValid == true && developerIsValid == true && tahunDibuatIsValid == true && listrikIsValid == true && hargaMulaiIsValid == true && perkiraanBayarIsValid == true && kamarTidurIsValid == true && kamarMandiIsvalid == true && unitIsValid == true && lokasiIsValid == true){
        alert("Update Data Successful")
        window.location.href = '../html/management-data.html';
    }
})

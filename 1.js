var data = [{
    "id": 10,
    "nama": "Abdullah Bintang",
    "umur": "40 Tahun"
},
{
    "id": 3,
    "nama": "Johan Taruna",
    "umur": "28 Tahun"
},
{
    "id": 7,
    "nama": "Erna Sukadi",
    "umur": "39 Tahun"
},
{
    "id": 1,
    "nama": "Bella Mella",
    "umur": "24 Tahun"
},
{
    "id": 9,
    "nama": "Dodit Huri",
    "umur": "18 Tahun"
}
]
console.log("Data Json Awal\n")
console.log(data)
data.sort(function(a, b) {
return a.id > b.id;
});

console.log("\n\nSort by ID")
for (var i = 0; i < data.length; i++) {

console.log(data[i].id + " - " + data[i].nama + " - " + data[i].umur)
}


data.sort(function(a, b) {
if (a.nama < b.nama) {
    return -1;
}
if (a.nama > b.nama) {
    return 1;
}
return 0;
})

console.log("\n\nSort by Alphabetical")
for (var i = 0; i < data.length; i++) {

console.log(data[i].id + " - " + data[i].nama + " - " + data[i].umur)
}

data.sort(function(a, b) {
return a.umur > b.umur;
});
console.log("\n\nSort by Age")
for (var i = 0; i < data.length; i++) {

console.log(data[i].id + " - " + data[i].nama + " - " + data[i].umur)
}

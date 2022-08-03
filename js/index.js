/*
    Vấn đề đặt ra: Cần lưu trữ 5 thông tin là tên học viên (Nam, Hằng, Minh, Long, Khải)
*/
//Khai báo mảng
var arrName = ['Nam','Hằng','Minh','Long','Khải'];
//Lấy ra giá trị trong mảng
console.log(arrName[2]);
console.log(arrName[3]);
document.getElementById('hoTen').innerHTML = arrName[4];
arrName[1] = 'Sang';
console.log(arrName);

//Lấy ra chiều dài (Số lượng phần tử trong mảng)
//option + esc | ctrl + space
console.log('Chiều dài:', arrName.length);
//Duyệt mảng: In ra màn hình console của browse
var content = '';
for (var index = 0; index < arrName.length;index ++){
    // console.log(arrName[index]);
    content += '<p class="badge badge-success">'+arrName[index]+'</p>';
}
document.getElementById('content-array').innerHTML = content;

//---------------- hàm thêm dữ liệu vào mảng ---------------
//push(); Hàm thêm 1 hoặc nhiều giá trị vào mảng
// arrName.push('Uyên');
// console.log(arrName);
//unshift(): Thêm 1 hoặc nhiều giá trị vào đầu mảng(làm thay đổi chỉ số của mảng nên ít sử dụng)
// arrName.unshift('Bảo');
// console.log(arrName);

//----------------- hàm xóa giá trị ra khỏi mảng
//splice(): xóa 1 hoặc nhiều giá trị trong mảng. => thay đổi index cũng như length của mảng
arrName.splice(2,1);//xóa từ vị trí số 2 1 phần tử
console.log(arrName);
//shift(): lấy ra 1 phần tử ở đầu mảng và xóa ra khỏi mảng, pop(): lấy phần tử ra khỏi mảng và xóa khỏi mảng
// var hoTen = arrName.shift();
var hoTen = arrName.pop();
console.log('hoTen: '+hoTen);
console.log(arrName);
//------------------- Dom qua tagname -------------
var arrTagSection = document.getElementsByTagName('section');
console.log(arrTagSection);
arrTagSection[1].innerHTML = 'Hello Cybersoft';
arrTagSection[1].style.color = 'red';
console.log(arrTagSection);
for (var index = 0; index < arrTagSection.length;index ++){
    arrTagSection[index].className = 'badge badge-danger mt-2';
}

//----------------- DOM qua classname --------------

var arrTagClass = document.getElementsByClassName('txt');
console.log(arrTagClass);
for (var index = 0; index < arrTagClass.length;index ++){
    arrTagClass[index].className = 'txt alert alert-danger';
    arrTagClass[index].innerHTML = 'Hello Cybersoft';
    
}

//---------------- DOM qua name -------------------
var arrTagName = document.getElementsByName('text-demo');
console.log(arrTagName);
for (var index = 0; index < arrTagName.length;index ++){
    arrTagName[index].className = 'txt alert alert-danger';
    arrTagName[index].innerHTML = 'Hello Cybersoft';
    
}
/*
    .querySelector(selector): khi dom đến dựa vào querySelector thì kết quả trả về là 1 thẻ đầu tiên khớp với selector đó (dù có nhiều thẻ có selector giống nhau).Nếu không có thẻ nào khớp selector đó thì kết quả trả về là undefine
*/
document.querySelector('#btnSubmit').onclick = function (){
    // alert(123);
    var pText1 = document.querySelector('.demo-selector .p-text').innerHTML;
    alert(pText1);
}

/*
    .querySelectorAll(selector): khi dom đến dựa vào querySelectorAll thì kết quả trả về là 1 mảng. lưu y: Nếu như chỉ có 1 thẻ khớp với selector thì nó vẫn trả về 1 mảng và mảng đó có 1 phần tử. Nếu không có phẩn từ nào thì kết quả là []
*/
document.querySelector('#btnDangNhap').onclick = function (event){
    event.preventDefault();
    var arrTagInput = document.querySelectorAll('#form input');
    console.log('tai khoan',arrTagInput[0].value);
    console.log('mat khau',arrTagInput[1].value);
    // console.log('abc',arrTagInput);
}


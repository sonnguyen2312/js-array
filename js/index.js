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
    content += '<p class="badge badge-danger">'+arrName[index]+'</p>';
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

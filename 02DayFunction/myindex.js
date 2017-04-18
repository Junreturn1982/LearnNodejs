// const arr = new Array();
// let dùng trong khối lệnh, like private
// var giữ giá trị, like public
const arr = [1,3,4,'Khoa'];
for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}
// console.log(i); // dung var i = 0 -> bien i sẽ co ket qua
// join them giua cac phan tu mang
console.log(arr.join(', '));
// add last push,add first unshift
// xoa cuoi: pop, xoa dau: shift
// slice(index,item count, add items)
arr.slice(2,0,12,8);
console.log(arr);
 


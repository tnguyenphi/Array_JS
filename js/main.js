
//Global


var arrNum = [];
function getElement(id) {
    return document.querySelector(id);
}
// Thêm số vào mảng

function addElemenArray() {
    var num = Number(getElement("#inputNumber").value);
    arrNum.push(num);
    getElement("#txtAdd").innerHTML = arrNum;
}
document.querySelector("#btnAdd").onclick = addElemenArray;

/**
 * Bài 1: Tính tổng các số dương
 */
function caclSum() {
    var sum = 0;
    for (var i = 0; i < arrNum.length; i++) {
        //Kiểm tra số dương
        if (arrNum[i] > 0) {
            sum += arrNum[i];
        }
    }
    getElement("#txtSum").innerHTML = "Tổng các số dương :" + sum;
}
getElement("#btnSum").onclick = caclSum;

/**
 * Bài 2: Đếm số số dương
 */
function caclCount() {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
        //Kiểm tra số dương
        if (arrNum[i] > 0) {
            count++;
        }
    }
    getElement("#txtCount").innerHTML = "Số số dương là :" + count;
}
getElement("#btnCount").onclick = caclCount;


/**
 * Bài 3: Tìm số nhỏ nhất trong mảng
 */

function findMin() {
    var min = arrNum[0];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] < min) {
            min = arrNum[i];
        }
    }
    getElement("#txtMin").innerHTML = "Số nhỏ nhất: " + min
}
getElement("#btnMin").onclick = findMin;


/**
 * Bài 4: Tìm số dương nhỏ nhất
 */

function findMinPositive() {
    // Tạo mảng chứa các số dương
    var newArray = [];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            newArray.push(arrNum[i]);
        }
    }
    //tìm số dương nhỏ nhất trong mảng mới
    var minPositive = newArray[0];
    for (var j = 0; j < newArray.length; j++) {
        if (newArray[j] < minPositive) {
            minPositive = newArray[j];
        }
    }
    getElement("#txtMinPositive").innerHTML = "Số dương nhỏ nhất: " + minPositive
}
getElement("#btnMinPositive").onclick = findMinPositive;


/**
 * Bài 5: Tìm số chẵn cuối cùng trong mảng
 * 
 */

function findEven() {
    var even = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 == 0) {
            even = arrNum[i];
        } else {
            even = -1;
        }
    }
    getElement("#txtBai5").innerHTML = "Số chẵn cuối cùng trong mảng : " + even;
}
getElement("#btnBai5").onclick = findEven;

/**
 * Bài 6: Đổi chỗ 2 vị trí trong mảng
 * 
 */

function swapNum() {
    // biến vị trí thứ 1
    var index1 = getElement("#num1").value;
    //biến vị trí thứ 2
    var index2 = getElement("#num2").value;

    // tạo biến lưu tạm index 1
    var swap = arrNum[index1];

    arrNum[index1] = arrNum[index2];
    arrNum[index2] = swap;
    getElement("#txtBai6").innerHTML = arrNum;
}
getElement("#btnBai6").onclick = swapNum;

/**
 * Bài 7: Sắp xếp mảng tăng dần
 * 
 */

function sapXep() {
    // tạo mảng mới 
    var newArr = [];
    for (var i = 0; i < arrNum.length; i++) {
        newArr.push(arrNum[i]);
    }
    for (var i = 0; i < newArr.length; i++) {
        for (var j = 0; j < newArr.length - 1; j++) {
            // so sánh giá trị 2 phần tử liền kề
            if (newArr[j] > newArr[j + 1]) {
                //hoán đổi bị trí 
                var temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    getElement("#txtBai7").innerHTML = newArr;
}
getElement("#btnBai7").onclick = sapXep;


/**
 * Bài 8: In số nguyên tố đầu tiên trong mảng
 * 
 */
// Hàm xác định số nguyên tố

function isPrime(n) {
    var kiemTra = true;
    if (n < 2) {
        kiemTra = false;
    }
    else if (n == 2) {
        kiemTra = true;
    }
    else if (n % 2 == 0) {
        kiemTra = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                kiemTra = false;
                break;
            }
        }
    }
    return kiemTra;
}

// hàm in số nguyên tố

function printPrime() {
    var prime;
    for (var i = 0; i < arrNum.length; i++){
        if (isPrime(arrNum[i])){
            prime = arrNum[i];
            break;
        }
        else{
            prime = -1;
        }
    }
    // console.log(prime);
    // getElement("#txtPrime").innerHTML = prime;
    getElement("#txtBai8").innerHTML = prime;
}
getElement("#btnBai8").onclick = printPrime;

/**
 * Bài 9: Đếm số nguyên trong mảng
 */
// hàm nhập mảng số thực
var arrInteger = []

function addInteger(){
    var num = Number(getElement("#addNumberInterger").value);
    arrInteger.push(num);
    getElement("#txtAddInteger").innerHTML = arrInteger;
}
getElement("#btnAddInteger").onclick = addInteger;

//hàm đếm mảng số nguyên

function countInteger(){
    var count = 0;
    for( var i = 0 ; i < arrInteger.length; i++)
    if(Number.isInteger(arrInteger[i])){
        count++;
    }
    getElement("#txtBai9").innerHTML = "Số số nguyên trong mảng là : "+ count;
}
getElement("#btnCountInteger").onclick = countInteger;


/**
 * Bài 10: So Sánh số lượng số dương âm trong mảng
 */

function soSanh(){
    var positive = 0;
    var negative = 0;
    for( var i = 0 ; i<arrNum.length ; i++){
        if (arrNum[i]>0){
            positive++;
        }else{
            negative++;
        }
    }
    if (positive>negative){
        getElement("#txtBai10").innerHTML = "Số dương > Số âm";
    }else if (positive<negative){
        getElement("#txtBai10").innerHTML = "Số âm > Số dương";
    }else if (positive == negative ){
        getElement("#txtBai10").innerHTML = "Số dương = Số âm";
    }
}

getElement("#btnBai10").onclick = soSanh;
function Point(x, y){
     this.x = x;
     this.y = y;
}

function Line(pointA, pointB){
     this.pointA = pointA;
     this.pointB = pointB;
     this.getLength = function(){
         // tính độ dài đường thẳng
//  (p1.x1 - p2.x2) bình phuong + (p1.y1 - p2.y2)binh phuong 
         // tìm từng cạnh
         let dx = this.pointA.x - this.pointB.x;
         let dy = this.pointA.y - this.pointB.y;
         return Math.sqrt(dx*dx + dy*dy)
     }
}

let p1 = new Point(0,0);
let p2 = new Point(2,0);

let line01 = new Line(p1, p2);
console.log(JSON.stringify(line01));
console.log(line01.getLength());

function TamGiac(p1, p2, p3){
     this.p1 = p1;
     this.p2 = p2;
     this.p3 = p3;
     // tính dộ dài 3 cạnh rồi cộng lại
     this.chuVi = function(){
         const l1 = new Line(this.p1, this.p2);
         const l2 = new Line(this.p1, this.p3);
         const l3 = new Line(this.p3, this.p2);
        return l1.getLength() + l2.getLength() + l3.getLength();
     }
}

let tamgiac = new TamGiac(new Point(0,0),new Point(1,0),new Point(1,0));
console.log(tamgiac.chuVi());

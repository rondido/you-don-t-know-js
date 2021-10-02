// //this가 자기 참조를 할 수 없다는 걸 증명
// function foo(num){
//     console.log("foo: " + num);;

//     this.count++;    
// }

// foo.count =0; // foo라는 함수 객체 count 프로퍼티가 추가
//               // this.count에서 this는 함수 객체를 바라보는 것이 아닌 프로퍼티 명이 같아 헷갈리지만 근거지를 둔 객체 자체가 다르다.
// var i;

// for (i=0; i< 10; i++){
//     if(i > 5){
//         foo(i);
//     }
// }

// console.log(foo.count);

// function hoo(cnt){
//     console.log("foo: " + cnt);
//     data.count++;
    
// }

// var data = {
//     count:0
// };

// var i ;
// for (i =0; i<10; i++) {
//     if(i > 5){
//         hoo (i);
//     }
    
// }
// console.log(data.count);

// //렉시컬 스코프 예제
// var x = 1;

// function first(){
//     var x = 10;
//     second();
// }

// function second(){
//     console.log(x);    
// }
// first();
// second();

// function foo(){
//     foo.count = 4; //foo는 자기자신을 가리킨다.
// }
// setTimeout(() => {
//     //익명 함수(이름이 없는 함수)는 자기 자신을 가리킬 방법이 없다.
// }, 10);

// function foo(num){
//     console.log("foo:" + num);
//     //foo가 몇번 호출됐는지 추적
//     foo.count++;
    
// }

// foo.count = 0;

// var i;

// for(i=0; i<10; i++){
//     if(i > 5){
//         foo(i);
//     }
// }
// console.log(foo.count);

// function foo(num){
//     console.log("foo :" + num);
//     //참고: 'this'는 foo를 어떻게 호출하느냐에 따라 진짜 'foo'가 된다.
//     this.count++;
// }
// foo.count = 0;
// var i;
// for(i=0; i<10; i++){
//     if(i > 5){
//         //call() 함수로 호출하므로
//         // this는 이제 확실히 함수 객체 자신을 가리킨다.
//         foo.call(foo, i);
//     }
// }
// console.log(foo.count);

// //호출부와 호출 스택

// function baz(){
//     // 호출 스택: 'baz'
//     // 따라서 호출부는 전역 스코프 내부이다.

//     console.log("baz");
//     bar(); // bar의 호출부    
// }
// function bar(){
//     //호출 스택: 'baz'->'bar'
//     //따라서 호출부는 'baz' 내부다.
    
//     console.log("bar");
//     foo(); // foo의 호출부
    
// }
// function foo(){
//     //호출 스택 : 'baz'->'bar' -> 'foo'
//     //따라서 호출부는 'bar' 내부다.
//     console.log("foo");
// }
// baz();

function foo(){
    console.log(this.a);
    
}

var obj = {
    a: 2,
    foo : foo
}
obj.foo();
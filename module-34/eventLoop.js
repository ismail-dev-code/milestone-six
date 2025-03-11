function a() {
  b();
  console.log("a");
}
function b() {
  c();
  console.log("b");
}
console.log("hello");

setTimeout(() => {
  console.log("ami set time out ");
}, 2000);

setTimeout(() => {
  console.log("ami set time out2 ");
}, 3000);

function c() {
  d();
  console.log("c");
}
function d() {
  e();
  console.log("d");
}
function e() {
  f();
  console.log("e");
}
function f() {
  console.log("f");
}

a();

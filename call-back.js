✅ একটি ফাংশন, যেটি আরেকটি ফাংশনের আর্গুমেন্ট হিসাবে পাঠানো হয় এবং পরে এক্সিকিউট হয়।

function ghotok(patri, name) {
  patri(name);
 
}

const patri = function (name) {
  console.log("patri 1 paici", name);
};

const patri2 = function (name) {
  console.log("patri 2 paici", name);
};
const patri3 = function (name) {
  console.log("patri 3 paici", name);
};


ghotok(patri, "hero alom");
ghotok(patri2, "alom");


একটি ফাংশন যখন আরেকটি ফাংশনের ভিতরে কল করা হয় এবং পরে এক্সিকিউট হয়, তখন তাকে "callback function" বলে।




 "Callback হল এমন একটি ফাংশন, যেটি অন্য একটি ফাংশনের ভিতরে পাঠানো হয় এবং প্রয়োজন হলে পরে কল করা হয়।"
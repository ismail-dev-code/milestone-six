const num1 = "hero";
const num2 = false;

if(num1===num2){
    console.log("This is equal");
}
else{
    console.log("This is not equal");
}



JavaScript-এ Type Conversion (টাইপ কনভার্সন) হলো এক ধরনের প্রক্রিয়া যেখানে একটি ডাটা টাইপ অন্য ডাটা টাইপে পরিবর্তিত হয়। এটি দুইভাবে হতে পারে:

Implicit Type Conversion (Automatic Type Conversion) → JavaScript নিজে থেকে পরিবর্তন করে।
Explicit Type Conversion (Manual Type Conversion) → ডেভেলপার নিজে পরিবর্তন করে।
1. Implicit Type Conversion (Automatic Type Conversion)
এটি তখন ঘটে যখন JavaScript স্বয়ংক্রিয়ভাবে একটি ডাটা টাইপকে অন্য ডাটা টাইপে রূপান্তর করে। একে Type Coercion ও বলা হয়।

উদাহরণ (String + Number → String)
javascript
Copy
Edit
let result = "5" + 2;
console.log(result); // Output: "52" (String)
ব্যাখ্যা: এখানে JavaScript স্বয়ংক্রিয়ভাবে 2 কে স্ট্রিং-এ কনভার্ট করেছে, কারণ + অপারেটর থাকলে এটি স্ট্রিং কনক্যাটেনেশন হিসেবে কাজ করে।

উদাহরণ (Number + Boolean → Number)
javascript
Copy
Edit
let result = 5 + true;
console.log(result); // Output: 6
ব্যাখ্যা: এখানে true কে 1 হিসাবে গণ্য করা হয়েছে এবং 5 + 1 = 6 হয়েছে।

উদাহরণ (Number - String → Number)
javascript
Copy
Edit
let result = "10" - 2;
console.log(result); // Output: 8
ব্যাখ্যা: - অপারেটর থাকলে JavaScript স্ট্রিং "10" কে নম্বারে পরিবর্তন করে, তারপর গাণিতিক হিসাব করে।

2. Explicit Type Conversion (Manual Type Conversion)
এটি তখন ঘটে যখন আমরা নিজের ইচ্ছামতো ডাটা টাইপ পরিবর্তন করি।

(a) String এ রূপান্তর (Convert to String)
javascript
Copy
Edit
let num = 50;
let strNum = String(num);
console.log(strNum); // Output: "50"
console.log(typeof strNum); // Output: string
অথবা,

javascript
Copy
Edit
let strNum = num.toString();
(b) Number এ রূপান্তর (Convert to Number)
javascript
Copy
Edit
let str = "100";
let num = Number(str);
console.log(num); // Output: 100
console.log(typeof num); // Output: number
অথবা,

javascript
Copy
Edit
let num = parseInt("100"); // পূর্ণসংখ্যায় কনভার্ট করবে
let num2 = parseFloat("10.5"); // দশমিক সংখ্যা কনভার্ট করবে
(c) Boolean এ রূপান্তর (Convert to Boolean)
javascript
Copy
Edit
let value1 = Boolean(1);
let value2 = Boolean(0);
let value3 = Boolean("");

console.log(value1); // Output: true
console.log(value2); // Output: false
console.log(value3); // Output: false
👉 সত্য (Truthy) মান: 1, "hello", [], {} এগুলো true রিটার্ন করবে।
👉 মিথ্যা (Falsy) মান: 0, "", null, undefined, NaN এগুলো false রিটার্ন করবে।


➡️ Arguments হল ফাংশনে পাঠানো ইনপুট ভ্যালুগুলো, যা ফাংশনের ভিতরে ব্যবহার করা যায়।

🔹 যখন আমরা একটি ফাংশন কল করি, তখন আমরা কিছু values (arguments) পাঠাতে পারি, যা ফাংশনের ভিতরে parameters হিসেবে গ্রহণ করা হয়।

const person = { name: "abul", age: 10 };

function sum(obj) {
  obj.name = "hero alom";
}
console.log([person]);
sum(person);



arguments হল একটি বিশেষ object, যেখানে ফাংশনে পাঠানো সব arguments স্টোর থাকে।
এটি array-এর মতো কাজ করে, কিন্তু এটি আসল array নয়।


➡️ "Arguments হল ফাংশনে পাঠানো ইনপুট ডাটা, যা arguments object বা Rest Parameter (...args) দ্বারা অ্যাক্সেস করা যায়।"
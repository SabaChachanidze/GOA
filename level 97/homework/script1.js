// innerHTML და textContent გამოიყენება HTML ელემენტების შიგთავსის შესაცვლელად ან წასაკითხად.

// innerHTML საშუალებას გვაძლევს, წავიკითხოთ ან შევცვალოთ ელემენტის HTML შიგთავსი.
// ის აღიქვამს HTML ტეგებს და მათ ინტერპრეტაციას ახდენს.
const div1 = document.createElement('div');
div1.innerHTML = '<strong>გამარჯობა, მსოფლიო!</strong>'; // HTML ტეგი strong ინტერპრეტირდება.
console.log(div1.innerHTML); // <strong>გამარჯობა, მსოფლიო!</strong>

// textContent საშუალებას გვაძლევს, წავიკითხოთ ან შევცვალოთ ელემენტის ტექსტური შიგთავსი.
// ის HTML ტეგებს ტექსტად აღიქვამს და არ ახდენს მათ ინტერპრეტაციას.
const div2 = document.createElement('div');
div2.textContent = '<strong>გამარჯობა, მსოფლიო!</strong>'; // HTML ტეგი strong ტექსტად აღიქმება.
console.log(div2.textContent); // <strong>გამარჯობა, მსოფლიო!</strong>

// ძირითადი განსხვავება:
// innerHTML ინტერპრეტაციას ახდენს HTML ტეგებზე და მათ შიგთავსს HTML-ად აღიქვამს.
// textContent კი HTML ტეგებს უბრალო ტექსტად აღიქვამს და არ ახდენს მათ ინტერპრეტაციას.
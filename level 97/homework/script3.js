const elements = [
    { content: '', style: { color: '', fontWeight: '' } },
    { content: '', style: { color: '', fontWeight: '' } },
    { content: '', style: { color: '', fontWeight: '' } }
];

for (let i = 0; i < elements.length; i++) {
    elements[i].content = `Element ${i + 1}`;
    elements[i].style.color = 'blue';
    elements[i].style.fontWeight = 'bold';
}

console.log(elements);
let colors = [
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black", "white",
    "cyan", "magenta", "lime", "indigo", "teal", "violet", "gold", "silver", "beige", "maroon",
    "navy", "olive", "coral", "turquoise", "salmon", "plum", "orchid", "lavender", "peach", "mint",
    "chocolate", "azure", "crimson", "ivory", "khaki", "amber", "emerald", "sapphire", "ruby", "bronze"
];
const input = document.querySelector('input')
const btn = document.querySelector('button')
const div = document.querySelector('div')
const p = document.querySelector('.main-text p')
colors.forEach(el => {
    let newp = document.createElement('p')
    newp.textContent = `${el}`
    div.appendChild(newp)
})

// colors.forEach(el => {
//     let newp = document.createElement('p')
//     newp.innerHTML = `${el} <button class="delete ${el}">Удалить</button>`
//     div.appendChild(newp)
// })

// document.querySelectorAll('p').forEach(el => el.addEventListener('click', () => {
//     p.textContent = el.textContent
// }))

document.querySelectorAll('p').forEach(el => el.addEventListener('click', () => {
    div.style.background = `${el.textContent}`
}))

btn.addEventListener('click', () => {
    let newp = document.createElement('p')
    if (!colors.includes(input.value)) newp.textContent = `${input.value}`
    else alert('Ошибка')
    div.appendChild(newp)
})
const remlist = document.querySelectorAll('div p')
document.querySelectorAll('.delete').forEach((el, ind) => {
    el.addEventListener('click', () => {
        div.removeChild(remlist[ind])
    })
})
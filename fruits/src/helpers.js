function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function remove(arr, item) {
    const position = arr.indexOf(item)
    arr.splice(position, 1)

    return arr
}
export { choice, remove }
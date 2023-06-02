export const required = (value) => {
    if(value) return undefined
    return 'Введите слово'
}

export const maxLenghtCreater = (maxLengh) => (value) => {
    if( value.length > maxLengh) return `Максимальная длина ${maxLengh}`
    return undefined
}

export const minLenghtCreter = (minLengh) => (value) =>{
    if( value.length < minLengh) return `Минимальная длина ${minLengh}`
}
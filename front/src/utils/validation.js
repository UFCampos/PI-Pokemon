
const validation = (input, errors, setErrors) => {
    const { name, image, types, hp, attack, defense, speed, height, weight } = input
    //regex to check if name has only letters
    const checkName = /^[a-zA-Z]+$/;
    if (!checkName.test(name)) {
        setErrors({
            ...errors,
            name: 'El nombre solo puede contener letras'
        })
    } else {
        setErrors({
            ...errors,
            name: ''
        })
    }
    //regex to check if hp, attack, defense, speed, height, weight are numbers from 1-999
    const checkInteger = /^([1-9]\d{0,2}|999)$/;
    if (!checkInteger.test(hp) || !checkInteger.test(attack) || !checkInteger.test(defense)) {
        setErrors({
            ...errors,
            hp: 'Los números deben ser de 1-999',
            attack: 'Los números deben ser de 1-999',
            defense: 'Los números deben ser de 1-999',
        })
    } else {
        setErrors({
            ...errors,
            hp: '',
            attack: '',
            defense: '',
        })
    }
    if (!checkInteger.test(speed) || !checkInteger.test(height) || !checkInteger.test(weight)) {
        setErrors({
            ...errors,
            speed: 'Los números deben ser de 1-999',
            height: 'Los números deben ser de 1-999',
            weight: 'Los números deben ser de 1-999',
        })
    } else {
        setErrors({
            ...errors,
            speed: '',
            height: '',
            weight: '',
        })
    }
    if (!image) {
        setErrors({
            ...errors,
            image: 'La imagen es obligatoria'
        })
    } else {
        setErrors({
            ...errors,
            image: ''
        })
    }

    //regex to check for URL format
    const checkURL = /^(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?$/;
    if (!checkURL.test(image)) {
        setErrors({
            ...errors,
            image: 'La imagen debe ser una URL'
        })
    } else {
        setErrors({
            ...errors,
            image: ''
        })
    }
}

export default validation
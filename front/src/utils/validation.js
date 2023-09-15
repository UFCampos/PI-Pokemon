
const validation = (input, errors, setErrors) => {
    const { name, image, hp, attack, defense, speed, height, weight } = input;
    const checkName = /^[a-zA-Z]+$/;
    const checkInteger = /^([1-9]\d{0,2}|999)$/;
    const checkURL = /^(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?$/;
    setErrors({
        ...errors,
        name: !checkName.test(name) ? 'El nombre solo puede contener letras' : '',
        hp: !checkInteger.test(hp) ? 'Los números deben ser de 1-999' : '',
        attack: !checkInteger.test(attack) ? 'Los números deben ser de 1-999' : '',
        defense: !checkInteger.test(defense) ? 'Los números deben ser de 1-999' : '',
        speed: !checkInteger.test(speed) ? 'Los números deben ser de 1-999' : '',
        height: !checkInteger.test(height) ? 'Los números deben ser de 1-999' : '',
        weight: !checkInteger.test(weight) ? 'Los números deben ser de 1-999' : '',
        image: !image ? 'La imagen es obligatoria' : !checkURL.test(image) ? 'La imagen debe ser una URL' : ''
    });
}

export default validation
import './PasswordGenerator.css';
const CARACTERES_NUMERICOS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const CARACTERES_ALFABETICOS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const getRandom = (items) => {
    const random = items[Math.floor(Math.random()*items.length)]
    return random
}

const GetNewPassWord = (logitud) => {
    let pass = ""
    for (let index = 0; index < logitud; index++) {
        pass = pass + getRandom(CARACTERES_NUMERICOS)
    }
    return pass
}


function PasswordGenerator() {
  return (
    <div className="App">
        { GetNewPassWord(20) }
    </div>
  );
}

export default PasswordGenerator;

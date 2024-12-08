import { useState } from "react";

function Titulo({cor}) {

    const[texto, setTexto] = useState("Título inicial");
    const[inputText, setInputText] = useState();
    const urlImg = "https://www.pngmart.com/files/23/React-Logo-PNG-Pic-200x200.png"

    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{color:cor}}>{texto}</h1>
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" />
            <button onClick = {clicou} >Mudar</button>

        </div>
    )
}

export default Titulo
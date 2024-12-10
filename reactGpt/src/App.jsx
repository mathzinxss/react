import React, {useState} from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
}

const addItem = () => {
  if(inputValue.trim()) {
    setItems([...items, inputValue]);
    setInputValue("");
  }
}

return(
  <div style={{textAlign: "center", marginTop: "50px"}}>
    <h1>Lista de Itens</h1>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite um item: " />
    <button onClick={addItem}>Adicionar</button>
    <ul>
      {item.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => removeItem(index)}>Remover</button>
        </li> 
      ))}
    </ul>
  </div>
)
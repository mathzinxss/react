# **Criando um projeto com o React**

- Copie o endereço da pasta que será utilizada. `C:\react`
- Clique em `Win + R` e digite `cmd` para entrar no prompt de comando
- No cmd digite `cd C:\react`
- Após entrar na pasta que será utilizada, no terminal digite: `npm create vite@latest "nome do projeto" -- --template reat`
- Depois da confirmação de que deu certo, digite `cd "nome do projeto"`
- Agora digite `code .` para executar o VS Code
- Quando entrar no VS Code, entre no terminal e digite `npm install`
- Para finalizar, digite `npm run dev` para ter acesso ao localhost e acompanhar o visual do projeto.

## **Criando um sistema de rota entre páginas**

- Use o atalho `Crtl + C` para parar o programa no terminal, então digite `npm i react-router-dom` para exportar a biblioteca para o nosso projeto.
- logo em Seguida importe o projeto dentro do `App.jsx`. Usando o seguinte código:

```javascript
import {BrowserRouter, Routes, Route} from "react-router-dom";  
```

- Em seguida crie as tags `BrowserRouter`, `Routes` e `Route` dentro do return, assim: 

```javascript
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Sobre" element={<Sobre />}/>
                    <Route path="/Contato" element={<Contato />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
```
Dentro do `Route` está nossas páginas. Criei três arquivos e um Menu com ligação no meu `App.jsx`.

---

## **Componentes**

No react, componentes são pedaços de códigos que representam partes de uma infraestrutura de usuário (UI) e podemos ser reutilizados em várias partes da aplicação.

### **Na prática**

#### Componentes de Classe

```javascript
import React, { component } from 'react';

class MeuComponente extends Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

export default MeuComponente;
```

#### Componente Funcional

```javascript
function MeuComponente() {
  return <h1>Hello World!</h1>
}

export default MeuComponente;
```

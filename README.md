# **Criando um projeto com o React**

- Copie o endereço da pasta que será utilizada. `C:\react`
- Abra o cmd clicando em `Win + '`
- No cmd digite `cd C:\react`
- Após entrar na pasta que será utilizada, no terminal digite: `npm create vite@latest "nome do projeto" -- --template reat`
- Depois da confirmação de que deu certo, digite `cd "nome do projeto"`
- Agora digite `code .` para executar o VS Code
- Quando entrar no VS Code, entre no terminal e digite `npm install`
- Para finalizar, digite `npm run dev` para ter acesso ao localhost e acompanhar o visual do projeto.

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

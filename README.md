## **Styled Components**

Se crean componentes de css en lugar de usar una hoja de estilos global

```
npm install @emotion/react @emotion/styled
```

### **Sintaxis**
```js
import styled from '@emotion/styled';

...

// Mayuscula al inicio como un componente
const Heading = styled.h1`
    font-size: 2em;
    text-transform: uppercase;
`;

// const Componente = () => { ....
<Heading> Nuestros Productos </Heading>
```
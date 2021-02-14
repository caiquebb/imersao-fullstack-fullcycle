// @flow 
import * as React from 'react';
type Props = {
    
};
export const SubPagina = (props: Props) => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>
                Sub Página
            </h1>
            
            <button onClick={event => setCount(count +1)}>Botão</button>
    
            <p>{count}</p>
        </div>
    );
};

export default SubPagina;
import React from "react";

class Botao extends React.Component {
    render() {
        const color = "blue";
        return(
            <button style={{
                backgroundColor: color
            }}>
                Botão
            </button>
        )
        
    }
}
   
export default Botao;
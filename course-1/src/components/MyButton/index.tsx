import React from 'react';
import style from './MyButton.module.scss'

class MyButton extends React.Component { 
    render() {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}
   
export default MyButton; 

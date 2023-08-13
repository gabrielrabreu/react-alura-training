import React from 'react';
import MyButton from '../MyButton';
import style from './MyForm.module.scss';

class MyForm extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Add a new study task
                    </label>
                    <input
                        type='text'
                        name='task'
                        id='task'
                        placeholder='What you want to study'
                        required
                    />
                </div>
                <div  className={style.inputContainer}>   
                    <label htmlFor='time'>
                        Time
                    </label>
                    <input 
                        type='time'
                        step='1'
                        name='time'
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <MyButton />
            </form>
        )
    }
}

export default MyForm;
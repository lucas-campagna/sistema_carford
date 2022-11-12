import { useRef, useState } from 'react';
import styles from './Form.module.css';


export default function Form({connectionState, onSubmit}){
    const refName = useRef(0);
    const refPass = useRef(0);
    const [disabled, setDisabled] = useState(true);
    
    function isValidInput(username,password){
        // implement validation
        return username !== '' && password !== '';
    }

    function handleOnChage(){
        const [username, password] = [refName.current.value, refPass.current.value];
        setDisabled(!isValidInput(username, password));
    }

    function handlerSubmitClick(){
        // validate first
        const [username, password] = [refName.current.value, refPass.current.value];
        if(onSubmit && isValidInput(username, password))
            onSubmit({username,password});
        refName.current.value = '';
        refPass.current.value = '';
    }

    return (
    <div className={styles.LoginForm}>
        <div className={styles.LoginFormInput}>
            <label className={styles.LoginFormInputInput}>Login</label>
            <input type="text" ref={refName} onChange={handleOnChage}/>
            <label className={styles.LoginFormInputInput}>Senha</label>
            <input type="password" ref={refPass} onChange={handleOnChage}/>
        </div>
        <input
            className={styles.LoginFormSubmitButton}
            type="button"
            value="Entrar"
            disabled={disabled}
            onClick={handlerSubmitClick}
        />
    </div>
    );
}
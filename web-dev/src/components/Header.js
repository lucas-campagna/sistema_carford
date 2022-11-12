import styles from './Header.module.css';

export default function Headers({connectionState}){
    return (
        <div className={styles.HeaderRoot}>
            <div className={styles.Items}>
            {
                connectionState.username !== ''?
                `Olá, ${connectionState.username}!`
                :
                'Sistema de Gerenciamento Carford'
                
            }
            </div>
        </div>
    );
}
import styles from './Header.module.css';

export default function Headers({ connectionState, onLogout }) {
    return (
        <div className={styles.HeaderRoot}>
            <div className={styles.Items}>
                {
                    connectionState.username !== '' ?
                        <div className={styles.LoginItems}>
                            <span
                                className={styles.headerLogoutButton}
                                onClick={onLogout}
                            >
                                Logout
                            </span>
                            <span>Carford</span>
                            <span>{`Olá, ${connectionState.username}!`}</span>
                        </div>
                        :
                        'Sistema de Gerenciamento Carford'
                }
            </div>
        </div>
    );
}
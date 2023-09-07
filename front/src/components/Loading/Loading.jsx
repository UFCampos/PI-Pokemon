import styles from '../Modal/Modal.module.scss'

const Loading = () => {
    return (
        <div className={styles.modal}>
            <div className={styles['modal-content']}>
                <div className={styles.loader}>
                </div>
                <h2 className={styles['modal-title']}>Loading...</h2>
            </div>
        </div>
    )
}

export default Loading
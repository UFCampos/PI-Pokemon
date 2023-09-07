import styles from './Modal.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Modal = ({children }) => {
    const isOpen = useSelector(state => state.isModalOpen);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeModal());
    };

    if (!isOpen) return null

    if (children.name) return (
        <div className={styles.modal}>
            <div className={styles['modal-content']}>                
                <Link to={`/pokemon/${children.id}`}>
                <img onClick={handleClose} src={children.image} alt="" />
                <h2 onClick={handleClose} className={styles['modal-title']}>{children.name}</h2>
                </Link>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )

    return (
        <div className={styles.modal}>
            <div className={styles['modal-content']}>
                <h2 className={styles['modal-title']}>No se ha encontrado el pokemon</h2>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
  };
  
  export default Modal;
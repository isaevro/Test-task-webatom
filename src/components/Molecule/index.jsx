import { useDispatch } from 'react-redux'
import { addToSelfMade, removeCartItem } from '../../redux'
import styles from './Molecule.module.scss'

const Molecule = ({ molecule, myComposition }) => {
  const dispatch = useDispatch()
  return (
    <li className={styles.molecule}>
      <div className={styles.choose}>
        <div>{molecule.title}</div>
        <div>цена: {molecule.discount_price} $</div>
      </div>
      <img
        className={styles.click}
        onClick={() =>
          dispatch(
            addToSelfMade({
              id: molecule._id,
              discount_price: molecule.discount_price,
              price: molecule.price,
            }),
            dispatch(removeCartItem('My Salad')),
          )
        }
        src={
          myComposition.includes(molecule._id)
            ? './img/added.svg'
            : './img/add.svg'
        }
        alt="add to salad"
      />
    </li>
  )
}

export default Molecule

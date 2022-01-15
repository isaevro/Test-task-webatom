import { useDispatch, useSelector } from 'react-redux'
import { addToSelfMade } from '../../redux'
import styles from './Molecule.module.scss'

const Molecule = ({ molecule, myComposition }) => {
  // const { myComposition } = useSelector((state) => state.selfMade)
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

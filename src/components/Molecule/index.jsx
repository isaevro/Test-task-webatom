import styles from './Molecule.module.scss'

const Molecule = ({ molecule, handleAddToMySalad, myComposition }) => {
  return (
    <li className={styles.molecule}>
      <div className={styles.choose} >
        <div>{molecule.title}</div>
        <div>цена: {molecule.discount_price} $</div>
      </div>
      <img className={styles.click}
        onClick={() =>
          handleAddToMySalad({
            id: molecule._id,
            price: molecule.discount_price,
            oldPrice: molecule.price,
          })
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

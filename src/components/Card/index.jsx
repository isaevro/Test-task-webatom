import styles from './Card.module.scss'

const Card = ({
  title,
  price,
  addToCart,
  isCartAdded,
  molecules,
  composition,
  discount_price,
}) => {
  const handleClickAdd = () => {
    addToCart()
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <img
          width={133}
          height={112}
          src="/img/salad.jpg"
          alt="salad"
          className="yeezy-card-img"
        />
        <div className={styles.title}>{title}</div>

        <p className={styles.subtext}>
          состав:{' '}
          {composition.map((mol) => (
            <span key={mol}>
              {molecules &&
                molecules
                  .filter((e) => e._id === mol)
                  .map((e) => e.title + ' ')}
            </span>
          ))}
        </p>
        <div className={styles.price}>
          <div className={styles.priceInner}>
            <p>ЦЕНА:</p>
            <b>
              {discount_price} ${' '}
              <span className={styles.oldprice}>{price} $</span>{' '}
            </b>
          </div>
          <img
            onClick={handleClickAdd}
            src={isCartAdded ? './img/added.svg' : './img/add.svg'}
            alt="add to cart"
          />
        </div>
      </div>
    </div>
  )
}

export default Card

// import "./styles.css"
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <h2>Card Title</h2>
      <p>Card Description</p>
    </div>
  );
};

export default Card;

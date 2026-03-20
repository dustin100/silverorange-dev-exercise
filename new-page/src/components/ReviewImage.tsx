import styles from "./ReviewImage.module.css";
import reviewImage from "../assets/headphones-photo.jpg"

const ReviewImage = () => {
  return (
    <img
      className={styles.image}
      src={reviewImage}
      alt="Headphones"
    />
  );
};

export default ReviewImage;

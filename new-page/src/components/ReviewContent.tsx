import amazonLogo from "../assets/amazon-logo.png";
import styles from "./ReviewContent.module.css";

type Highlight = {
  emoji: string;
  label: string;
  text: string;
};

type ReviewContentProps = {
  label: string;
  title: string;
  score: number;
  scoreEmoji: string;
  store: string;
  price: string;
  buyUrl: string;
  highlights: Highlight[];
  body: string;
};

const ReviewContent = ({
  label,
  title,
  score,
  scoreEmoji,
  store,
  price,
  buyUrl,
  highlights,
  body,
}: ReviewContentProps) => {
  return (
    <div className={styles.content}>
      <div className="wrapper">
        <div className={styles.titleBlock}>
          <span className={styles.label}>{label}</span>
          <h1 className={styles.title}>{title}</h1>
        </div>

        <div className={styles.scoreRow}>
          <div className={styles.emojiRing}>
            <span className={styles.emoji}>{scoreEmoji}</span>
            <p className={styles.score}>
              <span className={styles.scoreValue}>{score}</span>/10
            </p>
          </div>
          <div className={styles.priceTag}>
            <p className={styles.store}>{store}</p>
            <p className={styles.price}>{price}</p>
          </div>
        </div>

        <div className={styles.buyRow}>
          <a className={styles.buyButton} href={buyUrl} role="button">
            <span>Buy on</span>
            <img src={amazonLogo} alt="Amazon" />
          </a>
        </div>

        <div className={styles.highlights}>
          {highlights.map((h) => (
            <div key={h.label} className={styles.highlight}>
              <span className={styles.highlightEmoji}>{h.emoji}</span>
              <div>
                <span className={styles.highlightLabel}>{h.label}</span> {h.text}
              </div>
            </div>
          ))}
        </div>

        <p className={styles.body}>{body}</p>
       </div>
    </div>
  );
};

export default ReviewContent;

import styles from "./Profile.module.css";
import profilePic from "../assets/profile-pic.png";


const Profile = () => {
  return (
    <div className={`${styles.profile} wrapper`}>
      <img
        className={styles.avatar}
        src={profilePic}
        alt="John Smitherington"
      />
      <div>
        <p className={styles.name}>John Smitherington</p>
        <p className={styles.location}>Boise, Idaho</p>
      </div>
    </div>
  );
};

export default Profile;

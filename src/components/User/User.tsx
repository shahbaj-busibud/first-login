import styles from "./User.module.css";
import icon from "../../assets/Group2190@2x.png";
import editIcon from "../../assets/pencil.png";

const User = () => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}>
                <p>LI</p>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles.username}>
                <h1>Joanne White</h1>
                <h3>Admin</h3>
                <div>
                    <h4>Add profile picture</h4>
                    <img src={editIcon} alt="edit button" />
                </div>
            </div>
        </div>
    );
};

export default User;

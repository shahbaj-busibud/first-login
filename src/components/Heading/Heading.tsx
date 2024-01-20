import styles from "./Heading.module.css";
import icon from "../../assets/information.png";

const Heading = () => {
    return (
        <div className={styles.container}>
            <h1>Edit Profile details</h1>
            <div>
                <img src={icon} alt="icon" />
                <p>
                    Don't worry you will be able to change them later on in
                    settings as well
                </p>
            </div>
        </div>
    );
};

export default Heading;

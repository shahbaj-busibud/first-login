import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.container}>
            <img src="https://picsum.photos/25" />
            <p>Saufter.io</p>
        </div>
    );
};

export default Logo;

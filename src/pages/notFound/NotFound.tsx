import styles from "./NotFound.module.css";

export const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.description}>
                    We're sorry, the page you are looking for cannot be found.
                    It may have been moved, deleted, or the URL may be incorrect.
                </p>

                <div className={styles.buttonGroup}>
                    <button onClick={() => (window.location.href = "/")} className={styles.secondaryBtn} > Homepage </button>
                    <button onClick={() => window.history.back()}        className={styles.secondaryBtn} > Go Back </button>
                </div>

                <div className={styles.supportWrapper}>
                    <p className={styles.supportText}>Need assistance? <a href="mailto:support@company.com" className={styles.supportLink}>Contact us
                    </a></p>
                </div>
            </div>
        </div>
    );
};

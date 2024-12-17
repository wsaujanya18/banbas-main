import styles from './Landing.module.css';
import Header from '../navbar/Navbar';

const Landing = () => {

    return (
        <section className={styles.hero}>
            <Header />
            <div className={styles.heroBackground}>
                    <div className={styles.heroBackgroundImage}></div>
            </div>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.flexbox}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroHeading}>OUR STORY</h1>
                            <p className={styles.heroEntry}>Story Behind Banbas | Sustainability | Chitwan National Park</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;

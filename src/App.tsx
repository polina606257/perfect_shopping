import { Fragment } from "react";
import styles from "./app.module.scss";

function App() {
  return (
    <Fragment>
      <nav>
        <div className={styles.logo}>
          <img src="crown-icon.png" alt="Crown Icon" />
        </div>
        <ul className={styles.nav_links}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
        <div className={styles.purchase_icon}>
          <img src="purchase-icon.png" alt="Purchase Icon" />
        </div>
      </nav>

      <section className={styles.grid}>
        <div className={styles.grid_item}>
          <img src="background-photo-1.jpg" alt="Background Photo" />
          <div className={styles.grid_content}>
            <h2>Hat</h2>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className={styles.grid_item}>
          <img src="background-photo-2.jpg" alt="Background Photo" />
          <div className={styles.grid_content}>
            <h2>Hat</h2>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className={styles.grid_item}>
          <img src="background-photo-3.jpg" alt="Background Photo" />
          <div className={styles.grid_content}>
            <h2>Hat</h2>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className={styles.grid_item}>
          <img src="background-photo-4.jpg" alt="Background Photo" />
          <div className={styles.grid_content}>
            <h2>Hat</h2>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className={styles.grid_item}>
          <img src="background-photo-5.jpg" alt="Background Photo" />
          <div className={styles.grid_content}>
            <h2>Hat</h2>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;

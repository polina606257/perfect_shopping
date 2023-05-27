import styles from "./category_item.module.scss";

function CategoryItem() {
  return (
    <div className={styles.category_item}>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg" />
      <div className={styles.category_content}>
        <h2 className={styles.category_name}>HAT</h2>
        <a className={styles.category_link} href="#">
          SHOP NOW
        </a>
      </div>
    </div>
  );
}
export default CategoryItem;

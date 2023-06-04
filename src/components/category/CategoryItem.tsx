import Category from "../../model/Caregory";
import "./category_item.styles.scss";

const CategoryItem: React.FC<{ category: Category }> = (props) => {
  return (
    <div className="category">
      <img src={props.category.image} alt="shop category" />
      <div className="content">
        <h2 className="name">{props.category.name}</h2>
        <a className="link" href="#">
          SHOP NOW
        </a>
      </div>
    </div>
  );
};
export default CategoryItem;

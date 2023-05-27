import Category from "../../model/Caregory";
import "./category_item.styles.scss";

const CategoryItem: React.FC<{ category: Category }> = (props) => {
  return (
    <div className="category_item">
      <img src={props.category.image} />
      <div className="category_content">
        <h2 className="category_name">{props.category.name}</h2>
        <a className="category_link" href="#">
          SHOP NOW
        </a>
      </div>
    </div>
  );
};
export default CategoryItem;

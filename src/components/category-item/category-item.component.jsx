import { useNavigate } from 'react-router-dom';
import { BackGroundImage, Body, CategoryItemContainer } from './category-item.style.jsx'

const CategoryItem = ({category}) =>{
 
    const { imageUrl, title, route } = category;

    const navigate = useNavigate()

    const navigationHandler = () =>{
      navigate(route);
    }

    return (
        <CategoryItemContainer onClick={navigationHandler} >
          <BackGroundImage imgUrl={imageUrl} > </BackGroundImage>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoryItemContainer>
    )

}

export default CategoryItem
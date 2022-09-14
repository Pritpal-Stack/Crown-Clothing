import { BackGroundImage, Body, CategoryItemContainer } from './category-item.style.jsx'

const CategoryItem = ({category}) =>{
 
    const { imageUrl, title } = category;

    return (
        <CategoryItemContainer>
          <BackGroundImage imgUrl={imageUrl} > </BackGroundImage>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </CategoryItemContainer>
    )

}

export default CategoryItem
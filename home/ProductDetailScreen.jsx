import { GlobaScrolllView } from "../style/navigationStyle";
import { ProductView, ProductExpainText, ProductKeywordText, ProductNameText, ProductPriceText, ProductTitleText } from "../style/productDetailStyle";
import { WithLocalSvg } from 'react-native-svg';
export const ProductDetailScreen = ({ route }) => {
    const { props } = route.params;
    console.log(props)
    return (
        <GlobaScrolllView>
            <ProductView>
                <WithLocalSvg asset={props.img[0]} />
                <ProductTitleText>{props.title}</ProductTitleText>
                <WithLocalSvg asset={props.user_img} width={70} height={70} />
                <ProductNameText>{props.name}</ProductNameText>
            </ProductView>
        </GlobaScrolllView>
    );
}
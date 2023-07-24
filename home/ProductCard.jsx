import React from 'react';
import { CardImage, CardPriceText, CardTextView, CardTimeText, CardTitleText, CardView } from "../style/cardStyle";
import { useNavigation } from '@react-navigation/native';
import { WithLocalSvg } from 'react-native-svg';
export const ProductCard = ({ props }) => {
    const navigation = useNavigation();
    const handleProductPress = (props) => {
        navigation.navigate('ProductDetail', { props: props });
    };
    return (
        <CardView onPress={() => handleProductPress(props)}>
            <WithLocalSvg asset={props.img[0]} width={120} height={120} />
            <CardTextView>
                <CardTitleText>{props.title}</CardTitleText>
                <CardPriceText>{props.price} 원</CardPriceText>
                <CardTimeText>몇분 전</CardTimeText>
            </CardTextView>
        </CardView>
    )
}
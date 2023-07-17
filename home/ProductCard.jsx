import React from 'react';
import { CardImage, CardPriceText, CardTextView, CardTimeText, CardTitleText, CardView } from "../style/cardStyle";
export const Item = (props) => (
    <CardView>
        <CardImage source={props.image} />
        <CardTextView>
            <CardTitleText>{props.title}</CardTitleText>
            <CardPriceText>{props.price} 원</CardPriceText>
            <CardTimeText>몇분 전</CardTimeText>
        </CardTextView>
    </CardView>
)
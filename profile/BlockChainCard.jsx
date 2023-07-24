import React from 'react';
import { WithLocalSvg } from 'react-native-svg';
import { CardChainIcon, CardChainIconView, CardChainPriceText, CardChainTitleText, CardChainView } from '../style/chainCardStyle';

export const BlockChainCard = (props) => (
    <CardChainView>
        <CardChainIconView>
            <CardChainIcon>
                <WithLocalSvg asset={props.img} />
            </CardChainIcon>
            <CardChainPriceText numberOfLines={1} ellipsizeMode="tail">{props.price}</CardChainPriceText>
            <CardChainTitleText numberOfLines={1} ellipsizeMode="tail">{props.name}</CardChainTitleText>
        </CardChainIconView>
    </CardChainView>
)
import { styled } from "styled-components/native"
import { CardWhiteText } from "./cardStyle"

export const CardChainFlatList = styled.FlatList`
    border-radius: 8px;
`
export const CardChainView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
`
export const CardChainIcon = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
`
export const CardChainIconView = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`
export const CardChainPriceText = styled(CardWhiteText)`
    font-size: 17px;
`
export const CardChainTitleText = styled(CardWhiteText)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    max-width: 50px;
    min-width: 50px;
`
export const ChainAddButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 5%;
    right: 7%;
`
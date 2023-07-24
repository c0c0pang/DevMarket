import { styled } from "styled-components/native";

export const CardWhiteText = styled.Text`
    color: white;
`;
export const CardBlackText = styled.Text`
    color: black;
`;
export const CardFlatList = styled.FlatList`
    border-radius: 10px;
`;
export const CardView = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 8px;
    border-bottom-width: 1px;
    border-color:gray;
`;
export const CardImage = styled.Image`
    border-radius: 3px;
    width: 120px;
    height: 100px;
`;
export const CardTextView = styled.View`
    display: flex;
    justify-content: space-between;
    padding: 2px;
    padding-left: 20px;
`;
export const CardTitleText = styled(CardWhiteText)`
    font-size: 20px;
    font-weight: 500;
`;
export const CardPriceText = styled(CardWhiteText)`
    font-size: 16px;
`;
export const CardTimeText = styled(CardWhiteText)`
    font-size: 12px;
`;
import { styled } from "styled-components/native";

const CardText = styled.Text`
    color: white;
`;
export const CardFlatList = styled.FlatList`
`;
export const CardView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 8px;
    border-bottom-width: 1px;
    border-color:gray;
`;
export const CardImage = styled.Image`
    border-radius: 3px;
`;
export const CardTextView = styled.View`
    display: flex;
    justify-content: space-between;
    padding: 2px;
    padding-left: 20px;
`;
export const CardTitleText = styled(CardText)`
    font-size: 20px;
    font-weight: 500;
`;
export const CardPriceText = styled(CardText)`
    font-size: 16px;
`;
export const CardTimeText = styled(CardText)`
    font-size: 12px;
`;

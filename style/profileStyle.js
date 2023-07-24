import { styled } from "styled-components/native";
import { CardBlackText, CardWhiteText } from "./cardStyle";
export const ProfileView = styled.View`
    display: flex;
    padding: 25px;
    gap: 30px;
`
export const ProfileHeaderView = styled.View`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 20px;
`
export const ProfileName = styled(CardWhiteText)`
    font-size: 20px;
    font-weight: 600;
`
export const ProfileMiddleView = styled.TouchableOpacity`
    display: flex;
    align-items: center;
`
export const ProfileModifyButton = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E4E4E4;
    width: 335px;
    height: 45px;
    border-radius: 4px;
`
export const ProfileModifyText = styled(CardBlackText)`
    font-weight: bold;
    font-size: 17px;
`
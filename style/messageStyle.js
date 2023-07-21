import { styled } from "styled-components/native";
import { CardWhiteText } from "./cardStyle";
export const ChatCardView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 10px;
    margin-bottom: 10px;
`
export const ChatUserView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`
export const ChatUserText = styled(CardWhiteText)`
    max-width: 60px;
`
export const ChattingText = styled(CardWhiteText)`
    font-size: 16px;
`
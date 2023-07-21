import { ChatCardView, ChatUserText, ChatUserView, ChattingText } from "../style/messageStyle"
import { WithLocalSvg } from 'react-native-svg';
import UserIcon from '../assets/UserImg.svg'
export const ChatCard = (props) => (
    <ChatCardView>
        <ChatUserView>
            <WithLocalSvg asset={UserIcon} width={40} />
            <ChatUserText numberOfLines={1} ellipsizeMode="tail">{props.name}</ChatUserText>
        </ChatUserView>
        <ChattingText numberOfLines={1} ellipsizeMode="tail">{props.chat}</ChattingText>
    </ChatCardView>
)

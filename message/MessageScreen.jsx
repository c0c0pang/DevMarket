import { MessageData } from "../home/data";
import { CardFlatList } from "../style/cardStyle";
import { GlobaScrolllView } from "../style/navigationStyle";
import { ChatCard } from "./ChatCard";

export const MessageScreen = () => {
    return (
        <GlobaScrolllView>
            <CardFlatList
                data={MessageData}
                renderItem={({ item }) => <ChatCard name={item.name} chat={item.chat} />}
                keyExtractor={item => item.id}
            />
        </GlobaScrolllView>
    );
}
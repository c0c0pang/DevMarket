import { CardFlatList } from "../style/cardStyle";
import { GlobaScrolllView } from "../style/navigationStyle";
import { Item } from "./ProductCard";
import { DATA } from "./data";

export const HomeScreen = () => {
    return (
        <GlobaScrolllView>
            <CardFlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} image={item.img} price={item.price} />}
                keyExtractor={item => item.id}
            />
        </GlobaScrolllView>
    );
}
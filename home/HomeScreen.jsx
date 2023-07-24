import { CardFlatList } from "../style/cardStyle";
import { GlobaScrolllView } from "../style/navigationStyle";
import { ProductCard } from "./ProductCard";
import { DATA } from "./data";

export const HomeScreen = () => {
    return (
        <GlobaScrolllView>
            <CardFlatList
                data={DATA}
                renderItem={({ item }) => <ProductCard props={item} />}
                keyExtractor={item => item.id}
            />
        </GlobaScrolllView>
    );
}
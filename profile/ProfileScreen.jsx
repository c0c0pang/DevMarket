import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileHeaderView, ProfileMiddleView, ProfileModifyButton, ProfileModifyText, ProfileName, ProfileView } from '../style/profileStyle';
import { GlobaScrolllView } from '../style/navigationStyle';
import { WithLocalSvg } from 'react-native-svg';
import UserIcon from '../assets/UserImg.svg'
import AddIcon from '../assets/AddIcon.svg'
import { BlockChain } from '../home/data';
import { BlockChainCard } from './BlockChainCard';
import { CardChainFlatList, ChainAddButton } from '../style/chainCardStyle';
export const ProfileScreen = () => {
    return (
        <GlobaScrolllView>
            <SafeAreaView>
                <ProfileView>
                    <ProfileHeaderView>
                        <WithLocalSvg asset={UserIcon} width={80} height={80} />
                        <ProfileName>멋쟁이 토마토</ProfileName>
                    </ProfileHeaderView>
                    <ProfileMiddleView>
                        <ProfileModifyButton>
                            <ProfileModifyText>수정하기</ProfileModifyText>
                        </ProfileModifyButton>
                    </ProfileMiddleView>
                    <CardChainFlatList
                        data={BlockChain}
                        renderItem={({ item }) => <BlockChainCard name={item.name} price={item.price} img={item.img} />}
                        keyExtractor={item => item.id}
                    />
                </ProfileView>
            </SafeAreaView>
            <ChainAddButton>
                <WithLocalSvg asset={AddIcon} />
            </ChainAddButton>
        </GlobaScrolllView >
    );
}
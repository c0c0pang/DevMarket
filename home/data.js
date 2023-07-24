import DefaultImage from '../assets/DefaultImg.svg'
import EthereumIcon from '../assets/EthereumIcon.svg'
import KlayIcon from '../assets/KlayIcon.svg'
import NearIcon from '../assets/NearIcon.svg'
import UserImg from '../assets/UserImg.svg'
export const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        price: 30000,
        img: [DefaultImage],
        name: '멋쟁이 토마토',
        keyword: '패션/잡화',
        expain: '이 신발은 언제 샀고 얼마나 신었으며 가격 흥정은 없습니다.',
        coin: ['ETH', 'KLAY', 'NEAR'],
        user_img: UserImg
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        price: 2000,
        img: [DefaultImage],
        name: '멋쟁이 기린',
        keyword: '패션/잡화',
        expain: '이 신발은 언제 샀고 얼마나 신었으며 가격 흥정은 없습니다.',
        coin: ['ETH', 'NEAR'],
        user_img: UserImg
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        price: 550000,
        img: [DefaultImage],
        name: '멋쟁이 사자',
        keyword: '패션/잡화',
        expain: '이 신발은 언제 샀고 얼마나 신었으며 가격 흥정은 없습니다.',
        coin: ['KLAY', 'NEAR'],
        user_img: UserImg
    },
];

export const MessageData = [
    {
        id: 0,
        name: '멋쟁이 토토토',
        chat: '메세지를 입력하세요...'
    },
    {
        id: 1,
        name: '멋쟁이 토쟁이',
        chat: '메세지를 입력하세요...'
    },
    {
        id: 2,
        name: '멋쟁이 토마토',
        chat: '메세지를 입력하세요...'
    },
    {
        id: 3,
        name: '멋쟁이 사자',
        chat: '메세지를 입력하세요...'
    },
    {
        id: 4,
        name: '멋쟁이 호랑이',
        chat: '메세지를 입력하세요...'
    }

]

export const BlockChain = [
    {
        id: 0,
        img: EthereumIcon,
        name: 'ETH',
        price: 2.123,
    },
    {
        id: 1,
        img: KlayIcon,
        name: 'Klay',
        price: 10.123,
    },
    {
        id: 2,
        img: NearIcon,
        name: 'Near',
        price: 3.123,
    }
]
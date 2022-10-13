const advertisement = [
    {
        id: 1,
        title: 'ESL One',
        image: 'https://static.acer.com/up/Resource/Acer/Events/eslone-events/ESL_ONE_DOTA_MAJOR_STOCKHOLM_2022/20220505/Dota_Major_2022_AGW_Landing_Page_Banner_480x480.jpg',
        intro:'Join the ESL One eSports tournament today'
    },
    {
        id: 2,
        title: 'Rainbow Six eSport',
        image: 'https://static.acer.com/up/Resource/Acer/Events/rainbow-six-events/six-na-and-eu-finals-2021_/20220128/R6_SI_Tertiary_480x480.jpg',
        intro: 'Become a professional esport player in Rainbow Six'
    },
    {
        id: 3,
        title: 'PredatorSense',
        image: 'https://static.acer.com/up/Resource/Acer/Predator/Predator_Sense/20210705/predatorsense-predterban.jpg',
        intro:'Proprietary software integrated on Acer Predator gaming laptops'
    },
    {
        id: 4,
        title: 'JOIN NOW',
        image: 'https://static.acer.com/up/Resource/Acer/Predator/Homepage/Tertiary_Banners/20220718/Planet9.png',
        intro:'Planet 9, eSports platform for the next generation'      
    }
]
const AVERTISEMENT_KEY = 'ADVERTISEMENT';

localStorage.setItem(AVERTISEMENT_KEY, JSON.stringify(advertisement));
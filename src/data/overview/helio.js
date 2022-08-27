const helio = [
    {
        id: 1,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20220124/1/Predator-Helios-300-Homepage-Photo.png',
        name: 'Predator Helios 300'
    },
    {
        id: 2,
        image: 'https://static.acer.com/up/Resource/Acer/Predator/Homepage/Featured_Products/20220808/Predator-helios-300-spatiallabs-edition-homepage.png',
        name: 'Predator Helios 300 spatiallabs Edition'
    },
    {
        id: 3,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210618/Helios-500.png',
        name: 'Predator Helios 500'
    },
]
const HELIO_STORAGE_KEY = 'HELIO'

localStorage.setItem(HELIO_STORAGE_KEY, JSON.stringify(helio))
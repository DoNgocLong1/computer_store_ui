const gear = [
    {
        id: 1,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210617/CESTUS-335.png',
        name: 'Predator Cestus 300'
    },
    {
        id: 2,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210617/Aethon-301-TKL.png',
        name: 'Predator Aethon 301 TKL'
    },
]
const GEAR_STORAGE_KEY = 'GEAR'

localStorage.setItem(GEAR_STORAGE_KEY, JSON.stringify(gear))
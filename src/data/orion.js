const orion = [
    {
        id: 1,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20220124/Predator-Orion-3000-Homepage-Photo.png',
        name: 'Predator Oriton 300'
    },
    {
        id: 2,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20220124/Predator-Orion-5000-Homepage-Photo.png',
        name: 'Predator Oriton 500'
    },
    {
        id: 3,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20220124/Predator-Orion-7000-Homepage-Photo.png',
        name: 'Predator Oriton 700'
    },
 
]
const ORION_STORAGE_KEY = 'ORION'

localStorage.setItem(ORION_STORAGE_KEY, JSON.stringify(orion))
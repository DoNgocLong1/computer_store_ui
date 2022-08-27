const triton = [
    {
        id: 1,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210618/1/Triton_300.png',
        name: 'Predator Triton 300'
    },
    {
        id: 2,
        image: 'https://static.acer.com/up/Resource/Acer/Predator/Homepage/Featured_Products/20220725/Triton%20300%20SE%20OLED.png',
        name: 'Predator Triton 300 SE Oled'
    },
    {
        id: 3,
        image: 'https://static.acer.com/up/Resource/Acer/Predator/Homepage/Featured_Products/20220725/Triton%20300%20SE%2016.png',
        name: 'Predator Triton 300 SE'
    },
    {
        id: 4,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20220124/Predator-Triton-500-SE-Homepage-Photo.png',
        name: 'Predator Triton 500 SE'
    }
]
const TRITON_STORAGE_KEY = 'TRITON'

localStorage.setItem(TRITON_STORAGE_KEY, JSON.stringify(triton))
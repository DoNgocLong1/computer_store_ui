const imageSlide = [
    {
        id: 1,
        image: 'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_300/spatiallabs-edition/20220509/predator-laptop-helios-300-spatiallabs-edition-nvidia-rtx-gpu-l.jpg'
    },
    {
        id: 2,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Product_Series/Predator_Helios_500/rev-may-2021/20210524/HELIOS_500_KSP_7.jpg'
    },
    {
        id: 3,
        image: 'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_300/spatiallabs-edition/20220509/predator-laptop-helios-300-spatiallabs-edition-next-gen-cooling-l.jpg'
    },
    {
        id: 4,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Product_Series/Predator_Helios_500/rev-may-2021/20210628/Predator-HELIOS_500_KSP_2_Large.jpg'
    },
    {
        id: 5,
        image: 'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_300/spatiallabs-edition/20220509/predator-laptop-helios-300-spatiallabs-edition-performance-l.jpg'
    },
    {
        id: 6,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Product_Series/Predator_Helios_500/rev-may-2021/20210628/Predator-HELIOS_500_KSP_11.jpg'
    }
]
const IMAGE_SLIDE_STORAGE_KEY = 'SLD_CARD'

localStorage.setItem(IMAGE_SLIDE_STORAGE_KEY, JSON.stringify(imageSlide))
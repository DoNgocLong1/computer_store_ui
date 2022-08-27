const monitor = [
    {
        id: 1,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210617/X28.png',
        name: 'Predator x28'
    },
    {
        id: 2,
        image: 'https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210617/X38.png',
        name: 'Predator x38'
    },
]
const MONITOR_STORAGE_KEY = 'MONITOR'

localStorage.setItem(MONITOR_STORAGE_KEY, JSON.stringify(monitor))
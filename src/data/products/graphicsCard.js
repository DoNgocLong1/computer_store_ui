const graphicsCard = [
    {
        id: 'SKU: 210600462',
        name: 'Card màn hình GIGABYTE R69XTGAMING OC-16GD 16GB GDDR6',
        image: 'https://anphat.com.vn/media/product/37145_9.png',
        brand: 'GIGABYTE',
        price: '51.600.000'
    },
    {
        id: 'SKU: 210600463',
        name: 'Card màn hình GIGABYTE R69XTAORUS M-16GD 16GB GDDR6',
        image: 'https://product.hstatic.net/1000026716/product/aorus_radeon__rx_6900_xt_master_16g-09_d4a81e53df6c479e83e1f521f63790d2.png',
        brand: 'GIGABYTE',
        price: '54.100.000'
    },
    {
        id: 'SKU: 210600464',
        name: 'Card màn hình ASUS ROG Strix LC Radeon RX 6900 XT 16GB GDDR6 ROG-STRIX-LC-RX6900XT-T16G-GAMING',
        image: 'https://product.hstatic.net/1000026716/product/aorus_radeon__rx_6900_xt_master_16g-09_d4a81e53df6c479e83e1f521f63790d2.png',
        brand: 'ASUS',
        price: '69.290.000'
    },
    {
        id: 'SKU: 210600465',
        name: 'Card màn hình ASUS ROG Strix LC Radeon RX 6900 XT 16GB GDDR6 ROG-STRIX-LC-RX6900XT-O16G-GAMING',
        image: 'https://3dcomputer.vn/uploads/images/products/cac-man-hinh/6900/asus/rog-strix-lc-rx6900xt/h732.png',
        brand: 'ASUS',
        price: '48.190.000'
    },
    {
        id: 'SKU: 210600466',
        name: 'Card màn hình ASUS TUF GAMING Radeon RX 6900 XT 16GB GDDR6 TUF-RX6900XT-O16G-GAMING',
        image: 'https://anphat.com.vn/media/product/35882_download.png',
        brand: 'ASUS',
        price: '47.190.000'
    }
]
const CARD_STORAGE_KEY = 'VIK_CARD';

localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(graphicsCard));
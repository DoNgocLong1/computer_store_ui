const computers = [
    {
        id: 'NBAC0296',
        name: 'Laptop Acer Predator Helios 300 PH315-54-78W5 NH.QC5SV.001 (Core i7-11800H | 8GB | 512GB | RTX™ 3050Ti 4GB | 15.6 inch FHD | Win 10 | Đen)',
        image: 'https://anphat.com.vn/media/product/38316_predator_helios_300_ph_315_54_bl1_bk_01b.png',
        brand: 'Acer',
        CPU: 'Intel® Core™ i7-11800H (upto 4.60GHz, 24MB)',
        RAM: '8GB DDR4 3200MHz (2 khe rời, nâng cấp tối đa 32GB)',
        hardware: '512GB PCIe NVMe SSD',
        VGA: 'NVIDIA® GeForce RTX™ 3050Ti 4GB GDDR6',
        price: '33.900.000'
    },
    {
        id: 'NBAC0297',
        name: 'PREDATOR HELIOS 300 SPATIALLABS™ EDITION 3D UNLEASHED',
        image: 'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_300_SpatialLabs_Edition/Images/20220512/predator-helios-300-ph315-55s-spatiallabs-perkey-backlit-on-black-modelpreview.png',
        brand: 'Acer',
        CPU: '2th Gen Intel® Core™ i9 Processor',
        RAM: '32GB DDR52 4800MHz',
        hardware: '2TB SSD2 PCIe Gen4 NVMe Raid 0',
        VGA: 'GeForce RTX™ 3080',
        price: '73.900.000'
    },
    {
        id: 'NBAC0298',
        name: 'Acer Predator Helios 500 (PH517-52)',
        image: 'https://tuanphong.vn/pictures/full/2022/03/1646981864-859-helios-500-ph517-52-bl-gallery-01.png',
        brand: 'Acer',
        CPU: '11th Gen Intel® Core™ i9 Processor1',
        RAM: '64GB /DDR4-3200',
        hardware: '2TB PCIe SSD',
        VGA: 'GEFORCE RTX™ 3080',
        price: '63.499.000'
    },
    {
        id: 'NBAC0303',
        name: 'Laptop Acer Gaming Predator Triton 300 PT315-53-75LQ NH.QDQSV.001 (Core™ i7-11800H | 16GB | 512GB | RTX 3060 6GB | 15.6 inch QHD | Win 10 | Đen)',
        image: 'https://anphat.com.vn/media/product/38980_triton_300_pt315_53_bl1_bk_01d.png',
        brand: 'Triton',
        CPU: 'Intel® Core™ i7-11800H (upto 4.60 GHz, 24MB)',
        RAM: '16GB (2x8GB) DDR4 3200MHz (2 khe, tối đa 32GB)',
        hardware: '512GB PCIe NVMe SED SSD',
        VGA: 'NVIDIA® GeForce® RTX 3060 6GB GDDR6',
        price: '43.990.000'
    },
    {
        id: 'NBAC0304',
        name: 'PREDATOR TRITON 300 SE OLED',
        image: 'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Triton_300_SE/Images/20220323/predator-triton-300se-pt314-52s-FpBl-bby-black-modelpreview.png',
        brand: 'Triton',
        CPU: '12th Gen Intel® Core™ i9 PROCESSOR114 Core1 (6P + 8E)1',
        RAM: '32GB LPDDR51 5200MHz',
        hardware: '512GB PCIe NVMe SED SSD',
        VGA: 'GEFORCE RTX™ 3060',
        price: '53.490.000'
    },
    {
        id: 'NBAC0306',
        name: 'PREDATOR TRITON 300 SE',
        image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2021/01/Triton300-SE_PT314-51s_Standard_01.png',
        brand: 'Triton',
        CPU: '2th Gen Intel® Core™ i7 PROCESSOR1 14 Core1 (6P + 8E)1',
        RAM: '32GB DDR51 4800MHz1',
        hardware: '512GB PCIe NVMe SED SSD',
        VGA: 'NVIDIA® GEFORCE RTX™ 3070 Ti',
        price: '63.290.000'
    },
    {
        id: 'NBAC0305',
        name: 'Laptop Gaming Acer Predator Triton 500 SE PT516-51S - Core i7 11800H, RTX 3060 QHD 165Hz',
        image: 'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Triton_500_SE/Images/20211228/Predator-triton-500se-pt516-52s-backlit-steel-gray-modelpreview.png',
        brand: 'Triton',
        CPU: '12TH GEN Intel® Core™ i9 Processor1',
        RAM: '32GB, 4800MHz',
        hardware: '4TB, GEN4 2X M.2 PCIe, Raid 0',
        VGA: 'GEFORCE RTX™ 3080 Ti',
        price: '73.290.000'
    },
]
const COMPUTER_STORAGE_KEY = 'VIK_COMPUTER';

localStorage.setItem(COMPUTER_STORAGE_KEY, JSON.stringify(computers));
let products = [
    {
        id: 'SKU: 210600462',
        name: 'Graphic Graphic card GIGABYTE R69XTGAMING OC-16GD 16GB GDDR6',
        image: 'https://anphat.com.vn/media/product/37145_9.png',
        brand: 'GIGABYTE',
        price: '51.600.000',
        type: 'graphicCard'
    },
    {
        id: 'SKU: 210600463',
        name: 'Graphic card GIGABYTE R69XTAORUS M-16GD 16GB GDDR6',
        image: 'https://product.hstatic.net/1000026716/product/aorus_radeon__rx_6900_xt_master_16g-09_d4a81e53df6c479e83e1f521f63790d2.png',
        brand: 'GIGABYTE',
        price: '54.100.000',
        type: 'graphicCard'
    },
    {
        id: 'SKU: 210600464',
        name: 'Graphic card ASUS ROG Strix LC Radeon RX 6900 XT 16GB GDDR6 ROG-STRIX-LC-RX6900XT-T16G-GAMING',
        image: 'https://product.hstatic.net/1000026716/product/aorus_radeon__rx_6900_xt_master_16g-09_d4a81e53df6c479e83e1f521f63790d2.png',
        brand: 'ASUS',
        price: '69.290.000',
        type: 'graphicCard'
    },
    {
        id: 'SKU: 210600465',
        name: 'Graphic card ASUS ROG Strix LC Radeon RX 6900 XT 16GB GDDR6 ROG-STRIX-LC-RX6900XT-O16G-GAMING',
        image: 'https://3dcomputer.vn/uploads/images/products/cac-man-hinh/6900/asus/rog-strix-lc-rx6900xt/h732.png',
        brand: 'ASUS',
        price: '48.190.000',
        type: 'graphicCard'
    },
    {
        id: 'SKU: 210600466',
        name: 'Graphic card ASUS TUF GAMING Radeon RX 6900 XT 16GB GDDR6 TUF-RX6900XT-O16G-GAMING',
        image: 'https://anphat.com.vn/media/product/35882_download.png',
        brand: 'ASUS',
        price: '47.190.000',
        type: 'graphicCard'
    },
    {
        id: 'NBAC0296',
        name: 'Laptop Acer Predator Helios 300 PH315-54-78W5 NH.QC5SV.001 (Core i7-11800H | 8GB | 512GB | RTX™ 3050Ti 4GB | 15.6 inch FHD | Win 10 | Đen)',
        image: 'https://anphat.com.vn/media/product/38316_predator_helios_300_ph_315_54_bl1_bk_01b.png',
        brand: 'Acer',
        CPU: 'Intel® Core™ i7-11800H (upto 4.60GHz, 24MB)',
        RAM: '8GB DDR4 3200MHz (2 khe rời, nâng cấp tối đa 32GB)',
        hardware: '512GB PCIe NVMe SSD',
        VGA: 'NVIDIA® GeForce RTX™ 3050Ti 4GB GDDR6',
        price: '33.900.000',
        type: 'laptop'
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
        price: '73.900.000',
        type: 'laptop'
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
        price: '63.499.000',
        type: 'laptop'
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
        price: '43.990.000',
        type: 'laptop'
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
        price: '53.490.000',
        type: 'laptop'
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
        price: '63.290.000',
        type: 'laptop'
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
        price: '73.290.000',
        type: 'laptop'
    },
    {
        id: 'MONI001',
        name: 'Monitor LCD Samsung 23.8 inch LS24R350FHEXXV',
        image: 'https://www.bachkhoashop.com/images/202201/thumb_img/4652-gthumb-26033-38916_21c1_joe_encore3_m22f_jetblack_coreset_front.png',
        brand: 'ASUS',
        price: '5.489.000',
        type: 'monitor'
    },
    {
        id: 'MONI002',
        name: 'Monitor LCD MSI PRO MP241X (1920 x 1080/VA/75Hz/8 ms)',
        image: 'https://anphat.com.vn/media/product/41161_picture1.png',
        brand: 'ASUS',
        price: '2.790.000',
        type: 'monitor'
    },
    {
        id: 'MONI003',
        name: 'Monitor LCD ACER EK241Y (1920 x 1080/IPS/75Hz/4 ms)',
        image: 'https://mega.com.vn/media/product/14681_lcd_acer_ed242qr_4.png',
        brand: 'ASUS',
        price: '2.990.000',
        type: 'monitor'
    },
    {
        id: 'MONI004',
        name: 'Monitor LCD MSI Optix G27C5 (1920 x 1080/VA/165Hz/1 ms/FreeSync)',
        image: 'https://anphat.com.vn/media/product/35100_product_0_20200305110940_5e606d74297d6.png',
        brand: 'ASUS',
        price: '5.690.000',
        type: 'monitor'
    },
    {
        id: 'MONI005',
        name: 'Monitor LCD LG 27QN600-B.ATV (2560 x 1440/IPS/75Hz/5 ms/FreeSync)',
        image: 'https://product.hstatic.net/200000151849/product/lg_27qn600-b_04a2a9ef671a4bdba759cae51dd585de_large.png',
        brand: 'ASUS',
        price: '6.990.000',
        type: 'monitor'
    },
    {
        id: 'MONI006',
        name: 'Monitor LCD ViewSonic 21.5 inch VA2215-H (1920x1080, VA, 75Hz, 5ms)',
        image: 'https://cdn.vatgia.vn/pictures/thumb/320x320/2017/11/uib1511582563.png',
        subImage1: 'https://lh3.googleusercontent.com/nEgULh94OjHjGo8U_Ykl1FEEhvcodAWbmyxsb1X1memNMHu0ct6OQsyfz8xoCz7wv3jEQnCZ1RBG7R_SL_Kbb5sD3ErRBnGZ=rw',
        subImage2: 'https://lh3.googleusercontent.com/i0kjCctGsOPFQZjidhV1Y5Cg_z2NnXYUnRdRnZmgNune9kuzm6OtqYF8ktBKwg21Wm9S6vKXK7U2NoKNyOJHmhxU4R9ppbIJ=w500-rw',
        subImage3: 'https://lh3.googleusercontent.com/Rv8puz36M3KW6LtwK5mmacFr9d8nHxK_JZBUyIyUnlY6OpCu4AHcRPBnlWFl_tqRkvNLGSjBTxQwx9nexTpKHYnL6ccAyu4=w500-rw',
        brand: 'ASUS',
        price: '4.090.000',
        type: 'monitor'
    }, 
    
]
export default products
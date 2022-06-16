const product = [
    {
        id:1,
        src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
        name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
        price: "500.000",
        color: "Đỏ",
        size : "41",
        quantity : '2'
    },
    {
        id:2,
        src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
        name: "Giày Thể Thao Nữ Bitis DSM074933XAM (Xám) - Giày chính hãng",
        price: "400.000",
        color: "Đen",
        size : "42",
        quantity : '2'
    },
    {
        id:3,
        src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
        name: "Giày Thể Thao Nữ Bitis DSM074933XAM (Xám) - Giày chính hãng",
        price: "100.000",
        color: "Xám",
        size : "43",
        quantity : '2'
    },
    {
        id:4,
        src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
        name: "Giày Thể Thao Nữ Bitis DSM074933XAM (Xám) - Giày chính hãng",
        price: "150.000",
        color: "Xám",
        size : "44",
        quantity : '2'
    }
]
const getAllProducts = () => product
 
const getProductBySlug = (slug) => product.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    return res
}

const getProducts = (count) => {
    const max = product.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return product.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}
export default productData

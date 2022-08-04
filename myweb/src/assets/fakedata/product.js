const product = [
    // {
    //     "id": 1,
    //     "createdDate": "2022-08-03T03:46:10.158+00:00",
    //     "updatedDate": "2022-08-03T03:46:10.158+00:00",
    //     "activeFlag": true,
    //     "deleteFlag": false,
    //     "title": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "shortDescription": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "longDescription": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "priceOld": 10000000,
    //     "priceCurrent": 750,
    //     "slug": "adidas-yeezy-boost-350-v2-full-trang-rep",
    //     "brand": "nike",
    //     "type": "the thao",
    //     "gender": "male",
    //     "isSale": true,
    //     "amountSell": 50
    // },
    // {
    //     "id": 2,
    //     "createdDate": "2022-08-03T03:46:10.158+00:00",
    //     "updatedDate": "2022-08-03T03:46:10.158+00:00",
    //     "activeFlag": true,
    //     "deleteFlag": false,
    //     "title": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "shortDescription": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "longDescription": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "priceOld": 10000000,
    //     "priceCurrent": 750,
    //     "slug": "adidas-yeezy-boost-350-v2-full-trang-rep",
    //     "brand": "nike",
    //     "type": "the thao",
    //     "gender": "male",
    //     "isSale": true,
    //     "amountSell": 50
    // },
    // {
    //     "id": 2,
    //     "createdDate": "2022-08-03T03:46:10.158+00:00",
    //     "updatedDate": "2022-08-03T03:46:10.158+00:00",
    //     "activeFlag": true,
    //     "deleteFlag": false,
    //     "title": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "shortDescription": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "longDescription": "Adidas Yeezy Boost 350 V2 Full Trắng REP",
    //     "priceOld": 10000000,
    //     "priceCurrent": 750,
    //     "slug": "adidas-yeezy-boost-350-v2-full-trang-rep",
    //     "brand": "nike",
    //     "type": "the thao",
    //     "gender": "male",
    //     "isSale": true,
    //     "amountSell": 50
    // }
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

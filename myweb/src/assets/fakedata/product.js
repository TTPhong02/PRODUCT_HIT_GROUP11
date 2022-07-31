const product = []

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

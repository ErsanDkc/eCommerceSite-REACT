import axios from "axios"
export const productList = async({ pageParam = 0 }) => {
    const {data} = await axios(`${process.env.REACT_APP_ENDPOINT}/product?page=${pageParam}`)
    return data
}
export const product = async(product_id) => {
    const {data} = await axios(`${process.env.REACT_APP_ENDPOINT}/product/${product_id}`)
    return data
}
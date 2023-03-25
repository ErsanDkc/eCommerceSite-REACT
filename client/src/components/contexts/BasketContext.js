import { createContext, useContext, useState } from "react";

const BasketContext = createContext()

export const BasketProvider = ({children}) => {
    const [items,setItems] = useState([])

    const addItemtoBasket = (data,findItemBasket) => {
        if(!findItemBasket) {

        return    setItems((prev) => [...prev, data])
        }
        const filtered = items.filter((item) => item._id !== findItemBasket._id)
        setItems(filtered)
    }

    

    const values = {
        items,
        setItems,
        addItemtoBasket
        
    }

    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}
export const useBasket = () => useContext(BasketContext)
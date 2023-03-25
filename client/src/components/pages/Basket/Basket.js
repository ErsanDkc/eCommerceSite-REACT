import React from 'react'
import { useBasket } from '../../contexts/BasketContext'
import {Alert, Box, Image,Text} from "@chakra-ui/react"
import styles from "../../Navbar/styles.module.css"


function Basket() {
    const {items} = useBasket()

  return (
    <div className={styles.basket}>
        <div className={styles.basketLeft}>

        {
            items.length < 1 && <Alert status='warning'>You have not any items in your basket</Alert>
        }
        {items.length >1 && (
            <>
            <ul className={styles.basketList}>
                {
                    items.map((item) => (
                        <li key={item._id}>
                            <Box m="8">
                                <Image htmlWidth="200" src={item.photos[0]} />
                                <Text mt="2">{item.title} - {item.price} TL</Text>
                            </Box>
                        </li>
                    ))
                }
            </ul>
            
            
            </>
        )}
        </div>
        <div className={styles.basketRight}>
            sad

        </div>
    </div>
  )
}

export default Basket
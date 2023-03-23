import { Image, Box, Button} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import moment from "moment"
// import styles from "../../components/Navbar/styles.module.css";
function Card({ item }) {
  
    
  return (
    <Box p="3" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <NavLink to={`/product/${item._id}`}>
        <Image src={item.photos[0]} alt="asd" loading="lazy" />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {moment(item.createAt).format("DD/MM/YYYY")}
          </Box>
          <Box marginTop="2" fontWeight="semibold" lineHeight="tight" as="h4">
            {item.title}
          </Box>
          <Box>{item.price}</Box>
        </Box>
      </NavLink>
      <Button colorScheme="green">Add To Baseket</Button>
    </Box>
  );
}

export default Card;

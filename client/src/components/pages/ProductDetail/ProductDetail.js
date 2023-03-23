import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { product } from "../../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import moment from "moment";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    product(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const images = data.photos.map((url) => ({ original: url }));
  
  return (
    <div>
      <Button colorScheme="green">Add to Basket</Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box p="10"><ImageGallery items={images} /></Box>
    </div>
  );
}

export default ProductDetail;

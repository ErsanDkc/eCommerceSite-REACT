import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { adminOrders } from "../../../../api";
function AdminDetail() {
  const { isLoading, data, isError, error } = useQuery(
    "admin:details",
    adminOrders
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error. {error.message}</div>;
  }


  return (
    <Flex m={6} wrap="wrap" >
     {
      data.map((item,i) => (
        <React.Fragment key={i}>
          {
            item.items.map((detail) => (
              <Box key={detail._id} m={5}>
                <Image src={detail.photos[0]} width="80" />
                <Text>{detail.title} - {detail.price}</Text>
              </Box>
            ))
          }
        </React.Fragment>
      ))
     }
    </Flex>
  );
}

export default AdminDetail;

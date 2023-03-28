import React from "react";
import { adminOrders } from "../../../../api";
import { useQuery } from "react-query";
import { Text, Table, Thead, Tbody, Tr, Td, Button } from "@chakra-ui/react";
import  {NavLink} from "react-router-dom"
import AdminDetail from "../Detail/AdminDetail";


function Orders() {
  const { isLoading, data, isError, error } = useQuery(
    "admin:orders",
    adminOrders
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error. {error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      <Text fontSize="24" p={5}>
        Orders
      </Text>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Td fontWeight="700">User</Td>
            <Td fontWeight="700">Address</Td>
            <Td fontWeight="700">Items</Td>
          </Tr>
        </Thead>

        <Tbody>
          
          {data.map((item) => (
            
            <Tr key={item._id} style={{display: `${item.items.length > 0 ? "" : "none"}`}} >
              
              <Td textDecoration="underline">{item.user.email}</Td>
              <Td>{item.adress}</Td>
              <Td style={{display:"flex", justifyContent:"space-between"}} >
                {item.items.length} 
                <NavLink to="/admin/orders/detail" element={<AdminDetail />} >
                  
                  <Button size="small" colorScheme="green" p={1}>Detay</Button>
                  </NavLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;

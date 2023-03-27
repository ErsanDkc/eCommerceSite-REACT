import React from 'react'
import { adminOrders } from '../../../../api'
import {  useQuery } from 'react-query'
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


function Orders() {
  const  {isLoading,data,isError,error} = useQuery("admin:orders", adminOrders)

  if(isLoading)  {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>Error. {error.message}</div>
  }
console.log(data)
  return (
    <div>
      <Text fontSize="24" p={5}>Orders</Text>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Td>User</Td>
            <Td>Address</Td>
            <Td>Items</Td>
          </Tr>
        </Thead>

        <Tbody>
          {
            data.map((item) => (
              <Tr key={item._id}>
                 <Td>{item.user.email}</Td> 
                 <Td>{item.adress}</Td> 
                 <Td>{item.items.length}</Td> 
              </Tr>
            ))
          }
        </Tbody>

      </Table>
    </div>
  )
}

export default Orders
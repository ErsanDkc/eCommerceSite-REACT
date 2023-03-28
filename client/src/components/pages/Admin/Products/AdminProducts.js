import React, { useMemo } from "react";
import { useQuery,useMutation, useQueryClient } from "react-query";
import { Text } from "@chakra-ui/react";
import { deleteProducts, productList } from "../../../../api";
import { Table, Popconfirm } from "antd";
import { NavLink } from "react-router-dom";



function AdminProducts() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    productList
  );

  const queryClient = useQueryClient()

  const deleteMutation = useMutation(deleteProducts, {
    onSuccess : () =>  queryClient.invalidateQueries("admin:products")
  })

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <NavLink to={`/admin/products/${record._id}`}>Edit</NavLink>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("success")
                  }
                })
              }}
              onCancel={() => {
                console.log("iptal edildi");
              }}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <a href="#/" style={{marginLeft:10}}>
                Delete
              </a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error. {error.message}</div>;
  }

  

  return (
    <div>
      <Text fontSize="22" p={8}>
        Products
      </Text>
      <Table dataSource={data} columns={columns} rowKey="_id" />;
    </div>
  );
}

export default AdminProducts;

import React from "react";
import InventoryTable from "../../components/InventoryTable";
import Search from "../../components/Search";
import Container from "../../components/Container";
import { Button } from "@mui/material";

const Products = () => {
  return (
    <>
      <div className="m-4 w-full">
        <Container styles={{ width: '100%'}} className="flex justify-between p-2">
          <Button>
            Add Product
          </Button>
          <Search />
        </Container>
      </div>
      <div className="m-4 w-full">
        <InventoryTable />
      </div>
    </>
  );
};

export default Products;

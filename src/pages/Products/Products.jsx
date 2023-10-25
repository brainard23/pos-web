import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import InventoryTable from "../../components/InventoryTable";
import Search from "../../components/Search";
import Container from "../../components/Container";
import hooks from "../../hooks/Products";
import { useCallback } from "react";
import AddProductModal from "../../components/AddProductModal";

const Products = () => {
  const { data: products } = hooks.useProductList();
  const [open, setOpen] = React.useState(false);
  const [productsList, setProductsList] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (products) {
      setProductsList(products);
    }
  }, [products]);

  return (
    <>
      {open && (
        <AddProductModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
      )}
      <div className="m-4 w-full">
        <Container
          styles={{ width: "100%" }}
          className="flex justify-between p-2"
        >
          <Button variant="outlined" onClick={handleOpen}>
            Add Product
          </Button>
          <Search />
        </Container>
      </div>
      <div className="m-4 w-full">
        <InventoryTable data={productsList} />
      </div>
    </>
  );
};

export default Products;

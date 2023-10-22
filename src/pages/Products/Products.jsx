import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import InventoryTable from "../../components/InventoryTable";
import Search from "../../components/Search";
import Container from "../../components/Container";
import BarcodeScanner from "../../components/BarcodeScanner";
import hooks from "../../hooks/Products";

const Products = () => {
const { data: products } = hooks.useProductList()
  const {
    trigger,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [barcode, setBarcode] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);

  const getData = (barcode) => {
    setBarcode(barcode);
  };
 
 useEffect(() => {
  if (Products) {
    // setTableData(Products/\);
  }
}, [Products]);

console.log(products, 'here');

  const onSubmit = (data) => {
    data.Barcode = barcode;
    console.log(data);
  };

  useEffect(() => {
    if (barcode) {
      // Trigger validation check if barcode has a value
      trigger("Barcode");
    }
  }, [barcode]);

  function ProductModal() {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 800,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="pb-6"
            >
              Add Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex justify-center items-center">
                <div
                  className="flex justify-center mb-6"
                  style={{ maxWidth: 200, maxHeight: 200 }}
                >
                  <BarcodeScanner getData={getData} />
                </div>
              </div>

              <div>
                <TextField
                  id="outlined-basic"
                  label="Barcode"
                  variant="outlined"
                  defaultValue={barcode}
                  style={{ margin: 10 }}
                />
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      label="Name"
                      variant="outlined"
                      style={{ margin: 10 }}
                      {...field}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                  rules={{
                    required: "Name is required",
                  }}
                />
                <Controller
                  name="brand"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Brand"
                      variant="outlined"
                      style={{ margin: 10 }}
                      {...field}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                  rules={{
                    required: "brand is required",
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  style={{ margin: 10 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  style={{ margin: 10 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  style={{ margin: 10, width: 100 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Selling Price"
                  variant="outlined"
                  style={{ margin: 10, width: 100 }}
                />
              </div>
              <div className="flex justify-end items-center m-2">
                <Button
                  style={{
                    margin: 10,
                    color: "#ffffff",
                    backgroundColor: "red",
                  }}
                >
                  Cancel
                </Button>
                <Button variant="outlined" style={{ margin: 10 }} type="submit">
                  Add Product
                </Button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <>
      <div className="m-4 w-full">
        <ProductModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          data={data}
        />
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
        <InventoryTable />
      </div>
    </>
  );
};

export default Products;

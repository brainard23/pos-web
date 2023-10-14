import React from "react";
import InventoryTable from "../../components/InventoryTable";
import Search from "../../components/Search";
import Container from "../../components/Container";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import BarcodeScanner from "../../components/BarcodeScanner";

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState(null);

  const getData = (data) => {
    setData(data);
  };

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
            <BarcodeScanner getData={getData} />
            <div>
              <TextField
                id="outlined-basic"
                label="Barcode"
                variant="outlined"
                defaultValue={data}
                style={{ margin: 10 }}
              />
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                style={{ margin: 10 }}
              />
              <TextField
                id="outlined-basic"
                label="Brand"
                variant="outlined"
                style={{ margin: 10 }}
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
              <Button style={{ margin: 10, color: '#ffffff', backgroundColor: 'red'}}>
                Cancel
              </Button>
              <Button variant="outlined" style={{ margin: 10 }}>
                Add Product
              </Button>
            </div>
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

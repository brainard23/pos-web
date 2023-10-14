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
  const [data, setData] = React.useState("Not Found");
  const [scanResult, setScanResult] = React.useState(null);
  const [manualSerialNumber, setManualSerialNumber] = React.useState("");

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
            <BarcodeScanner
              scanResult={scanResult}
              setScanResul={setScanResult}
              manualSerialNumber={manualSerialNumber}
              setManualSerialNumber={setManualSerialNumber}
            />
            <TextField
              id="outlined-basic"
              label="Barcode"
              variant="outlined"
              style={{ marginBottom: 10 }}
              defaultValue={scanResult}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ marginBottom: 10 }}
            />
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

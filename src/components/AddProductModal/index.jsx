import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import BarcodeScanner from "../BarcodeScanner";
import { useCallback } from "react";

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

const AddProductModal = ({ handleOpen, handleClose, open }) => {
  const {
    trigger,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [barcode, setBarcode] = React.useState(null);
  const [data, setData] = React.useState(null);

  const onSubmit = (data) => {
    data.Barcode = barcode;
    console.log(data, "here");
  };

  const getData = (barcode) => {
    setBarcode(barcode);
  };

  useEffect(() => {
    if (barcode) {
      // Trigger validation check if barcode has a value
      trigger("Barcode");
    }
  }, [barcode]);

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
                style={{ maxWidth: 400, maxHeight: 400 }}
              >
                <BarcodeScanner getData={getData} />
              </div>
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Barcode"
                variant="outlined"
                value={barcode || ""}
                style={{ margin: 10 }}
                onChange={(e) => setBarcode(e.target.value)}
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
                Ok
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProductModal;

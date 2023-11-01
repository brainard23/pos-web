import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import BarcodeScanner from "../BarcodeScanner";
import { useCallback } from "react";
import TextInput from "../Inputs";
import hooks from "../../hooks/Products";
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
  borderRadius: 2,
};

const AddProductModal = ({ handleOpen, handleClose, open }) => {
  const {
    trigger,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = hooks.useAddProduct();
  const [barcode, setBarcode] = React.useState(null);
  const [data, setData] = React.useState(null);

  const onSubmit = (data) => {
    data.barcode = barcode;
    console.log(data, "here");
    mutate(data);
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
        style={{ borderRadius: 25 }}
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
                className="flex justify-center mb-6 rounded"
                style={{ maxWidth: 400, maxHeight: 400 }}
              >
                <BarcodeScanner getData={getData} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <TextField
                id="outlined-basic"
                label="Barcode"
                name="barcode"
                variant="outlined"
                value={barcode || ""}
                style={{ margin: 10 }}
                onChange={(e) => setBarcode(e.target.value)}
              />
              <TextInput
                name="name"
                label={"Name"}
                type={"text"}
                errors={errors}
                control={control}
                style={{ margin: 10 }}
              />
              <TextInput
                name="brand"
                type={"text"}
                label={"Brand"}
                errors={errors}
                control={control}
                style={{ margin: 10 }}
              />
            </div>
            <div className="flex items-center justify-start">
              <TextInput
                name="quantity"
                type={"number"}
                label={"Quantity"}
                errors={errors}
                control={control}
                style={{ margin: 10 }}
              />
              <TextInput
                name="category"
                type={"text"}
                label={"Category"}
                errors={errors}
                control={control}
                style={{ margin: 10 }}
              />
              <TextInput
                name="description"
                label={"Description"}
                type={"text"}
                errors={errors}
                control={control}
                style={{ margin: 10 }}
              />
            </div>
            <div className="flex items-center justify-start">
              <TextInput
                name="price"
                type={"number"}
                label={"Price"}
                errors={errors}
                control={control}
                style={{ margin: 10 }}
              />
              <TextInput
                name="selling_price"
                type={"number"}
                errors={errors}
                label={"Selling Price"}
                control={control}
                style={{ margin: 10 }}
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

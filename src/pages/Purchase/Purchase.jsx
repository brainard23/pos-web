import React, { useState } from "react";
import PurchaseTable from "../../components/PurchaseTable";
import BarcodeScanner from "../../components/BarcodeScanner";
import {
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PayCash from "../../components/PayCash";

const Purchase = () => {
  const [openCash, setOpenCash] = useState(false);

  const openCashhandler = () => {
    setOpenCash(true);
  };

  return (
    <>
      <div className="flex justify-between" style={{ width: 1200 }}>
        <Paper style={{ width: 680, height: 600 }} className="p-2">
          {openCash ? (
            <PayCash />
          ) : (
            <>
              <PurchaseTable />
              <div className="flex justify-between m-6 items-center">
                <Typography variant="h4" style={{ fontWeight: 600 }}>
                  Total:{" "}
                </Typography>
                <Typography
                  style={{ marginRight: 20, fontWeight: 600 }}
                  variant="h4"
                >
                  ₱ 1,000.00
                </Typography>
              </div>

              <div className="flex justify-center m-6 items-center">
                <Typography variant="h6">Select Mode Of Payment</Typography>
              </div>

              <div className="flex justify-center m-6 items-center">
                <div>
                  <Button
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    onClick={openCashhandler}
                  >
                    Cash
                  </Button>
                  <Button variant="outlined">GCash</Button>
                </div>
              </div>
            </>
          )}
        </Paper>
        <Paper style={{ width: 500, height: 600 }} className="p-2">
          <BarcodeScanner />
          <TextField
            id="outlined-basic"
            label="Search Item"
            variant="outlined"
            style={{ width: "100%" }}
          />
          <div className="my-6 flex justify-between">
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Price"
              defaultValue="₱ 1,000.00"
            />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Purchase;

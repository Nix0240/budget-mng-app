import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
// import { DatePicker } from "@mui/material/date-picker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { css } from "@emotion/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",

  transform: "translate(-50%, -50%)",
  width: 700,
  height: 350,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [item, setItem] = React.useState("");
  const [cost, setCost] = React.useState(0);
  const handleItemChange = (event) => {
    const input = event.target.value;
    if (!/^[a-zA-Z]+$/.test(input) || input.length > 20) return;
    setItem(input);
  };

  const handleCostChange = (event) => {
    const input = Number(event.target.value);
    if (input <= 0) return;
    setCost(input);
  };

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const handleSave = () => {
    console.log("Item:", item);
    console.log("Cost:", cost);
    console.log("Date:", selectedDate);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Expense
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="item"
            label="Item"
            value={item}
            onChange={handleItemChange}
          />
          <TextField
            id="cost"
            label="Cost"
            type="number"
            value={cost}
            onChange={handleCostChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DatePicker
              disablePast
              maxDate={new Date()}
              minDate={new Date(new Date().setDate(new Date().getDate() - 29))}
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            /> */}

            <DatePicker
              label="Expense Date"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

// import React, { useState } from "react";
// import { TextField, Button, Modal } from "@mui/material";
// // import { DatePicker } from "@mui/material/date-picker";
// import { css } from "@emotion/react";

// const AddExpense = () => {
//   // const [selectedDate, setSelectedDate] = useState(new Date());
//   const [item, setItem] = useState("");
//   const [cost, setCost] = useState(0);
//   const [open, setOpen] = useState(false);

//   const handleItemChange = (event) => {
//     const input = event.target.value;
//     if (!/^[a-zA-Z]+$/.test(input) || input.length > 20) return;
//     setItem(input);
//   };

//   const handleCostChange = (event) => {
//     const input = Number(event.target.value);
//     if (input <= 0) return;
//     setCost(input);
//   };

//   // const handleDateChange = (date) => {
//   //   setSelectedDate(date);
//   // };

//   const handleSave = () => {
//     console.log("Item:", item);
//     console.log("Cost:", cost);
//     // console.log("Date:", selectedDate);
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={() => setOpen(true)}>
//         Add Expense
//       </Button>

//       <Modal
//         open={open}
//         onClose={() => setOpen(false)}
//         css={css`
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         `}
//       >
//         <TextField
//           id="item"
//           label="Item"
//           value={item}
//           onChange={handleItemChange}
//         />
//         <TextField
//           id="cost"
//           label="Cost"
//           type="number"
//           value={cost}
//           onChange={handleCostChange}
//         />

//         {/* <DatePicker
//         disablePast
//         maxDate={new Date()}
//         minDate={new Date(new Date().setDate(new Date().getDate() - 29))}
//         value={selectedDate}
//         onChange={handleDateChange}
//       /> */}
//         <Button variant="contained" onClick={handleSave}>
//           Save
//         </Button>
//       </Modal>
//     </div>
//   );
// };

// export default AddExpense;

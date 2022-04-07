import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const AddTask = ({ onAdd, contacts }) => {
  const [contactId, setContactId] = useState("");
  const [plusNumber, setPlusNumber] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const changeContactId = () => {
    setContactId(
      `${firstName
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}_${lastName
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`
    );
  };

  const changePhone = (e) => {
    let target = e.target.value;

    if (target.length <= 16) {
      setPhoneNumber(
        target
          .replace(/\D/g, "")
          .replace(
            /(\d{1,3})(\d{1,3})?(\d{1,3})?(\d{1,3})?/g,
            function (txt, w, x, y, z) {
              if (z) {
                return `+${w} ${x} ${y} ${z}`;
              } else if (y) {
                return `+${w} ${x} ${y}`;
              } else if (x) {
                return `+${w} ${x}`;
              } else if (w) {
                return `+${w}`;
              }
            }
          )
      );
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setPhoneError(false);
    setIsAdding(true);

    if (firstName === "") {
      setFirstNameError(true);
      setIsAdding(false);
    } else if (lastName === "") {
      setLastNameError(true);
      setIsAdding(false);
    } else if (phoneNumber === "") {
      setPhoneError(true);
      setIsAdding(false);
    } else {
      onAdd({
        firstName,
        lastName,
        phoneNumber: phoneNumber,
        note,
        specificId: contactId,
      });
      setIsAdding(false);
    }

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setNote("");
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Add contact
      </Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
        onChange={changeContactId}
      >
        <TextField
          className="textField"
          type="text"
          label="First name"
          variant="outlined"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          fullWidth
          required
          error={firstNameError}
        />

        <TextField
          className="textField"
          type="text"
          label="Last name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
          error={lastNameError}
        />

        <TextField
          className="textField"
          label="Phone number"
          variant="outlined"
          onChange={changePhone}
          value={phoneNumber}
          fullWidth
          required
          error={phoneError}
        />

        <TextField
          className="textField"
          label="Note"
          variant="outlined"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          multiline
          rows={4}
          fullWidth
        />

        {!isAdding && (
          <Button type="submit" variant="contained" endIcon={<AddIcon />}>
            Add contact
          </Button>
        )}
        {isAdding && (
          <Button disabled type="submit" variant="contained">
            Adding contact...
          </Button>
        )}
      </form>
    </Container>
  );
};

export default AddTask;

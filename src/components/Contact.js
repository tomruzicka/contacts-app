import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <TableRow>
        <TableCell scope="row">{contact.specificId}</TableCell>
        <TableCell align="right">{`${contact.firstName} ${contact.lastName}`}</TableCell>
        <TableCell align="right">{contact.phoneNumber}</TableCell>
        <TableCell align="right" className="note">
          {contact.note}
        </TableCell>
        <TableCell align="right">
          <DeleteIcon cursor="pointer" onClick={() => onDelete(contact.id)} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default Contact;

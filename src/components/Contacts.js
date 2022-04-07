import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Contact from "./Contact";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell scope="row">ID</TableCell>
              <TableCell align="right">Full name</TableCell>
              <TableCell align="right">Phone number</TableCell>
              <TableCell align="right">Note</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contacts.map((contact, id) => (
              <Contact key={contact.id} contact={contact} onDelete={onDelete} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contacts;

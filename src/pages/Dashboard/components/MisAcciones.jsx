import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonIcon from "../../../components/ButtonIcon";
import { useSelector } from "react-redux/es/exports";
import { getActions } from "../../../redux/slices/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MisAcciones() {
  const listActions = useSelector(getActions);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>symbol</StyledTableCell>
            <StyledTableCell align="right">name</StyledTableCell>
            <StyledTableCell align="right">currency</StyledTableCell>
            <StyledTableCell align="right">Accion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listActions?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <a href={`/details?symbol=${row.symbol}&currency=${row.currency}`}>{row.symbol}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.label}</StyledTableCell>
              <StyledTableCell align="right">{row.currency}</StyledTableCell>
              <StyledTableCell align="right">
                <ButtonIcon>Eliminar</ButtonIcon>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {!listActions && <StyledTableRow>No hay datos</StyledTableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

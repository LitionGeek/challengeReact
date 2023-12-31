import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ButtonIcon, Loading } from "../../../components";
import { useGetAllMutation } from "../../../redux/api/endpoints/createAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getActions, setActions } from "../../../redux/slices/actions";

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
  const [selfActions, responseSelf] = useGetAllMutation();
  const actions = useSelector(getActions);
  const dispatch = useDispatch();

  useEffect(() => {
    const getActions = async () => {
      await selfActions();
    };
    getActions();
  }, []);

  useEffect(() => {
    if (responseSelf.isSuccess) {
      dispatch(setActions(responseSelf?.data));
    }
  }, [responseSelf.isSuccess]);
  if (responseSelf.isLoading) return <Loading />;

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
          {actions.lenght === 0 && <StyledTableRow>No hay datos</StyledTableRow>}
          {actions?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <a href={`/details?symbol=${row.symbol}&currency=${row.currency}`}>{row.symbol}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.currency}</StyledTableCell>
              <StyledTableCell align="right">
                <ButtonIcon>Eliminar</ButtonIcon>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

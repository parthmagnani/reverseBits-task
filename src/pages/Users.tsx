import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useEffect, useState } from "react";
import { getUserList } from "../api/commonApi";

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

const Users = () => {
  const [userList, setUserList] = useState([]);

  const fetUsersList = () => {
    getUserList().then((response: any) => {
      console.log("response-->>", response);
      setUserList(response);
    });
  };

  useEffect(() => {
    if (!userList.length) fetUsersList();
  }, []);

  return (
    <>
      <div className=" flex justify-center">
        <div className="w-[75%] mt-10">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">User Name</StyledTableCell>
                  <StyledTableCell align="right">Phone&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">Website&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.username}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.website}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Users;

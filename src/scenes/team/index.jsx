import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "center",
            align: "center",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Access Level",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                        <Box
                            width="60%"
                            m="0 auto"
                            p="5px"
                            display={"flex"}
                            justifyContent="center"
                            backgroundColor={
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : colors.greenAccent[700]
                            }
                            borderRadius="4px"
                        >
                            {access === "admin" && <AdminPanelSettingOutlinedIcon />}
                            {access === "manager" && <SecurityOutlinedIcon />}
                            {access === "user" && <LockOpenOutlinedIcon />}
                            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                                {access}
                            </Typography>
                        </Box>
                    </Box>
                )
            }
        }
    ];

    return (
        <Box m="20px">
            <Header
                title="TEAM"
                subtitle="Managing the Team Members"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                    slots={{ toolbar: 'default' }}
                    showToolbar
                />
            </Box>
        </Box >
    )
}

export default Team;
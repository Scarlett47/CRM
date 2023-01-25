import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDataGridProps } from '@mui/x-data-grid/DataGrid/useDataGridProps';
import Avatar from '@mui/material/Avatar';
const columns = [

    
    {field: 'photoURL', headerName: '', width:10,renderCell: (params) => <Avatar src={params.row.photoURL}/>,
    sortable:false,
    filterable:false,},
    {field: 'id', headerName: '', width:10},
    { field: 'name', headerName: 'Name',  width: 130 },
    { field: 'email', headerName: 'Email',color:'#ff5722', width: 130, },
    { field: 'company', headerName: 'Company', width: 130 },
    {
        field: 'role',
        headerName: 'Role',
        width: 130,
    },
    { field: 'forecast', headerName: 'Forecast', width: 130 },
    { field: 'recentactivity', headerName: 'Recent activity', width: 160 },
];

const rows = [
    { id: 1, photoURL: (<Avatar
        alt="Remy Sharp"
        src="./photo/pic1.jpg"
        sx={{ width: 56, height: 56 }}
      />), name: 'Lannister', email: 'Snow', company: 'Jon', role: 'Manager', forecast: '50%',recentactivity: '5 Minutes ago', },
    { id:2, name: 'Rossini', email: 'Lannister', company: 'Cersei', role: 'Manager', forecast: '50%',recentactivity:'5 Minutes ago', },
    { id:3, name: 'Jon', email: 'Ferrara', company: 'Jaime', role: 'Manager', forecast: '50%',recentactivity:'5 Minutes ago', },
    { id:4, name: 'Targaryen', email: 'Stark', company: 'Arya', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id:5, name: 'Stark', email: 'Targaryen', company: 'Daenerys', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id:6, name: 'Melisandre', email: 'Melisandre', company: 'Mandakh', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id:7, name: 'Lannister', email: 'Clifford', company: 'Ferrara', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id:8, name: 'Frances', email: 'Frances', company: 'Rossini', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id:9, name: 'Roxie', email: 'Roxie', company: 'Harvey', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: 1000 }}>
            <DataGrid
                rows={useDataGridProps && rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                getRowId={false}
                checkboxSelection
            />

        </div>
    );
}
console.log(rows)
console.log(columns)

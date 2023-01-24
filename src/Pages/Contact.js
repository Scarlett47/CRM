import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDataGridProps } from '@mui/x-data-grid/DataGrid/useDataGridProps';
import {  } from '@mui/material/Avatar';
const columns = [

    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'photoURL', headerName: '', width:60,renderCell: (params) => <Avatar src={params.row.photoURL}/>,
    sortable:false,
    filterable:false,},
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
    { id: 1, photoURL: (photoURL), name: 'Lannister', email: 'Snow', company: 'Jon', role: 'Manager', forecast: '50%',recentactivity: '5 Minutes ago', },
    { id: 2, name: 'Lannister', email: 'Lannister', company: 'Cersei', role: 'Manager', forecast: '50%',recentactivity:'5 Minutes ago', },
    { id: 3, name: 'Lannister', email: 'Lannister', company: 'Jaime', role: 'Manager', forecast: '50%',recentactivity:'5 Minutes ago', },
    { id: 4, name: 'Lannister', email: 'Stark', company: 'Arya', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id: 5, name: 'Lannister', email: 'Targaryen', company: 'Daenerys', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id: 6, name: 'Lannister', email: 'Melisandre', company: 'Mandakh', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id: 7, name: 'Lannister', email: 'Clifford', company: 'Ferrara', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id: 8, name: 'Lannister', email: 'Frances', company: 'Rossini', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
    { id: 9, name: 'Lannister', email: 'Roxie', company: 'Harvey', role: 'Manager', forecast: '50%', recentactivity:'5 Minutes ago', },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: 1000 }}>
            <DataGrid
                rows={useDataGridProps && rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection
            />

        </div>
    );
}
console.log(rows)
console.log(columns)
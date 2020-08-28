import React from 'react';
import CustomDateComponent from './components/customDate';
import { currencyFormatter, dateFormatter } from './common/formatter';

const GridContext = React.createContext({ 
    colDefs: [
        {
            headerName: "Name",
            field: "name",
            cellRenderer: 'agGroupCellRenderer',
            checkbox: true,
            cellRendererParams: {
                suppressCount: true,
                suppressDoubleClickExpand: true,
                checkbox: true,
            }
        }, {
            headerName: "Date Created",
            field: "created",
            valueFormatter: dateFormatter,
            editable: false,
        }, {
            headerName: "Fund Name", field: "data.fund_name.text"
        }, {
            headerName: "Due Date", field: "data.due_date.text"
        }, {
            headerName: "Price", field: "data.price.text",
        }
    ],
    gridOptions: {
        defaultColDef: {
            editable: true,
            flex: 1,
            minWidth: 100,
        },
        components: {
            agDateInput: CustomDateComponent
        }
    }
});


export default GridContext;
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
            field: "date",
            valueFormatter: dateFormatter,
            editable: false,
        }, {
            headerName: "Fund Name", field: "fundName"
        }, {
            headerName: "Due Date", field: "date"
        }, {
            headerName: "Price", field: "price",
            valueFormatter: currencyFormatter
        }
    ],
    rowData: [{
        name: "Test document A",
        date: "24/08/2008",
        fundName: "Sequoia Capital",
        price: 6
    }, {
        name: "Test Document B",
        date: "24/08/2008",
        fundName: "Blackrock",
        price: 16
    }, {
        name: "Test Document C",
        date: "24/08/2008",
        model: "Boxter",
        fundName: "Soft Capital",
        price: 56
    }],
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
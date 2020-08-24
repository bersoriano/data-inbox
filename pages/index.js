import React, { useContext } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AgGridReact } from 'ag-grid-react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import GridContext from '../gridContext';
import CustomDateComponent from '../components/customDate';

const initData = {
  colDefs: [
    {
      headerName: "Name",
      field: "make",
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
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = cellValue;
          var dateParts = dateAsString.split('/');
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          );

          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }

          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }

          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
      },
    }, {
      headerName: "Fund Name", field: "price"
    }, {
      headerName: "Due Date", field: "price"
    }, {
      headerName: "Price", field: "price"
    }
  ],
  rowData: [{
    make: "Init data Test document A",
    date: "24/08/2008",
    price: 35000
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
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
}

export default function Home() {
  const gridData = useContext(GridContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <GridContext.Provider value={gridData}>
        <Toolbar></Toolbar>
        <section className={styles.homeSection}>
          <span className="test">{gridData.gridData}</span>
          <main className={styles.main}>
            <div className="ag-theme-alpine-dark"
              style={{ height: '30vh', minWidth: '100%' }}>
              <AgGridReact
                gridOptions={gridData.gridOptions} 
                columnDefs={gridData.colDefs} 
                rowData={gridData.rowData}>
              </AgGridReact>
            </div>
          </main>
        </section>
      </GridContext.Provider>
    </div>
  )
}

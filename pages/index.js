import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AgGridReact } from 'ag-grid-react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import GridContext from '../gridContext';
import getFundsData from './api/fundsApi';

export default function Home() {
  const gridData = useContext(GridContext);
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    getFundsData().then(_funds => {console.log(_funds.results);setFunds(_funds.results)});
  },[]);

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
                rowData={funds}>
              </AgGridReact>
            </div>
          </main>
        </section>
      </GridContext.Provider>
    </div>
  )
}

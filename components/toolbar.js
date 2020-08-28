import React, { useContext, useReducer, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import GridContext from '../gridContext';

const reducer = (state, row) => [...state, row];

const Toolbar = () => {
    const gridData = useContext(GridContext);
    const [rowData, setRow] = useReducer(reducer, []);
    function update() {
        setRow({name: "hi"});
        console.log("Row: ", rowData);
        console.log("Grid context: ", gridData);
    }
    return (
        <GridContext.Provider value={{rowData, setRow}}>
            <section className={styles.toolbar}>
                <Button onClick={update} type="default">
                <DeleteOutlined />Remove</Button>
            </section>
        </GridContext.Provider>
    )
}
export default Toolbar;
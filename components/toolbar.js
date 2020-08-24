import React, { useContext, useReducer } from 'react';
import styles from '../styles/Home.module.css';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import GridContext from '../gridContext';

function getData() {
    const [fields, setFields] = useState();
    const [results, setResults] = useState();
    console.log("Fetching data");
    fetch("https://private-39e16-alkymiexercise.apiary-mock.com/list")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("Result: ", result)
                setFields = result.fields;
                setResults = result.results;
            },
            (error) => {
                console.log("Error:", error)
            }
        )
}

function update() {
}

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
                <span>{gridData.rowData[0].make}</span>
                <Button onClick={update} type="default">
                <DeleteOutlined />Remove</Button>
            </section>
        </GridContext.Provider>
    )
}
export default Toolbar;
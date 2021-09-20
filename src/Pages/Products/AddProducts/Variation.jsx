import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Form } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        maxWidth: '10ch',
    },
}));

let arr = []
export default function Variation() {
    const classes = useStyles();
    const [createVariation, setcreateVariation] = useState([])

    const OnAdd = () => {
        arr.push(
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form>
        )
        console.log(arr)
        setcreateVariation(arr.map((create, ind) => {
            console.log(create)
            return create

        }));
    }
    useEffect(() => {
        OnAdd()
    }, [])
    return (
        <>
            <h3>Add Variation</h3>
            <button onClick={OnAdd}>Add</button>
            <br />
            {createVariation}

        </>
    )
}


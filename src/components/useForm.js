import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            width: "80%",
            margin: theme.spacing(1),
        },
    },
}));

export function useForm(initialState, validateOnChange = false, validate) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (validateOnChange) {
            validate({ [name]: value });
        }
    };

    const resetForm = () => {
        setValues(initialState);
        setErrors({});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    };
}

export function Form(props) {
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {children}
        </form>
    );
}

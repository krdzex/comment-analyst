import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = (props) => {

    const [error, setError] = useState(false);
    const [input, setInput] = useState("");
    const onChangeHandle = (e) => {
        setInput(e.target.value);
    }
    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (input === "") {
            setError(true);
            return;
        }
        setError(false)
        props.getInputValue(input)
    }
    return (
        <div style={{
            marginBottom: "20px",
            height: "75px",
            maxWidth: "100%"
        }}>
            <form style={{ marginTop: "10px", textAlign: "center" }
            } onSubmit={onSubmitHandle} >
                <TextField
                    {...(error && { error: true, helperText: "This input cant be empty!" })}
                    id="outlined-error-helper-text"
                    label="Search"
                    value={input}
                    onChange={onChangeHandle}
                    variant="outlined"
                    style={{ maxWidth: "500px", width: "85%" }}
                />
            </form >
        </div >
    );
};

export default SearchBar;
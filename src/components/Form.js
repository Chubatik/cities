import React from 'react';

const Form = props => (
    <form onSubmit={props.weather}>
        <input type={'text'} placeholder={'City name'} name={'city'}/>
        <button>Get weather</button>
    </form>
)

export default Form;

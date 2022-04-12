const InputGroup = ({ label, id, name, type='text', placeholder, register, error }) => {
    console.log(register);
    return (
        <div className="InputGroup">
            <label htmlFor={id}>
                {label}
            </label>
            <input
            type={type}
            name={`form-control ${error ? 'is-invalid' : ''}`}
            placeholder={placeholder}
            id={id}
            {...register(id)}
            />
            <p className="invalid-feeback">{error}</p>
        </div>
    )
}

export default InputGroup
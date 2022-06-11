export const CustomInput = ({ id, name, type = "text", label, value, handleChange, required }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} name={name} value={value} onChange={handleChange} placeholder={label} required={required} />
        </div>
    );
};

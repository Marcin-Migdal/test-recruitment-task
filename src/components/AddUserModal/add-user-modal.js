import { useRef, useState, useEffect } from "react";

import { CustomInput } from "../CustomInput/custom-input";

export const AddUserModal = ({ handleAdd, closeModal }) => {
    const ref = useRef();

    const [formData, setFormData] = useState(undefined);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => document.removeEventListener("mousedown", checkIfClickedOutside);
    }, [closeModal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClear = () => setFormData(undefined);

    return (
        <div ref={ref} className="modal">
            <form className="form" onSubmit={handleSubmit}>
                <CustomInput id="fName" name="name" label="Name" value={formData?.name || ""} handleChange={handleChange} required />
                <CustomInput
                    id="fSurname"
                    name="surname"
                    label="Surname"
                    value={formData?.surname || ""}
                    handleChange={handleChange}
                    required
                />
                <CustomInput
                    id="fAge"
                    name="age"
                    label="Age"
                    value={formData?.age || ""}
                    handleChange={handleChange}
                    type="number"
                    required
                />
                <div className="button-container">
                    <button className="btn" type="submit">
                        Add
                    </button>
                    <button className="btn" type="button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};
// handleAdd(formData)

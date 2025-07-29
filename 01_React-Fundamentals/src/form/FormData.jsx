// Q11. Build a form with multiple input fields and manage them using a single state object.

import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    )

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert(`User ${formData.username} registered successfully!`);

        // Clear form after submit
        setFormData({
            username: '',
            email:'',
            password: ''
        })
    }

    return (

            <form onSubmit={handleSubmit}>
                <div>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <input
                    type="passwprd"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>

                            <button type="submit">Submit</button>
            </form>

    )
}
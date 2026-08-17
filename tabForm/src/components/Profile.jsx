import React from 'react'

function Profile({ data, setData }) {

    const { name, age, email } = data

    const handleOnChange = (e, item) => {
        setData(prevState => ({
            ...prevState,
            [item]: e.target.value
        }))
    }

    return (
        <div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => handleOnChange(e, "name")}
                />

                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => handleOnChange(e, "age")}
                />

                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => handleOnChange(e, "email")}
                />
            </div>
        </div>
    )
}

export default Profile
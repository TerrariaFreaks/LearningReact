import React from 'react'

function Settings({ data, setData }) {
    const { theme } = data

    const handleOnChange = (e) => {
        setData(prevState => ({
            ...prevState,
            theme: e.target.name
        }))
    }

    return (
        <div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="dark"
                        checked={theme === "dark"}
                        onChange={handleOnChange}
                    />
                    Dark
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        name="light"
                        checked={theme === "light"}
                        onChange={handleOnChange}
                    />
                    Light
                </label>
            </div>
        </div>
    )
}

export default Settings
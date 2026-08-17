import React from 'react'

function Interests({ data, setData }) {
    const { interests } = data

    const handleOnChange = (e) => {
        setData(prevState => ({
            ...prevState,
            interests: e.target.checked
                ? [...prevState.interests, e.target.name]
                : prevState.interests.filter(
                    i => i !== e.target.name
                )
        }))
    }

    return (
        <div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="coding"
                        checked={interests.includes("coding")}
                        onChange={handleOnChange}
                    />
                    Coding
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="music"
                        checked={interests.includes("music")}
                        onChange={handleOnChange}
                    />
                    Music
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="javascript"
                        checked={interests.includes("javascript")}
                        onChange={handleOnChange}
                    />
                    JavaScript
                </label>
            </div>
        </div>
    )
}

export default Interests
import React from 'react'

export default function FormComponent() {
    return (
        <>
            <form>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}


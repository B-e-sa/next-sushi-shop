import React from 'react'

interface IInput {
    type: string
    style?: string
    placeholder?: string
    name: string
}

const Input = ({ type = "text", style, placeholder, name }: IInput) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={"bg-transparent border-b-2 border-b-zinc-700 mb-8 text-white " + style} />
    )
}

export default Input
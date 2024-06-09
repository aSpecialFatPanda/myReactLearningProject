import React, { useState } from 'react'

export default function FuncCom() {
    const [ number, setNumber ] = useState(100)
    const [ msg, setMsg ] = useState('hello func')
    const [ obj, setObj ] = useState({
        money: 0,
        type: 'work'
    })
    return (
        <div>
            <div>this is func com</div>
            <div>---{msg} --- {number}</div>
            <div>money: {obj.money}---type: {obj.type}</div>
            赚钱的方式：<input placeholder='赚钱的方式' value={obj.type} onChange={ (e) => {setObj({...obj, type: e.target.value}) }} />

            <input value={msg} onChange={(e) => {setMsg(e.target.value)}} />
            <button onClick={() => { setNumber(number + 1) } }> + </button>
            <button onClick={() => { setNumber(number - 1) }}> - </button>
            <button onClick={() => { setObj({...obj, money: number, type: msg}) }}></button>
                {/* <button onClick={() => { onClick('子组件给父组件的') }}>子组件给父组件的</button> */}
        </div>
    )
}
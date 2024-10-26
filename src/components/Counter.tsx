import React from "react";
import { useStore } from "../hooks/useStore";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {

    const { rootStore: { counter } } = useStore()

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
            <div>Count:{counter.getCountValue}</div>
            <div style={{ display: 'flex', flexDirection: 'row' }} >
                <button onClick={() => counter.increment()} >
                    +
                </button>
                <button onClick={() => counter.decrement()} >
                    -
                </button>
            </div>
        </div>
    )
})
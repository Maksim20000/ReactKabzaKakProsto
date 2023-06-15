import React, {useEffect, useState} from "react";

export const StatusProfileHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateMode = () => {
        setEditMode(true)
        props.updateStatusThunk(status)
    }

    const disActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            { !editMode &&
                <div onDoubleClick={activateMode}>{props.status || 'статуса нет'}</div>
            }
            { editMode &&
                <div ><input
                    onChange={ onChangeStatus}
                    onBlur={disActivateEditMode}
                    value={status}
                /></div>
            }

        </div>
    )
}
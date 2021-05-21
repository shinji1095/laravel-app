import React, {FC, useCallback} from "react";

export const Leave : FC = () => {
    const onClick = useCallback(() => {
        fetch("http://localhost:80//")
    },[])
    const timeList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    return(
        <form className="form-signin" >
            <h1 className="h3 mb-3 fw-normal">こんにちは</h1>
            <label htmlFor="leaveTimeselect">退出時間を選択してください</label>
            <select className="form-select" id="leaveTimeselect" name="leave">
            { timeList.map(num => {
                return <option value={num}>{num}</option>
            }) }
            </select>
            <div className="form-floating">
                <div className="mb-3">
                    <label htmlFor="leaveLunchInput" className="form-label">昼食のリスクレベル</label>
                    <input type="text" className="form-control" name="lunch" id="leaveLunchInput" placeholder="1人、リスク、研究室" />
                </div>
            </div>
            <div className="form-floating">
                <div className="mb-3">
                    <label htmlFor="leaveDinnerInput" className="form-label">夕食のリスクレベル</label>
                    <input type="text" className="form-control" name="dinner" id="leaveDinnerInput" placeholder="1人、リスク、研究室" />
                </div>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" >Submit</button>
        </form>
    )
}

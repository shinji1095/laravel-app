import React, {FC} from "react";

export const Attend : FC = () => {

    const timeList: number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    return(
        <div className="form-signin text-center">
            <h1 className="h3 mb-3 fw-normal">こんにちは</h1>
            <section className="roomSelect">
                <label htmlFor="roomLabel">使用する部屋を入力してください</label>
                <select className="form-select" aria-label="Default select example">
                    <option value="5540">5540</option>
                    <option value="5531">5531</option>
                </select>
            </section>
            <section className="timeSelect">
                <label htmlFor="timeLabel">入室時間を選択してください</label>
                <select className="form-select" aria-label="Default select example">
                    {timeList.map(num=>{
                        return(
                            <option value={num}>{num}</option>
                        )
                    })}
                </select>
                <label htmlFor="nowLabel">nowなら現在の時間</label>
            </section>
            <button type="button" className="btn btn-primary btn-lg">Submit</button>
        </div>
    )
} 

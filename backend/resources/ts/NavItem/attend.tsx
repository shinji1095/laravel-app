import React, {FC} from "react";

export const Attend : FC = () => {

    const timeList : number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    return(
        <div className="form-signin text-center">
            <form>
                <h1 className="mb-3 fw-normal">ようこそ</h1>
                <section className="roomSelect">
                    <label htmlFor="floatingInput">使用する部屋を選択してください</label>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="5540">5540</option>
                        <option value="5531">5531</option>
                    </select>
                    <label htmlFor="floatingInput">研究室なら5540、実験室なら5531</label>
                </section>
                <section className="timeSelect">
                    <label htmlFor="floatingInput">入力時間を選択してください</label>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        {timeList.map( num => {
                            return <option value={num}>{num}</option>
                            } ) }    
                    </select>
                    <label htmlFor="floatingInput">nowなら現在の時間</label>
                </section>
                <input className="w-100 btn btn-lg btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
    )
} 

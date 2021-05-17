import React, {useState, FC} from "react"
import {Navbar}  from "./navbar";
import {Top}     from "./NavItem/top";
import {Attend}  from "./NavItem/attend";
import {Leave}   from "./NavItem/leave";
import {Confirm} from "./NavItem/confirm";

export const Main: FC = () => {
    /*  
    ナビゲーション
    
    |-トップ　   　　　　　 (top)
    |-出欠管理 - 出席　　　 (attend)
      　　　　 - 退出　　　 (leave)
      　　　　 - 出欠確認 　(confirm)
    */
    interface NavItem{
       nav: string,
       ele: any
   }
    const navList : NavItem[] = [
        {nav: "top", ele: <Top />},
        {nav: "attend", ele: <Attend />},
        {nav: "leave", ele: <Leave />},
        {nav: "confirm", ele: <Confirm />}
    ];

    const [navState, setNavState] = useState<string>("top")
    const handleNav = (nav : string) : void => setNavState(nav);
    return(
        <>
            <Navbar handleNav={handleNav}/>
            <div className="wrapper">
                {navList.find((navItem : NavItem) => navItem.nav === navState)?.ele}
            </div>
        </>
    )
}
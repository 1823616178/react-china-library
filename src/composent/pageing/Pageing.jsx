import './style/index.scss'
import {useEffect, useState} from "react";
import async from "async";

export const Pageing = ({total = 300, pageSize = 10, pageNum = 1, currSize = 5}) => {
    const [newCurrIndex, setNewCurrIndex] = useState(1)
    const [totalList, setTotalList] = useState([[]])
    const [isActiveIndex, setActiveIndex] = useState(1)
    const [jumpNumber, setJumpNumber] = useState(1)
    const scatterNumberToList = async (numbers) => {
        for (let i = 0; i < total / pageSize; i++) {
            numbers.push(i + 1)
        }
    }
    /**
     * 合并数据
     */
    const groupAndStackNumbers = async (numbers, groupSize) => {
        const stack = [];
        let group = [];

        for (let number of numbers) {
            group.push(number);
            if (group.length === groupSize) {
                stack.push(group);
                group = []; // 重置group为新的空数组，为下一组做准备
            }
        }

        // 如果最后一组不足groupSize个，也需要入栈
        if (group.length > 0) {
            stack.push(group);
        }

        return stack;
    }
    const Init = async () => {
        let arr = []
        await scatterNumberToList(arr)
        let data = await groupAndStackNumbers(arr, currSize)
        setTotalList(data)
    }
    const isActiveStyle = {
        backgroundColor: "#b2806c",
        color: "#ffffff"
    }
    useEffect(() => {
        Init().then()
    }, []);

    const showMoreButton = (tag) => {
        return (
            <div className={"pageing_container_num"}
                 onClick={() => {
                     if (tag === 'add') {
                         setNewCurrIndex(totalList.length - 1)
                     } else {
                         setNewCurrIndex(1)
                     }
                 }}>...
            </div>
        )
    }
    return (
        <div className={"pageing_container"}>
            <div className={"pageing_container_arrow"}
                 onClick={() => {
                     setNewCurrIndex(newCurrIndex > 1 ? newCurrIndex - 1 : newCurrIndex)
                 }}></div>
            {
                newCurrIndex === totalList.length && showMoreButton("sub")
            }
            {totalList[newCurrIndex - 1].map((res, index) => {
                return <div key={index} style={res === isActiveIndex ? isActiveStyle : {}}
                            onClick={() => {
                                setActiveIndex(res)
                            }}
                            className={"pageing_container_num"}>{res}</div>
            })}
            {
                newCurrIndex < totalList.length && showMoreButton("add")
            }
            <div className={"pageing_container_arrow"}
                 onClick={() => {
                     setNewCurrIndex(newCurrIndex < totalList.length ? newCurrIndex + 1 : newCurrIndex)
                 }}
                 style={{transform: "rotate(180deg)"}}></div>
            <div className={"pageing_container_total"}>共8页</div>
            <div className={"pageing_container_jump_title"}>跳转到</div>
            <input className={"pageing_container_jump_input"}
                   value={jumpNumber}
                   onChange={(e) => {
                       const newValue = e.target.value;
                       // 确保输入是数字，并且在1到5的范围内
                       if (!newValue) {
                           setJumpNumber("");
                           return
                       }
                       if (newValue === '' || (/^\d+$/.test(newValue) && newValue >= 1 && newValue < total)) {
                           setJumpNumber(parseInt(newValue));
                       }
                   }}/>
            <div className={"pageing_container_jump_button"}
                 onClick={() => {
                     if (jumpNumber !== undefined && jumpNumber !== "") {
                         let totalIndex = totalList.findIndex(res => res.indexOf(jumpNumber) > -1)
                         if (totalIndex > -1) {
                             setNewCurrIndex(totalIndex + 1)
                             setActiveIndex(jumpNumber)
                         }
                     }
                 }}>确定
            </div>
        </div>
    )
}

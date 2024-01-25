import {create} from 'zustand'
// {
//     AdjClose: 177.570007,
//     Close: 177.570007,
//     Date: "2023-11-02",
//     High: 177.779999,
//     Low: 175.460007,
//     Open: 175.520004,
//     Volume: 77334800,
//   },

interface DataG{
    AdjClose : number,
    Close : number,
    Date : string,
    High : number,
    Low : number,
    Open : number,
    Volume : number
}
interface useGraphData{

data : DataG[],
setData : (data: DataG[]) => void,
}

export const useGraphDataH = create<useGraphData>((set)=>({
    data : [],
    setData : (s : DataG[]) => set({data:s})
}))
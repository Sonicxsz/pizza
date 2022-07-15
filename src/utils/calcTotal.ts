import { TrashType } from './../components/main/trashItem/TrashItem';


export const calcTotal = (items: TrashType[]) => {
    return items.reduce((sum, obj) =>{
        return (obj.price * obj.count) + sum 
    }, 0)
}
export const calcCount = (items: TrashType[]) => {
    return items.reduce((sum, obj) => {
        return obj.count + sum 
    },0)
}
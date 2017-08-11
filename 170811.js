//题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function remove(list,val) {
    list = list.split('->');
    list = list.filter(value =>{
        if(parseInt(value) === val) return false;
        else return true;
    })
    let result = list[0];
    for (let i=1;i<list.length;i++){
        result = `${result}->${list[i]}`;
    }
    return result;
}
console.log(remove(`1->2->3->3->4->5->3`,3));
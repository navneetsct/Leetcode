        return recursivelySumList(l1.next)+''+l1.val;
    } else {
        return l1.val;
    }
};
var recursivelyBuildNode = function(l1,index){
    if (index > 0){
        index--;
        return new ListNode(l1[index],recursivelyBuildNode(l1,index));
    }
    return undefined;
};
[

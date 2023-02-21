// 节流 第一次最后一次都触发
const throttle=(fn,delay)=>{
    let timer = null;
    let startTime = new Date();
    return function(){
        let nowTime = new Date();
        let remainingTime =delay-(nowTime - startTime); // 计算上次执行到现在，还剩多少时间执行下一次
        
        let that = this;
        let _args = arguments;
        clearTimeout(timer)
        if(remainingTime <= 0){         // 如果剩余时间已达  执行并重设开始时间
            fn.apply(that, _args);
            startTime = new Date();
        }else{  
            // 已经是最后一次执行   剩余时间到达后执行最后一次
            timer = setTimeout(fn,remainingTime)
        }
    }
}

export {throttle}
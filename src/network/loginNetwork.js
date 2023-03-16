const loginNetwork = {
    login : (userinfo) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userinfo.name === '小明'){
                resolve({ name: '小明', id: 123 })
            }else{
                reject({ message: '用户名错误' });
            }
        }, 1000)
    })
}

export default loginNetwork;
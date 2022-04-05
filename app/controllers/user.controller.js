exports.signup = (req,res) => {
    const {username, password, name, telephone} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`사용자 이름 : ${username}`)
    console.log(`비밀번호 : ${password}`)
    console.log(`이름 : ${name}`)
    console.log(`전화번호 : ${telephone}`)
    res.status(200).json({'reuslt' : 'ok'})

}

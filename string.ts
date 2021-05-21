let myName : string = 'Eunseo'

myName = 'Eunseo'

// ----------Template String---------- 
// 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 backtic (=backquote) 기호에 둘러쌓여 있다.
// 포함된 표현식은 `${ expr }` 와 같은 형태로 사용한다.

let fullName : string = 'Eunseo Park'

let age : number = 30

let sentence : string = `Hello, My name is ${ fullName}.
I'll be ${ age + 1} years old next month.`

console.log(sentence)

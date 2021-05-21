//let MyName : string = undefined  //Error

// let u: undefined = null  //Error

let v: void = undefined

let union : string | null = null 

union = 'Eunseo'



// ----------Null in Javascript ---------- 
// null 이라는 값으로 할당된 것을 null 이라고 한다.
// 무언가가 있는데, 사용할 준비가 덜 된 상태
// null 이라는 타입은 null 이라는 값만 가질 수 있다.
// 런타임에서 typeof 연산자를 이용해서 알아니면, object 이다.

let a :null = null
console.log(a) //null
console.log(typeof a) //object

// ----------Undefined in Javascript---------- 
// 값을 할당하지 않는 변수는 undefined 라는 값을 가짐
// 무언가가 아예 준비가 안된 상태
// object의 property 가 없을 때도 undefined 이다.
// 런타임에서 typeof 연산자를 이용해서 알아내면 undefined 

let b : undefined = undefined
console.log(b) //undefined
console.log(typeof b) // undefined


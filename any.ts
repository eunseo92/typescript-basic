// ----------any----------
// 어떤 타입이어도 상관없는 타입
// 최대한 쓰지 않는 것이 핵심
// 컴파일 타임에 타입체크가 정상적으로 이뤄지지 않음
// 컴파일 옵션 중 any 를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션 제공 (nolmplicitAny)

function returnAny(message : any): any {
    console.log(message)

}
const any1 = returnAny("리턴은 아무거나")

any1.toString()

// The any will continue to propagate through your objects : 
// After all, remember that all the convenience of any comes at the cost of losing type safety.
// Type safety is one of the main motivations for using TypesScript and you should try to avoid using any when not necessary

let looselyTyped: any = {}
let d = looselyTyped.a.b.c.d //Error x 

function leakingAny(obj: any){
    const a = obj.num  //any
    const b = a +1 //any
    return b
}
const c = leakingAny({ num: 0}) //any
c.indexof('0') //any 



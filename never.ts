function error(message: string): never {
    throw new Error(message)   
}

function fail() {
    return error("failed")
}

function infiniteLoop(): never {
    while(true){}
}

//---------never----------
// never 타입은 모든 타입의 subtype 이며, 모든 타입에할당 할 수 있다.
// 하지만, never 에는 그 어떤 것도 할당할 수 없음.
// any 조차조 never에게 할당할 수 없다.
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.

let ac: string = 'Hello'

if (typeof ac !== 'string'){
    ac //never
}

declare const ab: string | number;
if (typeof ab !== 'string'){
    ab  //number
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never

type ObjectIndexable = Indexable<{}>


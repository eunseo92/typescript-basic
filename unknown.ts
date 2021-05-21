declare const maybe: unknown

// const aNumber: number = maybe //unknown tpye을 할당할 number에 할당할 수 없음

if(maybe === true){  //unknown type
    const aBoolean: boolean = maybe

    //const aString: string = maybe // boolean type을 할당할 수 없음 

}

if (typeof maybe === 'string'){ //string type
    const aString: string = maybe
    // const aBoolean: boolean = maybe //string type을 booleand에 할당할 수 없음

}

// ----------unknown----------
// Typescript 3.0 버전부터 지원
// any와 짝으로 any qhek Type-safe 한 타입
// - any와 같이 아무거나 할당할 수 있다.
// - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// - 타입을 확정 해 주지않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하려면 runtime error를 줄일 수 있을 것 같다.
// - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.
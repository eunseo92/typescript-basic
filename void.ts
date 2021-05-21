function returnVoid(message: string): void {
    console.log(message)

    return undefined //void에 유일하게 undefined 할당 가능 
}

returnVoid("리턴이 없다.")
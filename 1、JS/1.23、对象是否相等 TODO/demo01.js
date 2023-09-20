



//* +0 -0 区分



//* NAN NAN识别


function eq(a, b) {

    // 区分+0 -0
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b
    }


    // 识别NAN  
    // NAN 不等于自身
    if (a !== a) {
        return b !== b
    }

    if (a === null || b === null) {
        return false
    }
}
function messageOne() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Eu sou,')
        }, 200);
    });
}

function messageTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Yago Valuche.')
        }, 400);
    });
}

function messageThree() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Dev Front-End.')
        }, 600);
    });
}

async function phrase() {
    const msgOne = await messageOne();
    const msgTwo = await messageTwo();
    const msgThree = await messageThree();

    console.log(`${msgOne} ${msgTwo} ${msgThree}`);
}

phrase();
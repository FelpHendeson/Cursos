const teste = async () => {
    setTimeout(() => {
        console.log('Hello World!');
    }, 1000);
    setTimeout(() => {
        console.log('Hello World 2!');
        alert('Hello World 2!');
        (async () => {
            await testeAsincrona();
        })();
    }, 2000);
    setTimeout(() => {
        console.log('Hello World 3!');
    }, 3000);
}

const testeAsincrona = async () => {
    setTimeout(() => {
        console.log('Hello World! 1.2');
    }, 1000);
    setTimeout(() => {
        console.log('Hello World 2.2!');
        alert('Hello World 2.2!');
    }, 2000);
}

teste();
function unblock() {
    return new Promise((resolve) => {
        setTimeout(resolve);
    });
}

async function doHeavyTask() {
    console.log(`Begin heavy task at ${Date.now()}`);
    return new Promise((resolve) => {
        const end = Date.now() + 3000;
        while (Date.now() < end) {
            unblock();
        }
        console.log(`End heavy task at ${Date.now()}`); //log('End heavy task', );
        resolve('Done');
    });
}

export default { doHeavyTask };

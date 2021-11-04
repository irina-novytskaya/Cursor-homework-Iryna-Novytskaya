const dataFromPrompt = prompt(`Enter the numbers of hieroglyphs:`);

const getRandomChinese = async length => {
    let i = 0;
    let hieroglyphsString = "";

    while (i < length) {

        let promise = new Promise(resolve => {
            setTimeout(() => {
                const data = +Date.now().toString().slice(-5);
                const hieroglyphs = String.fromCharCode(data);

                resolve(hieroglyphs)
            }, 50 * length)

        });
        i++;

        hieroglyphsString += await promise;

    }
    return alert(hieroglyphsString)
}

getRandomChinese(dataFromPrompt);
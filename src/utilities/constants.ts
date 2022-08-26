const hUrl = 'http://localhost';

const constants = {
    url: hUrl,
    fullUrl: hUrl + ':',
    endPoint1: '/api/images',
    endPoint2: '/api/fetch',
    port: 3000,
    qr_fnm: 'fnm',
    qr_wdt: 'wdt',
    qr_hit: 'hit',
    srvrStr: 'Server started at ',
    pathImg: './images/',
    pathSiz: './images/resized/',
    imgExtn: '.jpg',
    enableLogger: true,
    timeStamp: (): string => {
        const cDate = new Date();
        const logDTime = `${cDate.getFullYear()}-${
            cDate.getMonth() + 1
        }-${cDate.getDate()} ${cDate.getHours()}:${cDate.getMinutes()}:${cDate.getSeconds()}`;

        return logDTime;
    },
    visited: (url: string, logDTime: string): string => {
        const ret = `Url: ${url} was visited at: ${logDTime}`;
        return ret;
    },
    pgHtml: (
        fullUrl: string,
        port: number,
        endPoint2: string,
        qr_fnm: string,
        qr_fnmV: string,
        qr_wdt: string,
        qr_wdtV: string,
        qr_hit: string,
        qr_hitV: string
    ): string => {
        const ret = `<body style="width: 100%; height: 100%; background-color: dodgerblue;"><div style="display: flex; justify-content: center;height: 500px;"><img style="height: auto; margin: auto; border: 1px solid black; padding: 5px;" src="${
            ((fullUrl + port) as string) + endPoint2
        }?${qr_fnm}=${qr_fnmV}&${qr_wdt}=${qr_wdtV}&${qr_hit}=${qr_hitV}" alt="logo"></div></body>`;
        return ret;
    },
};

export default constants;

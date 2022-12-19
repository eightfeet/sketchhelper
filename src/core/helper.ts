import dayjs from "dayjs";

export const angleToRotation = (angle: number) => (Math.PI / 180) * angle;

export const ptod = () => {};

export const dtop: (data: string) => string[][] = (data) =>
    window
        .atob(data)
        .split(',')
        .map((item) => window.atob(item).split(','));

export const baseLicense = {
    prodCode: 'ART',
    appVersion: '1.0',
    osType: 'IOS8',
};

export const encodeDate = (license: string) => {
    const licenseArr = license.split('-');
    const dateArr = dayjs().format('YYMMDD').split('');
    return licenseArr.map((item, index) => {
        const el = `${dateArr[index]}${item}`;
        return el
    }).join('-');
}

export const decodeDate = (license: string) => {
    const licenseArr = license.split('-');
    let date = '20'
    const lice = licenseArr.map((item, index) => {
        date = `${date}${index && index%2 === 0 ? '/' : ''}${item.slice(0,1)}`
        const el = item.slice(1, item.length);
        return el
    }).join('-');
    return {
        date,
        lice
    }
}


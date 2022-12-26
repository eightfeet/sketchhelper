import licenseKey from 'license-key-gen';
import dayjs from "dayjs";
import { store } from '~/components/StilLife/proxyStilLife';

export const ndmap = 'eyIwIjoiQSIsIjEiOiJCIiwiMiI6IkMiLCIzIjoiRCIsIjQiOiJFIiwiNSI6IkYiLCI2IjoiRyIsIjciOiJIIiwiOCI6IkkiLCI5IjoiSiJ9';

export const angleToRotation = (angle: number) => (Math.PI / 180) * angle;

export const ptod = () => { };

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

export const encodeDate = (license: string, date: string) => {
    const licenseArr = license.split('-');
    const dateArr = dayjs(date).format('YYMMDD').split('').map(item => JSON.parse(window.atob(ndmap))?.[item]);
    return licenseArr.map((item, index) => {
        const el = `${dateArr[index]}${item}`;
        return el
    }).join('-');
}

export const decodeDate = (license: string) => {
    const licenseArr = license.split('-');
    let date = 'CA'
    const lice = licenseArr.map((item, index) => {
        date = `${date}${index && index % 2 === 0 ? '/' : ''}${item.slice(0, 1)}`
        const el = item.slice(1, item.length);
        return el
    }).join('-');
    return {
        date,
        lice
    }
}

export const auth = async (name: string, license: string) => {
    const { lice, date } = decodeDate(license);
    const checkerData = JSON.parse(window.atob(ndmap));
    const keysArr = Object.keys(checkerData);
    const end = date.split('').map(item => {
        let el = item;
        for (let index = 0; index < keysArr.length; index++) {
            const key = keysArr[index];
            const keyMap = checkerData[key];
            if (el === keyMap) el = key;
        }
        return el;
    }).join('');

    if (dayjs(end).isBefore(dayjs())) {
        return Promise.reject('%E6%BF%80%E6%B4%BB%E7%A0%81%E5%B7%B2%E8%BF%87%E6%9C%9F')
    }
    
    const licData = {
        ...baseLicense,
        info: { name },
    }
    const validate = await licenseKey.validateLicense(licData, lice);
    if (validate.errorCode === 0) {
        store.auth = true;
        return Promise.resolve();
    }

    return Promise.reject('%E6%BF%80%E6%B4%BB%E7%A0%81%E6%88%96%E7%94%A8%E6%88%B7%E5%90%8D%E6%9C%89%E8%AF%AF%EF%BC%8C%E8%AF%B7%E9%87%8D%E8%AF%95%EF%BC%81')
}
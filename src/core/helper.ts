export const angleToRotation = (angle: number) => (Math.PI / 180) * angle;

export const ptod = () => {};

export const dtop: (data: string) => string[][] = (data) =>
    window
        .atob(data)
        .split(',')
        .map((item) => window.atob(item).split(','));

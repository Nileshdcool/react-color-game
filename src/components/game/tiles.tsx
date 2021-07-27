
const createMap = (columns: any, lines: any, colors: any) =>
    Array.from({ length: columns }).map((v, l) =>
        Array.from({ length: lines }).map((x, c) => ({
            color: colors[Math.floor(Math.random() * colors.length)],
            origin: l + c == 0
        }))
    );

const setOrigin = (map: any, color: any) => {
    let square = [...map];

    const get = (l: any, c: any) => {
        try {
            return square[l][c] || {};
        } catch (e) {
            return false;
        }
    };

    const treeSearch = (l: any, c: any) => {
        if (square[l][c].color === color) {
            square[l][c].origin = true;
        }

        if (square[l][c].origin) {
            square[l][c].color = color;
        }

        const varitype: any = (get(l + 1, c).color === color);
        const varitype2: any = (get(l, c + 1).color === color);
        const varitype3: any = (get(l - 1, c).color === color);
        const varitype4: any = (get(l, c - 1).color === color);

        if (varitype ^ get(l + 1, c).origin) {
            treeSearch(l + 1, c);
        }

        if (varitype2 ^ get(l, c + 1).origin) {
            treeSearch(l, c + 1);
        }

        if (varitype3 ^ get(l - 1, c).origin) {
            treeSearch(l - 1, c);
        }

        if (varitype4 ^ get(l, c - 1).origin) {
            treeSearch(l, c - 1);
        }
    };

    treeSearch(0, 0);

    return square;
};

export { createMap, setOrigin };
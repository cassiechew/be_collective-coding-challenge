

const BYTE_BLOCK = 1024;
const byteNames = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

export default function ByteConversion (toConv, count) {
    if (toConv >= BYTE_BLOCK) {
        return ByteConversion(enBiggen(toConv), count + 1);
    }

    return Math.floor(toConv) + " " + byteNames[count];
}

const enBiggen = (toConv) => {
    return toConv/BYTE_BLOCK;
};
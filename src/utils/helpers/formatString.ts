export function truncate(text: string, limit: number) {
    if (text.length > limit) {
        let textTruncated = text.slice(0, limit) + '...';

        return textTruncated;
    } else {
        return text;
    }
}
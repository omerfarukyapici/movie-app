export const getPosterUrl = (posterPath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
}

export const toTop = () => {
    return window.scrollTo(window.x === 0, window.y === 0);
}
const getConfig = () => {
    const config = {}
    for (const k in window.BASECONFIG) {
        config[k] = window.BASECONFIG[k]
    }
    return config
}
export default getConfig()

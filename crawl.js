const normalizeURL = (url) => {
  try {
    const urlObj = new URL(url);
    const hostpath = urlObj.hostname + urlObj.pathname + urlObj.search + urlObj.hash;
    if (hostpath.length > 0 && hostpath.slice(-1) === '/') {
      return hostpath.slice(0, -1)
    }
    return hostpath
  } catch (e) {
    console.error("Invalid URL:", e);
    return null;
  }
}

module.exports = {
  normalizeURL
}
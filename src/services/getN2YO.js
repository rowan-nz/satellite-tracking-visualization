export default (n2yoID) => {
  return new Promise((resolve, reject) => {
    const url = `https://tinhat-proxy.herokuapp.com/https://api.n2yo.com/rest/v1/satellite/above/-43.5036/172.5948/0/70/${n2yoID}/&apiKey=RSCL8E-SBWMHN-DMSFAJ-47KU`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText).above);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

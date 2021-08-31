import CryptoJS from 'crypto-js'; //Docs: https://cryptojs.gitbook.io/docs/#documentation

export function sha1(value: string): string {
  return CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(value));
}

export function sha256(value: string): string {
  return CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(value));
}

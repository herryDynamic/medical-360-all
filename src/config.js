
const dev = {
  baseUrl: 'http://152.136.182.96:5034/',
  jumpUrl: 'http://10.131.101.56:88/patient-panorama.html' // 全景图跳转
}
const test = {
  baseUrl: 'http://172.16.119.102:5031/'
}
const production = {
  baseUrl: '',
  baseUrl2: ''
}
console.log(dev, test, production)

export default dev

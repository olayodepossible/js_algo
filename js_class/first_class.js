var jsIs = 'funf';
var a = 'Javascript is' + (a === 'fun') ? 'fun' : 'diferent';
function ab() {
  a = 'hello word';
  return;

  // function a()
}
const supportedBanks = {
  '057': 'Zenith Bank',
  '044': 'Access Bank',
  '058': 'GTB',
  '035': 'WEMA',
};

const retrievedInfo = {};
const fileObject = [];
/* for (let code in supportedBanks) {
  retrievedInfo['bankCode'] = [(code: {total: 0})];
} */
for (let code in supportedBanks) {
  retrievedInfo[code] = {
    total: 0,
  };
}
retrievedInfo['fileObject'] = fileObject;
/* for (let index = 0; index < 4; index++) {
  retrievedInfo['fileObject'][index] = index + 1;
} */

retrievedInfo['fileObject'].push(10);
retrievedInfo['fileObject'].push(20);
retrievedInfo['fileObject'].push(30);
retrievedInfo['fileObject'].push(40);
retrievedInfo['fileObject'].push(50);
retrievedInfo['fileObject'].push(60);
retrievedInfo['fileObject'].push(70);

// console.log(retrievedInfo['fileObject'][1]);

const retrieveFileObjectName = (fileObjectNames) => {
  const fileObject_length = fileObjectNames.length;
  if (fileObject_length > 5) {
    return fileObjectNames.slice(0, 5).map((el) => `<li> ${el}</li>`);
  } else {
    return fileObjectNames.map((el) => `<li> ${el}</li>`);
  }
};

console.log(retrievedInfo);

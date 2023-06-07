const axios = require('axios');

const makeApiRequest = async () => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('clientid', '111');
  encodedParams.set('txn_id', '985656');
  encodedParams.set('method', 'getcaptcha');

  const options = {
    method: 'POST',
    url: 'https://aadhaar-number-verification.p.rapidapi.com/Uidverifywebsvcv1/Getcaptcha',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'dcb9806edamsh7e575416baeafcdp10a117jsn2a1945f3d1a9',
      'X-RapidAPI-Host': 'aadhaar-number-verification.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

makeApiRequest();

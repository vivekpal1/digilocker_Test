import axios, { AxiosResponse } from 'axios';

interface DigilockerAuthResponse {
  access_token: string;
  token_type: string;
}

interface DigilockerUserInfo {
  user_name: string;
  name: string;
  email_id: string;
  dob: string;
  phone_number: string;
  gender: string;
}

const authenticateWithDigilocker = async (
  clientID: string,
  clientSecret: string,
  authToken: string
): Promise<string | null> => {
  try {
    const response: AxiosResponse<DigilockerAuthResponse> = await axios.post(
      'https://api.digitallocker.gov.in/public/oauth2/token',
      {
        grant_type: 'authorization_code',
        code: authToken,
        client_id: clientID,
        client_secret: clientSecret,
      }
    );

    const accessToken = response.data.access_token;
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const userInfoResponse: AxiosResponse<DigilockerUserInfo> = await axios.get(
      'https://api.digitallocker.gov.in/public/oauth2/1/AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return userInfoResponse.data.name || null;
  } catch (error) {
    console.error('Error authenticating with DigiLocker:', error);
    return null;
  }
};

export default authenticateWithDigilocker;

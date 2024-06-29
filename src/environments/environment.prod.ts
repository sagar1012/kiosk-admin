import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'https://cloud-api.up.railway.app/',
  // apiUrl: 'http://localhost:3001/'
};

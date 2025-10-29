import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  insecureSkipTLSVerify: true,
};

export default function () {
  http.get('https://k6.io/');
  sleep(1);
}
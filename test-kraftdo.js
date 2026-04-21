import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '30s', target: 25 },
    { duration: '30s', target: 25 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.05'],
  },
};

export default function () {
  let res = http.get(
    'https://api.kraftdo.cl/api/tokens/TU_TOKEN_UUID_AQUI',
    { headers: { 'Accept': 'application/json' } }
  );
  check(res, {
    'status 200': (r) => r.status === 200,
    'menos de 2s': (r) => r.timings.duration < 2000,
  });
  sleep(1);
}

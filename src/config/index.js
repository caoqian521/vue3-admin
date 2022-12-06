//当前环境
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/775ef3a07d45df40faa30779c84bb950/api',
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/775ef3a07d45df40faa30779c84bb950/api',
  },
  pro: {
    baseApi: '//future.com/api',
    mockApi:
      'https://www.fastmock.site/mock/775ef3a07d45df40faa30779c84bb950/api',
  },
}
export default {
  env,
  mock: true,
  ...EnvConfig[env],
}

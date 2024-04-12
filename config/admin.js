module.exports = ({ env }) => ({
  auth: {
    secret: env('STRAPI_ADMIN_JWT_SECRET', 'defaultSecretValue'),
  },
  apiToken: {
    salt: env('STRAPI_API_TOKEN_SALT', 'defaultSaltValue'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

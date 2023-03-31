const { default: axios } = require('axios');

exports.auth = async function (req, res, next) {
  const { oauth_consumer_key, oauth_signature } = req.headers;
  try {
    const tokenRequest = await axios.post(`https://api.cernercare.com/oauth/access?oauth_consumer_key=${oauth_consumer_key}&oauth_signature_method=PLAINTEXT&oauth_signature=${oauth_signature}`)

    const [data, secret,] = tokenRequest.data.split('&');
    const [, oauth_secret] = secret.split('=');
    let data_fixed = data.replace('oauth_token=', 'oauth_token="')
    auth = `OAuth ${data_fixed}",oauth_consumer_key="${oauth_consumer_key}",oauth_signature_method="PLAINTEXT",oauth_signature="${oauth_signature}${oauth_secret}"`
    req.authHeader = auth;
    return next()
  } catch (error) {
    console.log(error)
    res.statusCode = 401;
    res.end('Unauthorized');
  }
};

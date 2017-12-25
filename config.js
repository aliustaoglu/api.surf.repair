module.exports = {
  profile: 'default',
  lambdaConfigs : {
    Runtime: 'nodejs6.10',
    Role: 'arn:aws:iam::504786997684:role/lambda_surf_execution',
    Handler: 'index.handler',
    Region: 'us-east-1'
  }
}
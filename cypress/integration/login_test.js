
describe('My First Test', function() {
    it('Visits Local host', function() {
      cy.visit('localhost:3000')
    })
  })

  describe('My First Test', function() {
    it('finds the content "login"', function() {
      cy.visit('localhost:3000')
  
      cy.contains('Log in')
    })
  })

  

describe('My First Test', function() {
    it('clicks the link "type"', function() {
      cy.visit('https://dev-gco3gwsp.auth0.com/login?state=g6Fo2SBMWjhVM1dhSzlTZXM2RHFIbzlGUE5XaDM2NWl3TkdKZKN0aWTZIEdBei1SMkgxX3RUYU9kMzFZWHdMX2xfemY1MnljbXV2o2NpZNkga0ZwR20wdGJwYzJsVWF4MUlsNVMwdlM1NG9wd2gzaXY&client=kFpGm0tbpc2lUax1Il5S0vS54opwh3iv&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=jPUG46C7xFOD1y7Q8F7JN0dbg4F.R7w4wLhYZ9eo7OV&code_challenge=52f5ipkkc6UeYoBVPALiSAaUAEurLCPtxrQ9ngngBDI&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMS4xIn0%3D')
  
      cy.contains('login').click()
    })
  })

  describe('My First Test', function() {
    it('clicks the link user', function() {
    cy.visit('https://dev-gco3gwsp.auth0.com/login?state=g6Fo2SBMWjhVM1dhSzlTZXM2RHFIbzlGUE5XaDM2NWl3TkdKZKN0aWTZIEdBei1SMkgxX3RUYU9kMzFZWHdMX2xfemY1MnljbXV2o2NpZNkga0ZwR20wdGJwYzJsVWF4MUlsNVMwdlM1NG9wd2gzaXY&client=kFpGm0tbpc2lUax1Il5S0vS54opwh3iv&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=jPUG46C7xFOD1y7Q8F7JN0dbg4F.R7w4wLhYZ9eo7OV&code_challenge=52f5ipkkc6UeYoBVPALiSAaUAEurLCPtxrQ9ngngBDI&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMS4xIn0%3D')
  
    cy.contains('Tech2Rent').click()
    })
  })

  describe('My First Test', function() {
    it('clicks the link user', function() {
    //cy.visit('https://dev-gco3gwsp.auth0.com/login?state=g6Fo2SBMWjhVM1dhSzlTZXM2RHFIbzlGUE5XaDM2NWl3TkdKZKN0aWTZIEdBei1SMkgxX3RUYU9kMzFZWHdMX2xfemY1MnljbXV2o2NpZNkga0ZwR20wdGJwYzJsVWF4MUlsNVMwdlM1NG9wd2gzaXY&client=kFpGm0tbpc2lUax1Il5S0vS54opwh3iv&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=jPUG46C7xFOD1y7Q8F7JN0dbg4F.R7w4wLhYZ9eo7OV&code_challenge=52f5ipkkc6UeYoBVPALiSAaUAEurLCPtxrQ9ngngBDI&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMS4xIn0%3D')
  
    cy.contains('Google')
    })
  })


 
@app
begin-app

@static

@http
post /gumroad/ping


@tables
data
  scopeID *String
  dataID **String  
  ttl TTL

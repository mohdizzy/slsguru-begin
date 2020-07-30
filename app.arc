@app
begin-app

@http
get /
get /weather

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

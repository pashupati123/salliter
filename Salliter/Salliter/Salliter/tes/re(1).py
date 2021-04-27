import os
import redis
import json

data=json.loads(open('/Users/pverma/desktop/tes/data.json').read())
data=json.dumps(data)
r = redis.Redis()
r.mset({"flight":data})
reply = r.get("flight")
reply = json.loads(reply)
print(reply)



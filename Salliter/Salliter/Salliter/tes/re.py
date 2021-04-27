import os
import redis
import json

data=json.loads(open('/Users/z004lc8/Desktop/Salliter/Salliter/tes/flight_data.json').read())
#data=json.loads(str(open('/Users/z004lc8/Desktop/Salliter/Salliter/tes/flight_data.txt', 'r')))
data=json.dumps(data)
r = redis.Redis()
r.mset({"flight":data})
reply = r.get("flight")
reply = json.loads(reply)
print(reply)
#p=reply['LKO-LucknowDEL-Delhi2020-01-05']['flight']
#print(len(p))
#for i in p:
    #print(i['flight'])

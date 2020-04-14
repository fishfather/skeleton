
import json
import jsonpath

strList = '[1, 2, 3, 4]'
obj = json.loads(strList)
print(type(obj))

strDict = '{"city":"北京", "name":"大猫"}'
obj = json.loads(strDict)
print(type(obj), obj['name'])

##########################
jsonobj = json.load(open("data/jsonpath1.json", "r", encoding="utf8"))
print(type(jsonobj))

namelist = jsonpath.jsonpath(jsonobj, '$..name')
print(namelist[1])

namelist = jsonpath.jsonpath(jsonobj, '$..intes')
print(namelist[1])

namelist = jsonpath.jsonpath(jsonobj, '$[*].others.name')
print(namelist)
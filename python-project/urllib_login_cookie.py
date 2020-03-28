import urllib.request
import urllib.parse
import http.cookiejar


cj = http.cookiejar.CookieJar()
handler = urllib.request.HTTPCookieProcessor(cj)

# 之后所有请求都用opener
opener = urllib.request.build_opener(handler)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}

# login
loginUrl = 'http://login/'
formData = {
    'name': 'sam',
    'password': 'code'
}
data = urllib.parse.urlencode(formData).encode()
request = urllib.request.Request(url=loginUrl, headers=headers)

# 第一次使用opener登入，会保持cookie到cookiejar
res = opener.open(request, data=data)

getDataUrl = 'http://login/getData'
request = urllib.request.Request(url=getDataUrl, headers=headers)
# 登入后可以用同一个opener去获取该网站的数据
res = opener.open(request)

print(res.read().decode())


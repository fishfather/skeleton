import urllib.request
import urllib.parse

headers = {
    # 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}

url = 'http://fanyi.baidu.com/sug'
formData = {
    'kw': 'book'
}
data = urllib.parse.urlencode(formData).encode()

req = urllib.request.Request(url=url, headers=headers)

res = urllib.request.urlopen(req, data=data)

# print(res.getcode())
print(res.read().decode())

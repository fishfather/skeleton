import urllib.request
import urllib.parse

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}

url = 'http://www.baidu.com/'

# 用handler 是需要用到高级功能，可以实现代理， cookie等
handler = urllib.request.HTTPHandler()
# 之后发送请求都用opener, 而不是用urlopen方法， 用法和urlopen一样
opener = urllib.request.build_opener(handler)

# 构建请求对象
request = urllib.request.Request(url, headers=headers)

response = opener.open(request)

print(response.read().decode())

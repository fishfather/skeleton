import urllib.request
import urllib.parse

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}

url = 'http://www.baidu.com/'


# 代理地址 113.79.75.104:9797
handler = urllib.request.ProxyHandler({'http': '113.79.75.104:9797'})
opener = urllib.request.build_opener(handler)

request = urllib.request.Request(url, headers=headers)

response = opener.open(request)

print(response.read().decode())

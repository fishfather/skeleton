import urllib.request

# 伪装headers... 
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}

url = 'http://www.baidu.com/'
req = urllib.request.Request(url=url, headers=headers)

# get request method
res = urllib.request.urlopen(req)

print(res.getcode(), res.geturl())

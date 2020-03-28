import urllib.request

url = 'http://www.baidu.com/'

response = urllib.request.urlopen(url=url)

# encode()  字符串转换为字节
# decode()  字节转换为字符串       默认utf8


# print(response.read().decode())

# 写入文件1     字符串形式写入
# with open('output/baidu.html', 'w', encoding='utf8') as fp:
#     fp.write(response.read().decode())

# 写入文件2     直接二进制形式写入      对于图片之类资源写入文件
# with open('output/baidu.html', 'wb') as fp:
#     fp.write(response.read())

# 写入文件3     方便
urllib.request.urlretrieve(url=url, filename='output/baidu.html')

# print(response.geturl())
# print(response.getheaders())
# print(dict(response.getheaders()))

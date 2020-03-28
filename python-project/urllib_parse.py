import urllib.parse

url = 'www.baidu.com?wd=test&name=中文'

# url里如果出现 $ 空格 中文 等，就要对其进行编码

# url编码   只有编码后才能发送请求, 一般编码请求参数
urlEncode = urllib.parse.quote(url)
print('urlEncode: %s' % urlEncode)

urlDecode = urllib.parse.unquote(urlEncode)
print('urlDecode: %s' % urlDecode)



# 拼接请求参数，并会直接编码
data = {
    'name': 'Same',
    'age': 18,
    'weight': 120,
    'value': '中文'
}

queryStr = urllib.parse.urlencode(data)
print('queryStr: %s' % queryStr)

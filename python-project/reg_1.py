import re

str = '<div><span>this is value</span></div>'

pattern = re.compile(r'<(\w+)><(\w+)>.*</\2></\1>')
ret = pattern.search(str)

print(ret)

# re.I        忽略大小写
# re.M        多行匹配
# re.S        单行匹配,     把多行当成一行处理

print('*'*20)

str = '''pig is find
dog is her
dog is he
'''

pattern = re.compile(r'^dog', re.M)     # 这时就可以搜到dog开头的,因为有re.M
ret = pattern.search(str)               # search 返回单行，要多行用findall
print(ret)

pattern = re.compile(r'^dog', re.M)
ret = pattern.findall(str)          
print(ret)

print('*'*20)

str = '''<div>conent1
content2
content3
</div>
'''

# 获取div内容
pattern = re.compile(r'<div>(.*)</div>', re.S)      # 用re.S 就可以当一整行来匹配，并且加了()就是分组，可以只返回分组值
ret = pattern.findall(str)            
print(ret)

print('*'*20)
# 查找替换

str = 'dog is false, dog is true'
pattern = re.compile(r'dog')
ret = pattern.sub('pig', str)
print(ret)
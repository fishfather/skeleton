from bs4 import BeautifulSoup

soup = BeautifulSoup(open('data/bs4_data.html', encoding='utf8'), 'lxml')

# print(type(soup))

# 找到第一个 a 标签
print('type(soup.a) = %s' % type(soup.a))

# 获取属性
print('soup.a[\'href\'] = %s' % soup.a['href'])
# 获取所有属性
print('soup.a.attrs = {}'.format(soup.a.attrs))

# 获取内容
print('soup.a.text = {}'.format(soup.a.text))  # 获取所有文本，包含子标签的文本
print(soup.a.get_text())    # 同上
print(soup.a.string)    # 如果标签还有标签，则为None

print('*' * 10)
print(soup.div.text)
print('soup.div.string = {}'.format(soup.div.string))
print('*' * 10)

# 找到第一个符合要求的a 标签, 类似soup.a
print('1'*5, soup.find('a'))
# 找到a标签，并且title=a3
print('2'*5, soup.find('a', title='a3'))
# class是关键字，所有的用class_
print('3'*5, soup.find('a', class_='a2_class'))

print('*' * 10)
listdiv1 = soup.find('div', class_='ullist2')
# 先找到父标签，再通过父标签找到子标签
print('4'*5, listdiv1.find('li', class_='dd'))

print('*' * 10)
# 找到所有标签 用find_all
print('5'*5, soup.find_all('a'))

# 找到所有，并取出前2个
print('6'*5, soup.find_all('a', limit=2))

# 同时找多个标签
print('6'*5, soup.find_all(['b', 'c']))

print('7'*5, soup.find_all('li', class_='dd'))

###########################################
# 通过选择器查找 > css一样的语法选择器
###########################################

print(soup.select('.abc > .style1'))
print(soup.select('#idb1')[0].text)

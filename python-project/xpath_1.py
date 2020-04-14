from lxml import etree

# 用法1：解决lxml.etree.XMLSyntaxError: Opening and ending tag mismatch
parser = etree.HTMLParser(encoding='utf-8')
tree = etree.parse('data/xpath_data.html', parser=parser)

# 用法2
# tree = etree.parse('data/xpath_data.html')

# print(tree.xpath('//div[@class = "abc"][1]/text()'))
print('1'*5, tree.xpath('//div[@class = "abc"][2]/@title'))

print('2'*5, tree.xpath('//li[@id = "li_1"]/text()'))

print('3'*5, tree.xpath('//div/ul/*//text()'))

print('4'*5, tree.xpath('//span[@tilte = "span1" and @class="t2"]/text()'))

print('5'*5, tree.xpath('//span[contains(@class, "type1")]')[0].text)

print('6'*5, tree.xpath('//span[1]/@*'))

# 现找到一个节点，再通过它查找子集
p2Div = tree.xpath('//div[@class = "p2"]')[0]
# 这里要用.开头，这样才会从p2Div开始查找，否则用//开头就是全局查找
hDiv = p2Div.xpath('.//a[@href = "ttt"]/text()')
print('7'*5, hDiv)
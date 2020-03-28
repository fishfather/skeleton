from lxml import etree

tree = etree.parse('data/xpath_data.html')
# print(tree.xpath('//div[@class = "abc"][1]/text()'))
print(tree.xpath('//div[@class = "abc"][2]/@title'))
import urllib.request
from lxml import etree

class ZhuatuSpider(object):
    url = 'https://lt.cjdby.net/forum-77-1.html'

    def __init__(self):
        pass

    def run(self):
        # print('start run {}'.format(ZhuatuSpider.url))
        response = urllib.request.urlopen(url=ZhuatuSpider.url)
        content = response.read().decode('gbk')
        
        tree = etree.HTML(content)
        list = tree.xpath('//a[@class = "s xst"]')

        for item in list:
            print(item.text)

        print(len(list))

def main():
    print('xpath start')
    spider = ZhuatuSpider()
    spider.run()


if __name__ == "__main__":
    main()

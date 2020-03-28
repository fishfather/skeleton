import urllib.request
import urllib.parse

import re
import os
import time


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}


def getRequest(url):
    req = urllib.request.Request(url=url, headers=headers)
    return req


def getContent(url):
    try:
        req = getRequest(url)
        res = urllib.request.urlopen(req, timeout=3)
        return res.read().decode()
    except Exception as e:
        print(e)
    return ''


def download_asset(url, filename):
    try:
        req = getRequest(url)
        res = urllib.request.urlopen(req, timeout=3)
        with open(filename, 'wb') as fp:
            fp.write(res.read())
    except Exception as e:
        print(e)


def getDir():
    dirname = 'output/tupian'
    if not os.path.exists(dirname):
        os.mkdir(dirname)
    return dirname


def download_all_images(url):
    imgContent = getContent(url)

    pattern = re.compile(r'window.open\(\'(.*?)\'\)')
    imglist = pattern.findall(imgContent)

    dirname = getDir()
    for imgUrl in imglist:
        # imgUrl=https://p9.urlpic.club/pic20/upload/image/20200325/3251244914.jpg
        imgUrl = imgUrl.replace('https', 'http')

        filename = imgUrl.split('/')[-1]
        # filename=3251244914.jpg

        outputfile = dirname+'/'+filename

        print('download start {} to {}'.format(imgUrl, outputfile))

        download_asset(imgUrl, outputfile)
        time.sleep(0.1)


print('Start')

# url = 'http://z1.1080pgqzz.club/pw/html_data/15/2003/4686072.html'
# download_all_images(url)


url = 'http://z1.1080pgqzz.club/pw/thread.php?fid=15&page=1'
content = getContent(url)

pattern = re.compile(r'<a href="(html_data.*?)"', re.S)
urlList = pattern.findall(content)
root = 'http://z1.1080pgqzz.club/pw/'

for page in urlList:
    pageUrl = root+page
    print('start page {}'.format(pageUrl))
    download_all_images(url)
    time.sleep(1)

print('Complete')


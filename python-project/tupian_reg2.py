import urllib.request
import urllib.parse
import http.cookiejar

import re
import os
import time


headers = {
    # :authority: p9.urlpic.club
    # :method: GET
    # :path: /pic20/upload/image/20200325/3251244962.jpg
    # :scheme: https
    # 'accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    # 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    # 'if-range': '"1160e0c86a2d61:0"',
    # range: bytes=32137-32137
    # 'referer': 'http://z1.1080pgqzz.club/pw/html_data/15/2003/4684180.html',
    # 'sec-fetch-dest': 'image',
    # 'sec-fetch-mode': 'no-cors',
    # 'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}


def getRequest(url):
    req = urllib.request.Request(url=url, headers=headers)
    return req


def getOpener():
    cj = http.cookiejar.CookieJar()
    handler = urllib.request.HTTPCookieProcessor(cj)
    opener = urllib.request.build_opener(handler)
    return opener


def getContent(url):
    req = getRequest(url)
    res = opener.open(req, timeout=2)
    content = res.read().decode()
    return content


def download_asset(url, filename):
    try:
        req = getRequest(url)
        res = opener.open(req, timeout=2)
        with open(filename, 'wb') as fp:
            fp.write(res.read())
    except Exception as e:
        print(e)


def getDir():
    dirname = 'output/tupian'
    if not os.path.exists(dirname):
        os.mkdir(dirname)
    return dirname


def get_image_list2(imgContent):
    pattern = re.compile(r'window.open\(\'(.*?)\'\)')
    imglist = pattern.findall(imgContent)
    return imglist


def get_image_list(imgContent):
    pattern = re.compile(r'<img src="(.*?)"/>', re.S)
    imglist = pattern.findall(imgContent)
    return imglist


def download_all_images(url):
    imgContent = getContent(url)

    imglist = get_image_list(imgContent)

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

url = 'https://www.2567bu.com/pic/html28/29328.html'
opener = getOpener()
imgContent = getContent(url)
# print(get_image_list(imgContent))
download_all_images(url)

print('Complete')


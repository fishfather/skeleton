import os
import time
# for i in range(0, 5):
#     print(i)

print('hello')
# time.sleep(0.5)
# print('2')

str = 'aaa bbb ccc aaa'
print(str.replace('aaa', 'eee'))

dirname = 'output/tupian'
if not os.path.exists(dirname):
    os.mkdir(dirname)
    
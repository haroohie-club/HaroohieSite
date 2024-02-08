import opencc
import os

converter = opencc.OpenCC('s2twp.json')

def recursive_ls(dir, filter):
    ls = []
    for item in os.listdir(dir):
        item_abspath = os.path.join(dir, item)
        if os.path.isfile(item_abspath):
            if filter in item:
                ls.append(item_abspath)
        if os.path.isdir(item_abspath):
            ls += recursive_ls(item_abspath, filter)
    return ls

locale = open('locales/zh-Hans.json', mode='r', encoding='utf-8')
hans = locale.read()
hant = converter.convert(hans)
locale.close()
locale = open('locales/zh-Hant.json', mode='w', encoding='utf-8')
locale.write(hant)
locale.close()

for file in recursive_ls('content', 'zh-hans.md'):
    locale = open(file, mode='r', encoding='utf-8')
    hans = locale.read()
    hant = converter.convert(hans)
    hant = hant.replace('zh-hans', 'zh-hant')
    locale.close()
    locale = open(file.replace('zh-hans', 'zh-hant'), mode='w', encoding='utf-8')
    locale.write(hant)
    locale.close()
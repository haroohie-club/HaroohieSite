import os
import pathlib
import shutil
import sys

dir = pathlib.Path(sys.argv[1])
langcode = dir.name

for root, dirs, files in os.walk(dir):
    for file in files:
        if file.endswith('.md'):
            if file == f'0.{langcode}.md':
                shutil.move(os.path.join(root, file), os.path.join(root, '0.index.md'))
            elif file == f'{langcode}.md' or f'.{langcode}.' in file:
                shutil.move(os.path.join(root, file), os.path.join(pathlib.Path(root).parent, f'{pathlib.Path(root).name}.md'))
            else:
                os.remove(os.path.join(os.path.join(root, file)))
    for dir in dirs:
        if len(os.listdir(os.path.join(root, dir))) == 0:
            os.remove(os.path.join(root, dir))
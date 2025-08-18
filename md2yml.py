import os
import pathlib
import sys

for file_path in os.listdir(sys.argv[1]):
    path = os.path.join(sys.argv[1], file_path)
    with open(path) as file:
        c = file.read()
    lines = c.split('\n')
    new_lines = []
    for line in lines:
        if line == '---':
            continue
        new_lines.append(f'{line}\n')
    desc = new_lines.pop()
    new_lines.insert(1, f"description: '{desc[:-1]}'\n")
    with open(path.replace('.md', '.yml'), 'w+') as new_file:
        new_file.writelines(new_lines)
    os.remove(path)
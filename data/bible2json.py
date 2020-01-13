#%%
import csv
import json

tren = []
with open('trcn-esv.csv', newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        tren.append(row)
sien = []
with open('sicn-esv.csv', newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        sien.append(row)
#%%
bible = {}
for i in range(len(tren)):
    bible[tren[i][0]] = [ sien[i][2], sien[i][1], tren[i][1] ]

with open('bible.json', 'w', encoding='utf-8') as json_file:
    json.dump(bible, json_file, ensure_ascii=False)


# %%

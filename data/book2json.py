#%%
import csv
import json

data = []
with open('books.csv', newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        data.append(row)

tr_names = {}
si_names = {}
en_names = {}
for i in range(len(data)):
    tr_names[i+1] = data[i][7]
    si_names[i+1] = data[i][2]
    en_names[i+1] = data[i][0]

book_ind = {}
for i in range(len(data)):
    for j in range(len(data[0])):
        book_ind[data[i][j]] = (i + 1)

with open('tr_names.json', 'w', encoding='utf-8') as json_file:
    json.dump(tr_names, json_file, ensure_ascii=False)
with open('si_names.json', 'w', encoding='utf-8') as json_file:
    json.dump(si_names, json_file, ensure_ascii=False)
with open('en_names.json', 'w', encoding='utf-8') as json_file:
    json.dump(en_names, json_file, ensure_ascii=False)
with open('book_ind.json', 'w', encoding='utf-8') as json_file:
    json.dump(book_ind, json_file, ensure_ascii=False)
#%%
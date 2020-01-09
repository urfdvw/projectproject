import csv
import json

data = []
with open('books.csv', newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        data.append(row)
data[0][0] = data[0][0][1:]

suggestion = {}
for i in range(len(data)):
    for j in range(len(data[0])):
        if j in [0, 1]:
            suggestion[data[i][j]] = data[i][0]
        else:
            suggestion[data[i][j]] = data[i][2]
link = {}
for i in range(len(data)):
    link[data[i][0]] = data[i][1]
    link[data[i][2]] = data[i][1]

with open('suggestion.json', 'w', encoding='utf-8') as json_file:
    json.dump(suggestion, json_file, ensure_ascii=False)
with open('link.json', 'w', encoding='utf-8') as json_file:
    json.dump(link, json_file, ensure_ascii=False)

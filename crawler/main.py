from requests import Session
from bs4 import BeautifulSoup
import json

s = Session()
bsObj = BeautifulSoup(s.get('https://www.fusioncharts.com/dev/chart-attributes/errorline').text, 'lxml')

lis = []
for ul in bsObj.findAll('ul', attrs={'class': 'list-unstyled'}):
    lis += [{'title': li.text, 'chartType': li.attrs['data-alias']} for li in ul.findAll('span') if li.has_attr('data-alias')]

jsonFile = open('../js/test-spac-allcharts.js', 'wb+')
jsonFile.write('const charts = ['.encode('utf-8'))

for li in lis:
    jsonData = s.get('https://www.fusioncharts.com/dev/portal/attribute/'+li['chartType']+'/code').text
    j = json.loads(jsonData)
    jsonFile.write(j['jsCode'].encode('utf-8'))
    jsonFile.write(','.encode('utf-8'))

jsonFile.write('];'.encode('utf-8'))

jsonFile.write('\nconst titleMap = '.encode('utf-8'))
jsonFile.write(json.dumps(lis).encode('utf-8'))

jsonFile.close()
#!/usr/bin/env python3
"""슬라이드 순서대로 .pageno 를 다시 매긴다. 표지(1)와 마무리(마지막)는 번호를 달지 않는다."""
import re, sys

path = 'index.html'
s = open(path, encoding='utf-8').read()
parts = s.split('<section class="slide')
total = len(parts) - 1
n = 0
out = [parts[0]]
for i, sl in enumerate(parts[1:], 1):
    n += 1
    if re.search(r'<p class="pageno">\d+</p>', sl):
        sl = re.sub(r'<p class="pageno">\d+</p>', f'<p class="pageno">{n:02d}</p>', sl)
    out.append(sl)
open(path, 'w', encoding='utf-8').write('<section class="slide'.join(out))
print(f"{total}장 · 페이지 번호 재부여 완료")

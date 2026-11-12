#!/usr/bin/env python3
"""Validate and compute rate/average metrics from local CSV; no external access."""
import argparse, csv, json, math
from collections import defaultdict
from pathlib import Path

REQUIRED=('period','metric','metric_type','numerator','denominator','source')

def parse_number(v,field,row):
    if v is None or str(v).strip()=='':return None
    try:n=float(v)
    except(ValueError,TypeError):raise ValueError(f'Row {row}: invalid {field}')
    if not math.isfinite(n) or n<0:raise ValueError(f'Row {row}: negative/nonfinite {field}')
    return n

def analyze(path):
    with open(path,encoding='utf-8-sig',newline='') as f:
        rd=csv.DictReader(f)
        if not rd.fieldnames:raise ValueError('Missing header')
        missing=set(REQUIRED)-set(rd.fieldnames)
        if missing:raise ValueError('Missing columns: '+', '.join(sorted(missing)))
        rows=list(rd)
    if not rows:raise ValueError('No metrics')
    out=[]; warnings=[];keys=set()
    for i,x in enumerate(rows,2):
        period=x['period'].strip();metric=x['metric'].strip();typ=x['metric_type'].strip().lower()
        if not period or not metric:raise ValueError(f'Row {i}: blank period/metric')
        if typ not in ('rate','average'):raise ValueError(f'Row {i}: metric_type must be rate or average')
        key=(period,metric)
        if key in keys: warnings.append(f'Row {i}: duplicate period+metric; possible double count')
        keys.add(key)
        num=parse_number(x['numerator'],'numerator',i);den=parse_number(x['denominator'],'denominator',i)
        flag=None;value=None
        if num is None or den is None:flag='MISSING_VALUE'
        elif den==0:flag='NOT_COMPUTABLE_ZERO_DENOMINATOR'
        elif typ=='rate' and num>den:flag='INVALID_NUMERATOR_GT_DENOMINATOR'
        elif not x['source'].strip():flag='MISSING_SOURCE'
        else:value=round((num/den)*(100 if typ=='rate' else 1),4)
        out.append({'period':period,'metric':metric,'metric_type':typ,'numerator':num,'denominator':den,'source':x['source'],'value':value,'unit':'percent' if typ=='rate' else 'units per item','status':flag or 'COMPUTED'})
    bymetric=defaultdict(list)
    for x in out:bymetric[x['metric']].append(x)
    changes=[]
    for m,v in bymetric.items():
        valid=sorted([x for x in v if x['value'] is not None],key=lambda x:x['period'])
        for a,b in zip(valid,valid[1:]):
            if a['metric_type'] != b['metric_type']:warnings.append(f'{m}: mismatched metric types');continue
            changes.append({'metric':m,'from':a['period'],'to':b['period'],'change':round(b['value']-a['value'],4),'unit':'percentage points' if a['metric_type']=='rate' else 'units per item','warning':'Periods sorted lexicographically; compare eligibility and scope before causal interpretation'})
    return {'metrics':out,'changes':changes,'warnings':warnings,'method':'Rate = numerator / denominator * 100; average = numerator / denominator. Deltas are absolute, not relative growth. No root causes inferred.'}

def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('csv_path',type=Path);p.add_argument('--output',type=Path)
    a=p.parse_args()
    try:res=analyze(a.csv_path)
    except(ValueError,OSError) as e:p.error(str(e))
    payload=json.dumps(res,ensure_ascii=False,indent=2)
    if a.output:a.output.write_text(payload+'\n',encoding='utf-8')
    else:print(payload)

if __name__=='__main__':main()

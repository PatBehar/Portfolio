#!/usr/bin/env python3
"""Offline process-step timing summary. No source access outside the supplied CSV."""
import argparse, csv, json, math
from pathlib import Path

REQUIRED=('step_id','step','owner','cycle_minutes','wait_minutes','weekly_volume','source')

def number(v,field,row):
    if v is None or str(v).strip()== '': return None
    try: out=float(v)
    except (ValueError,TypeError): raise ValueError(f'Row {row}: invalid {field}')
    if not math.isfinite(out) or out < 0: raise ValueError(f'Row {row}: negative/nonfinite {field}')
    return out

def analyze(path):
    with open(path,encoding='utf-8-sig',newline='') as f:
        reader=csv.DictReader(f)
        if not reader.fieldnames: raise ValueError('Missing header')
        missing=set(REQUIRED)-set(reader.fieldnames)
        if missing: raise ValueError('Missing columns: '+', '.join(sorted(missing)))
        rows=list(reader)
    if not rows: raise ValueError('No process steps')
    result=[]; warnings=[]; ids=set()
    for i,row in enumerate(rows,2):
        sid=(row['step_id'] or '').strip()
        if not sid or sid in ids: raise ValueError(f'Row {i}: blank/duplicate step_id')
        ids.add(sid)
        cycle=number(row['cycle_minutes'],'cycle_minutes',i)
        wait=number(row['wait_minutes'],'wait_minutes',i)
        vol=number(row['weekly_volume'],'weekly_volume',i)
        for field in ('owner','source'):
            if not (row[field] or '').strip(): warnings.append(f'Row {i}: missing {field}')
        if any(v is None for v in (cycle,wait,vol)): warnings.append(f'Row {i}: incomplete timing; estimate unavailable')
        result.append({'step_id':sid,'step':row['step'],'owner':row['owner'],'source':row['source'],
             'cycle_minutes':cycle,'wait_minutes':wait,'weekly_volume':vol,
             'estimated_wait_minutes_per_week':round(wait*vol,2) if wait is not None and vol is not None else None,
             'total_minutes_per_case':round(cycle+wait,2) if cycle is not None and wait is not None else None})
    ranked=sorted((x for x in result if x['estimated_wait_minutes_per_week'] is not None),key=lambda x:x['estimated_wait_minutes_per_week'],reverse=True)
    return {'rows':len(result),'ranked_by_estimated_weekly_wait':[x['step_id'] for x in ranked],
            'steps':result,'warnings':warnings,
            'method':'wait_minutes * weekly_volume for each step; same volume may be double counted across steps; does not imply money saved or root cause'}

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('csv_path',type=Path);p.add_argument('--output',type=Path)
    a=p.parse_args()
    try: res=analyze(a.csv_path)
    except (ValueError,OSError) as e: p.error(str(e))
    payload=json.dumps(res,ensure_ascii=False,indent=2)
    if a.output:a.output.write_text(payload+'\n',encoding='utf-8')
    else:print(payload)

if __name__=='__main__':main()

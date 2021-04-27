import os
import fun as ft
f=1
l=[1,2,3]
for i in l:
	k=0
	while(f):
		if(k<3):
			try:
				ft.call(i)
				break;
			except Exception as e:
				k=k+1
		else:
			break
